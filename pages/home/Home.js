import React, { Component } from 'react'
import { Text, View, FlatList, SafeAreaView, StyleSheet, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyButton from '@customComponents/MyButton'
import { block, color } from 'react-native-reanimated';

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

// 列表头部视图
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

// 列表空数据占位显示组件
class ListEmptyComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.empty, {display: this.props.refreshing ? 'none' : 'flex'}]}>
                <Text style={styles.emptyText}>{'暂无数据'}</Text>
                <MyButton style={styles.emptyButton} text={'点击刷新'} onPress={this.props.onPress}></MyButton>
            </View>
        );
    }
}

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
    }

    // 行元素选中回调
    itemClick(item, index) {
        this.setState({selectIndex: index});
        this.props.navigation.navigate(item.routeName);
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
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
                renderItem={this.renderItem}
                ItemSeparatorComponent={ItemDivideComponent}
                ListHeaderComponent={<ListHeader headerDisplay={this.state.headerDisplay} />}
                ListEmptyComponent={<ListEmptyComponent refreshing={this.state.refreshing} onPress={this.onRefresh}></ListEmptyComponent>}
                keyExtractor={this.keyExtractor}>
                </FlatList>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'pink'
    },
    item: {
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 10
    },
    itemText: {
        fontSize: 26,
    },
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
    separator: {
        height: 1,
        backgroundColor: 'skyblue',
        marginHorizontal: 10
    },
    empty: {
        // display: "none"
        marginTop: 200,
        alignItems: "center",
        // backgroundColor: 'pink'
    },
    emptyText: {
        color: 'gray',
        fontSize: 24,
        // backgroundColor: 'blue'
    },
    emptyButton: {
        marginTop: 20,
        paddingVertical: 8,
        paddingHorizontal: 14,
        fontSize: 20,
        textAlign: "center",
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: 'skyblue',
        color: "#fff"
    }
});