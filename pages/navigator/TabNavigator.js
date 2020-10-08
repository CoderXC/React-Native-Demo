import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../home/Home'
import Movie from '../movie/Movie'

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
                name={'Home'}
                component={Home} 
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
                name={'Movie'}
                component={Movie} 
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