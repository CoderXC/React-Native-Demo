import React, { Component } from 'react'
import { Text, View, Image, FlatList, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// 列表数据源
const ListData = [
    {id: '1', title: '官方demo', routeName: 'OfficialDemo'},
    {id: '2', title: 'ScrollView', routeName: 'MyScrollView'}
];

// 列表行元素
const Item = ({item, index, onPress, selectIndex}) => {
    const backgroundColor = index == selectIndex ? "#6e3b6e" : "#f9c2ff";
    return (
        <TouchableOpacity 
        onPress={onPress} 
        style={[styles.item, {backgroundColor}]}>
            <Text style={styles.title}>{`${index + 1}、${item.title}`}</Text>
        </TouchableOpacity>
    );
}

// 主页界面
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {selectIndex: -1};
    }

    itemClick(item, index) {
        this.setState({selectIndex: index});
        this.props.navigation.navigate(item.routeName);
    }

    render(h) {
        const renderItem = ({item, index}) => {
            return (
                <Item 
                item={item}
                index={index}
                onPress={() => {this.itemClick(item, index)}} 
                selectIndex={this.state.selectIndex}>
                </Item>
            );
        };
        const keyExtractor = (item, index) => (String(index));
        return (
            <SafeAreaView style={styles.container}>
                <FlatList 
                data={ListData} 
                renderItem={renderItem}
                keyExtractor={keyExtractor}>
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
    title: {
        fontSize: 26,
    }
});