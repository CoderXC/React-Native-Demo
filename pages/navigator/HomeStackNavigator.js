import React, { Component } from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Home from '../home/Home'
import OfficialDemo from '../home/OfficialDemo'
import MyScrollView from '../home/MyScrollView'

const Stack = createStackNavigator();

export default class HomeStackNavigator extends Component {
    render(h) {
        return (
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={Home} options={{title:'FlatList'}}></Stack.Screen>
                <Stack.Screen name={'OfficialDemo'} component={OfficialDemo} options={{title: '官方demo'}}></Stack.Screen>
                <Stack.Screen name={'MyScrollView'} component={MyScrollView} options={{title: 'ScrollView'}}></Stack.Screen>
            </Stack.Navigator>
        );
    }
}