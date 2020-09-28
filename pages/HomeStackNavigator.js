import React, { Component } from 'react'
import { Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'

import Home from './home/Home'
import OfficialDemo from '../OfficialDemo'

const Stack = createStackNavigator();

export default class HomeStackNavigator extends Component {
    render(h) {
        return (
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={Home} options={{title:'demo列表'}}></Stack.Screen>
                <Stack.Screen name={'OfficialDemo'} component={OfficialDemo} options={{title: '官方demo'}}></Stack.Screen>
            </Stack.Navigator>
        );
    }
}