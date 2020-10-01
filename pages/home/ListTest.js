import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default class TestList extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <FlatList 
                data={[]}
                refreshing={true}
                onRefresh={() => {}}
                />
            </SafeAreaView>
        );
    }
}