import React, { Component } from 'react'
import { Text, View, FlatList, SafeAreaView, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyListEmptyView from '@/customComponents/MyListEmptyView'

// 主页界面
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], 
            selectIndex: -1,
            refreshing: false,
            headerDisplay: 'none', //根据数据源是否为空控制头部展示
        };
        this.onRefresh = this.onRefresh.bind(this);
        // this.onEndReached = this.onEndReached.bind(this);
    }

    // 行元素选中回调
    itemClick(item, index) {
        this.setState({selectIndex: index});
        this.props.navigation.navigate(item.routeName, {name: '传参测试标题'});
    }

    // 下拉刷新回调
    onRefresh() {
        if (this.state.refreshing) {
            return;
        }
        this.setState({refreshing: true});
        setTimeout(() => {
            let listData = [
                {id: '1', title: '官方demo', routeName: 'OfficialDemo'},
                {id: '2', title: 'ScrollView', routeName: 'MyScrollView'}
            ];
            const headerDisplay = listData.length > 0 ? 'flex' : 'none';
            this.setState({refreshing: false, data: listData, headerDisplay: headerDisplay});
        }, 1000);
    }

    // 上拉加载回调
    // onEndReached() {
    //     Alert.alert('上拉加载');
    // }

    renderItem = ({item, index}) => {
        return (
            <Item 
            item={item}
            index={index}
            onPress={() => {this.itemClick(item, index)}} 
            selectIndex={this.state.selectIndex}>
            </Item>
        );
    };
    keyExtractor = (item, index) => (String(index));
    render(h) {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList 
                data={this.state.data} 
                renderItem={this.renderItem}
                ItemSeparatorComponent={ItemDivideComponent}
                ListHeaderComponent={<ListHeader headerDisplay={this.state.headerDisplay} />}
                ListFooterComponent={<ListFooter headerDisplay={this.state.headerDisplay}/>}
                ListEmptyComponent={<MyListEmptyView refreshing={this.state.refreshing} onPress={this.onRefresh} />}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
                // onEndReachedThreshold={0.1}
                // onEndReached={this.onEndReached}
                keyExtractor={this.keyExtractor}>
                </FlatList>
            </SafeAreaView>
        );
    }
}

// 列表行元素组件
const Item = ({item, index, onPress, selectIndex}) => {
    const backgroundColor = index == selectIndex ? "#f9c2ff" : "skyblue";
    return (
        <TouchableOpacity 
        onPress={onPress} 
        style={[styles.item, {backgroundColor}]}>
            <Text style={styles.itemText}>{`${index + 1}、${item.title}`}</Text>
        </TouchableOpacity>
    );
}

// 列表行分割线组件
class ItemDivideComponent extends Component {
    render() {
        return (
            <View style={styles.separator}></View>
        );
    }
}

// 列表头部组件
class ListHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const imageUrl = 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2582590014,2299834898&fm=26&gp=0.jpg';
        return (
            <ImageBackground 
            source={{uri: imageUrl}}
            style={[styles.header, {display: this.props.headerDisplay}]}>
                <Text style={styles.headerText}>{'ListHeaderComponent'}</Text>
            </ImageBackground>
        );
    }
}

// 列表尾部组件
class ListFooter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const logoUrl = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4154050993,1802582157&fm=26&gp=0.jpg';
        return (
            <View style={[styles.footer, {display: this.props.headerDisplay}]}>
                <Image style={styles.footerImage} source={{uri: logoUrl}}></Image>
                <Text style={styles.footerText}>{'To be perfect...'}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'pink'
    },
    
    // 行元素组件样式
    item: {
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 10
    },
    itemText: {
        fontSize: 26,
    },

    // 头部组件样式
    header: {
        width: '100%',
        height: 50
    },
    headerText: {
        flex: 1,
        lineHeight: 50,
        fontSize: 25,
        fontWeight: "bold",
        color: '#fff', 
        textAlign: "center",
        // backgroundColor: 'pink'
    },

    // 尾部组件样式
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        // backgroundColor: 'pink'
    },
    footerImage: {
        resizeMode: "contain",
        width: 30,
        height: 30,
        // backgroundColor: 'skyblue'
    },
    footerText: {
        paddingHorizontal: 20,
        fontSize: 20,
        color: 'darkgray'
    },

    // 分割线样式
    separator: {
        height: 1,
        backgroundColor: 'skyblue',
        marginHorizontal: 10
    },
});