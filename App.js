import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './pages/navigator/TabNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <MainTab></MainTab>
    </NavigationContainer>
  );
}



export default App;