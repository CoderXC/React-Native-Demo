import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import Movie from '../movie/Movie'

const Stack = createStackNavigator();

export default class MovieStackNavigator extends Component {
    render(h) {
        return (
            <Stack.Navigator>
                <Stack.Screen name={'电影列表'} component={Movie}></Stack.Screen>
            </Stack.Navigator>
        );
    }
}