import React, { Component } from 'react'
import { Text, View } from 'react-native';

export default class Movie extends Component {
    render(h) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>主页</Text>
            </View>
        );
    }
}