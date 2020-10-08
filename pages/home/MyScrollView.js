import * as React from 'react';
// import React from 'react';
import { 
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    Image, Dimensions, Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// scrollView组件测试数据
const imageUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601182756444&di=514544bd773f05b759b2f97395d8c23b&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg';
const datas = [
    {id:'1', info: 'Scroll me plz', url: imageUrl},
    {id:'2', info: 'If you like', url: imageUrl},
    {id:'3', info: 'Scrolling down', url: imageUrl},
    {id:'4', info: "What's the best", url: imageUrl},
    {id:'5', info: 'Framework around?', url: imageUrl},
    {id:'6', info: 'React Native', url: imageUrl},
];

// scrollView测试组件
function MyScrollView({navigation}) {
    const contentElems = [];
    datas.forEach((model) => {
        contentElems.push(<Text style={styles.text} key={'text-' + model.id}>{model.info}</Text>)
        contentElems.push(<Image source={{uri: model.url}} style={styles.image} key={'image-' + model.id}></Image>)
    });

    
    return (
        <SafeAreaView style={styles.scrollView}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Button title={'设置界面标题'} onPress={() => navigation.setOptions({ title: 'ScrollView' })}></Button>
                {contentElems}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        paddingLeft: 15
    },
    image: {
        width: '100%',
        height: Math.floor(Dimensions.get('window').width * 2.5 / 4),
        resizeMode: 'cover'
    }
});

export default MyScrollView;