import React, { Component } from 'react'

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import Home from '../home/Home'
import OfficialDemo from '../home/OfficialDemo'
import MyScrollView from '../home/MyScrollView'

const Stack = createStackNavigator();

const MyScrollViewScreenOptions = ({route}) => (
    {
        title: route.params.name, 
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }
);

export default class HomeStackNavigator extends Component {
    
    render(h) {
        return (
            <Stack.Navigator
                initialRouteName={'Home'}
                // 安卓配置界面跳转方式 从右往左
                screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
            >
                <Stack.Screen name={'Home'} component={Home} options={{title:'FlatList'}}></Stack.Screen>
                <Stack.Screen name={'OfficialDemo'} component={OfficialDemo} options={{title: '官方demo'}}></Stack.Screen>
                <Stack.Screen name={'MyScrollView'} component={MyScrollView} options={MyScrollViewScreenOptions}></Stack.Screen>
            </Stack.Navigator>
        );
    }
}