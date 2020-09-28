import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/Ionicons';
import HomeStackNavigator from './HomeStackNavigator'
import MovieStackNavigator from './MovieStackNavigator'

const HomeTabName = 'HomeStackNavigator';
const MovieTabName = 'MovieStackNavigator'
const tabBarOptions = {activeTintColor: 'tomato', inactiveTintColor: 'gray'};

const Tab = createBottomTabNavigator();

// const screenOptions = ({ route }) => ({
//     tabBarIcon: ({ focused, color, size }) => {
//         let iconName;
//         switch (route.name) {
//             case HomeTabName:
//                 iconName = 'ios-map';
//                 break;
//             case MovieTabName:
//                 iconName = 'ios-videocam';
//             default:
//                 break;
//         }
//         iconName = focused ? iconName : `${iconName}-outline`;
//         return <Icon name={iconName} size={size} color={color}></Icon>
//     },
// });


// tab导航
export default class MainTab extends Component {
    render() {
        return (
            <Tab.Navigator tabBarOptions={tabBarOptions}>
                <Tab.Screen 
                name={HomeTabName}
                component={HomeStackNavigator} 
                options={(props) => {
	                return {
                        tabBarLabel: '组件demo',
                        tabBarVisible: !props.route.state || props.route.state.index === 0,
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName = 'ios-map';
                            iconName = focused ? iconName : `${iconName}-outline`;
                            return <Icon name={iconName} size={size} color={color}></Icon>
                        }
	                };
            	}}>
                </Tab.Screen>

                <Tab.Screen 
                name={MovieTabName}
                component={MovieStackNavigator} 
                options={(props) => {
	                return {
                        tabBarLabel: '电影',
                        tabBarVisible: !props.route.state || props.route.state.index === 0,
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName = 'ios-videocam';
                            iconName = focused ? iconName : `${iconName}-outline`;
                            return <Icon name={iconName} size={size} color={color}></Icon>
                        }
	                };
            	}}>
                </Tab.Screen>
            </Tab.Navigator>      
        );
    }
}