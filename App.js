import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './pages/TabNavigator'

// scrollView组件测试数据
// const imageUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601182756444&di=514544bd773f05b759b2f97395d8c23b&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg';
// const datas = [
//     {id:'1', info: 'Scroll me plz', url: imageUrl},
//     {id:'2', info: 'If you like', url: imageUrl},
//     {id:'3', info: 'Scrolling down', url: imageUrl},
//     {id:'4', info: "What's the best", url: imageUrl},
//     {id:'5', info: 'Framework around?', url: imageUrl},
//     {id:'6', info: 'React Native', url: imageUrl},
// ];

const App = () => {
  return (
    <NavigationContainer>
      <MainTab></MainTab>
    </NavigationContainer>
  );
}



export default App;