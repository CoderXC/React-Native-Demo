import React, { Component } from 'react'
import { Alert, RefreshControl, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MovieListCell from './components/MovieListCell'
import MyListEmptyView from '@/customComponents/MyListEmptyView'

// 服务器地址
const MockSever = 'http://web.peakchao.top:250';
// 视频列表接口路径
const ApiMovieList = '/video/getVideoList';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
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

    getFetchUrl(params) {
        let url = MockSever + ApiMovieList;
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

        fetch(this.getFetchUrl(params))
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
    }

    onEndReached() {
        const params = {
            page: this.page + 1,
            size: 10
        }

        fetch(this.getFetchUrl(params))
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
    render(h) {
        return (
            <SafeAreaView style={{flex: 1}}>
                <FlatList 
                data={this.state.data}
                renderItem={this.renderItem}
                ItemSeparatorComponent={ItemDivideComponent}
                ListFooterComponent={<ListFooter haveMoreData={this.state.haveMoreData}/>}
                ListEmptyComponent={<MyListEmptyView refreshing={this.state.refreshing} onPress={this.onRefresh}/>}
                refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
                onEndReachedThreshold={0.1}
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
    footer: {
        marginVertical: 20,
        textAlign: 'center',
        color: 'gray',
        fontSize: 14
    }
});

