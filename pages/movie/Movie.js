import React, { Component } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import MovieListCell from './components/MovieListCell'
import MyListEmptyView from '@/customComponents/MyListEmptyView'

// 服务器地址
const MockSever = 'http://web.peakchao.top:250';
// 视频列表接口路径
const ApiMovieList = '/video/getVideoList';
// 视频banner列表
const ApiBannerList = '/video/getVideoBanner'

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            bannerData: [],
            refreshing: false,
            haveMoreData: true
        };
        this.onRefresh = this.onRefresh.bind(this);
    }

    page = 1;

    componentDidMount() {
        this.onRefresh();
    }

    onItemClick(item, index) {
        alert(item.title);
    }

    buyClick(item) {
        alert('功能待接入中...');
    }

    getFetchUrl(apiPath, params) {
        let url = MockSever + apiPath;
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        } 
        return url;
    }

    onRefresh() {
        if (this.state.refreshing) {
            return;
        }
        this.setState({refreshing: true})

        const params = {
            page: 1,
            size: 10
        }

        fetch(this.getFetchUrl(ApiMovieList, params))
        .then((response) => response.json())
        .then((responseJson) => {
            const result = responseJson['result'];
            const haveMoreData = result['current'] < result['pages'];
            this.page = 1;
            this.setState({
                data: result['records'],
                haveMoreData: haveMoreData
            });
        })
        .catch((error) => {
            alert(error);
        })
        .finally(() => {this.setState({refreshing: false})})

        //刷新banner数据
        fetch(this.getFetchUrl(ApiBannerList, null))
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                bannerData: responseJson['result']
            });
        });
    }

    onEndReached() {
        const params = {
            page: this.page + 1,
            size: 10
        }

        fetch(this.getFetchUrl(ApiMovieList, params))
        .then((response) => response.json())
        .then((responseJson) => {
            const result = responseJson['result'];
            const haveMoreData = result['current'] < result['pages'];
            this.page++;            
            this.setState((state) => ({
                haveMoreData: haveMoreData,
                data: state.data.concat(result['records'])
            }));
        })
        .catch((error) => {
            alert(error);
        })
    }

    renderItem = ({item, index}) => {
        return (
            <MovieListCell 
            item={item} 
            onPress={() => {this.onItemClick(item, index)}}
            buyClick={() => {this.buyClick(item)}}
            />
        );
    }

    renderSwiper() {
        var itemArr = [];
        return this.state.bannerData.map((item) => {
            return (
                <TouchableOpacity key={item.id}>
                    <Image style={styles.bannerImage} source={{uri: item['img']}}></Image>
                </TouchableOpacity>
            );
        });
    }

    render(h) {
        const header = this.state.bannerData.length == 0 ? null : <Swiper style={styles.header} height={200}>{this.renderSwiper()}</Swiper>;
        return (
            <SafeAreaView style={{flex: 1}}>
                <FlatList 
                data={this.state.data}
                renderItem={this.renderItem}
                ItemSeparatorComponent={ItemDivideComponent}
                ListHeaderComponent={header}
                ListFooterComponent={<ListFooter haveMoreData={this.state.haveMoreData}/>}
                ListEmptyComponent={<MyListEmptyView refreshing={this.state.refreshing} onPress={this.onRefresh}/>}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
                onEndReachedThreshold={0.3}
                onEndReached={this.onEndReached.bind(this)}
                keyExtractor={(item) => (item.id.toString())}
                />
            </SafeAreaView>
        );
    }
}

// 列表行分割线组件
class ItemDivideComponent extends Component {
    render() {
        return (
            <View style={{backgroundColor: '#fff'}}>
                <View style={styles.separator}></View>
            </View>
        );
    }
}

// 列表尾部控件
class ListFooter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const display = this.props.haveMoreData ? 'none' : 'flex';
        return (
            <Text style={[styles.footer, {display: display}]}>木有啦, 快放手了啦~</Text>
        );
    }
}

const styles = StyleSheet.create({
    // 分割线样式
    separator: {
        height: 1,
        marginHorizontal: 15,
        backgroundColor: '#eee'
    },
    header: {
        backgroundColor: 'lightgray'
    },
    bannerImage: {
        height: 200,
        resizeMode: 'cover'
    },
    footer: {
        marginVertical: 20,
        textAlign: 'center',
        color: 'gray',
        fontSize: 14
    }
});

