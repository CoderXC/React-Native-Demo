import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import MainTab from './pages/navigator/TabNavigator'
import OfficialDemo from './pages/home/OfficialDemo'
import MyScrollView from './pages/home/MyScrollView'

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

const App = () => {
  return (
     <NavigationContainer>
      <Stack.Navigator
      initialRouteName={'Home'}
      // 安卓配置界面跳转方式 从右往左
      screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
        <Stack.Screen name="MainTab" component={MainTab} options={{title: 'FlatList'}}/>
        <Stack.Screen name={'OfficialDemo'} component={OfficialDemo} options={{title: '官方demo'}}></Stack.Screen>
        <Stack.Screen name={'MyScrollView'} component={MyScrollView} options={MyScrollViewScreenOptions}></Stack.Screen>
        </Stack.Navigator>
     </NavigationContainer>
  );
}

export default App;