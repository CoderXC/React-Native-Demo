import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MyButton from '@/customComponents/MyButton'

// 列表空数据占位显示组件
export default class MyListEmptyView extends Component {
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

const styles = StyleSheet.create({
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
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: 'skyblue',
        color: "#fff"
    }
});