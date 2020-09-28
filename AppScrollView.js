import React from 'react';
import { 
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    Image, Dimensions
} from 'react-native';

// scrollView测试组件
function MyScrollView(props) {
    const contentElems = [];
    props.datas.forEach((model) => {
        contentElems.push(<Text style={styles.text} key={'text-' + model.id}>{model.info}</Text>)
        contentElems.push(<Image source={{uri: model.url}} style={styles.image} key={'image-' + model.id}></Image>)
    });

    return (
        <SafeAreaView style={styles.scrollView}>
            <ScrollView style={styles.scrollView}>
                {contentElems}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
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