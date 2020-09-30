import React, {Component} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import MyButton from '@/customComponents/MyButton'

// {
//     "id": 28,
//     "title": "何以为家",
//     "star": "4.5",
//     "publicTime": "2019-04-29",
//     "type": "剧情",
//     "toStar": "娜丁·拉巴基",
//     "performer": "赞恩·阿尔·拉菲亚/约丹诺斯·希费罗/博鲁瓦蒂夫·特雷杰·班科尔/卡萨尔·艾尔·哈达德/法迪·尤瑟夫/海塔·塞德拉·伊扎姆/阿拉·乔什涅/娜丁·拉巴基/埃利亚斯·库利/努尔·艾尔·侯赛尼",
//     "country": "黎巴嫩/法国/美国",
//     "alias": "迦百农/星仔打官司(港)/我想有个家(台)/Cafarnaúm/Capernaum/Capharnaüm/كفرناحوم",
//     "videoDescribe": "　　法庭上，十二岁的男孩赞恩向法官状告他的亲生父母，原因是，他们给了他生命。是什么样的经历让一个孩子做出如此不可思议的举动？故事中，赞恩的父母在无力抚养和教育的状况下依然不停生育，作为家中的长子赞恩，弱小的肩膀承担了无数生活的重压。当妹妹被强行卖给商贩为妻时，赞恩愤怒离家，之后遇到一对没有合法身份的母子，相互扶持勉强生活。然而生活并没有眷顾赞恩，重重磨难迫使他做出了令人震惊的举动……",
//     "img": "https://file.peakchao.com:188/何以为家.webp",
//     "video": "https://file.peakchao.com:188/何以为家.mp4",
//     "videoTime": "126",
//     "episodes": 0
//   }

// 电影列表cell
export default class MovieListCell extends Component {
    constructor(props) {
        super(props);
    }
    render(h) {
        return (
            <TouchableOpacity style={cellStyles.container} onPress={this.props.onPress}>
                <View style={cellStyles.info}>
                    <Image style={cellStyles.cover} source={{uri: this.props.item.img}}></Image>
                    <View style={cellStyles.content}>
                        <Text style={cellStyles.title}>{this.props.item.title}</Text>
                        <Text style={cellStyles.scoreText}>{`观众评分 `}
                            <Text style={cellStyles.scoreValue}>{this.props.item.star}</Text>
                        </Text>
                        <Text style={cellStyles.toStar}>{`导演：${this.props.item.toStar}`}</Text>
                        <View style={cellStyles.performerInfo}>
                            <Text style={cellStyles.performer}>主演：</Text>
                            <Text style={[cellStyles.performer, {flex: 1}]} numberOfLines={3}>{this.props.item.performer}</Text>
                        </View>
                    </View>
                </View>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['hotpink', 'red']} style={cellStyles.linearGradient}>
                    <MyButton style={cellStyles.buyBtn} text={'购票'} onPress={this.props.buyClick}></MyButton>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

const cellStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 15,
        height: 140,
    },
    linearGradient: {
        marginLeft: 10,
        width: 60,
        height: 32,
        // backgroundColor: 'pink',
        borderRadius: 16,
        overflow: "hidden"
    },
    buyBtn: {
        // flex: 1,
        width: '100%',
        height: '100%',
        fontSize: 14,
        color: '#fff',
        lineHeight: 32,
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        // backgroundColor: 'pink'
    },
    cover: {
        height: '100%',
        width: 70
    },
    content: {
        flex: 1,
        marginLeft: 12,
        // backgroundColor: 'skyblue'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    scoreText: {
        marginTop: 10,
        fontSize: 12,
        color: '#333'
    },
    scoreValue: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'orange'
    },
    toStar: {
        marginTop: 10,
        fontSize: 12,
        color: 'gray'
    },
    performerInfo: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'pink'
    },
    performer: {
        fontSize: 12,
        lineHeight: 15,
        color: 'gray'
    }
});