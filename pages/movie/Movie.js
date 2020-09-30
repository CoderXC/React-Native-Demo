import React, { Component } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MovieListCell from './components/MovieListCell'

export default class Movie extends Component {

    listData = [
        {
            "id": 28,
            "title": "何以为家",
            "star": "4.5",
            "publicTime": "2019-04-29",
            "type": "剧情",
            "toStar": "娜丁·拉巴基",
            "performer": "赞恩·阿尔·拉菲亚/约丹诺斯·希费罗/博鲁瓦蒂夫·特雷杰·班科尔/卡萨尔·艾尔·哈达德/法迪·尤瑟夫/海塔·塞德拉·伊扎姆/阿拉·乔什涅/娜丁·拉巴基/埃利亚斯·库利/努尔·艾尔·侯赛尼",
            "country": "黎巴嫩/法国/美国",
            "alias": "迦百农/星仔打官司(港)/我想有个家(台)/Cafarnaúm/Capernaum/Capharnaüm/كفرناحوم",
            "videoDescribe": "　　法庭上，十二岁的男孩赞恩向法官状告他的亲生父母，原因是，他们给了他生命。是什么样的经历让一个孩子做出如此不可思议的举动？故事中，赞恩的父母在无力抚养和教育的状况下依然不停生育，作为家中的长子赞恩，弱小的肩膀承担了无数生活的重压。当妹妹被强行卖给商贩为妻时，赞恩愤怒离家，之后遇到一对没有合法身份的母子，相互扶持勉强生活。然而生活并没有眷顾赞恩，重重磨难迫使他做出了令人震惊的举动……",
            "img": "https://file.peakchao.com:188/何以为家.webp",
            "video": "https://file.peakchao.com:188/何以为家.mp4",
            "videoTime": "126",
            "episodes": 0
          },
          {
            "id": 4,
            "title": "未知死亡",
            "star": "5.0",
            "publicTime": "2008-12-25",
            "type": "剧情/动作/爱情/悬疑/惊悚",
            "toStar": "A.R.目虏古多斯",
            "performer": "阿米尔·汗/缇努·阿南德/阿辛/吉雅·罕/Pradeep Rawat/Riyaz Khan",
            "country": "印度",
            "alias": "凶心人在宝莱坞/宝莱坞记忆拼图/Ghajini",
            "videoDescribe": "　　电信大亨杰辛哈尼亚（阿米尔•汗 Aamir Khan 饰）为人低调，某日却见报纸爆料他向一个叫卡尔帕谢蒂（阿辛 Asin 饰）的小广告模特大胆示爱，气愤之余杰辛哈尼亚去向这个造谣生事的女孩儿问责，谁料他途中看见一个美丽善良的女孩机智地帮助残疾儿童，而这 个女孩就是卡尔帕谢蒂，卡尔帕谢蒂并不认识杰辛哈尼亚，一场误会令别人以为她就是大亨的女友。杰辛哈尼亚隐瞒身份接近卡尔帕谢蒂，可后者以为他不过是求广告机会的无名小卒。杰辛哈尼亚结识卡尔帕谢蒂后开始了扮演双重身份的生活，两人在相处中感情逐渐加深。卡尔帕谢蒂从黑帮大佬手中救出了25名少女，惹来杀身之祸。杰辛哈尼亚遭连累被击中头部之后只能保留十五分钟的记忆，为了爱人，他艰难的凭借有限的记忆复仇……",
            "img": "https://file.peakchao.com:188/未知死亡.webp",
            "video": "https://file.peakchao.com:188/未知死亡.mp4",
            "videoTime": "185",
            "episodes": 0
          },      
    ]

    onItemClick(item, index) {
        alert(item.title);
    }
    buyClick(item) {
        alert('购买成功');
    }

    renderItem = ({item, index}) => {
        return (
            <MovieListCell 
            item={item} 
            onPress={() => {this.onItemClick(item, index)}}
            buyClick={() => {this.buyClick(item)}}
            />
        );
    }
    render(h) {
        return (
            <SafeAreaView style={{flex: 1}}>
                <FlatList 
                style={{backgroundColor: '#fff'}}
                data={this.listData}
                renderItem={this.renderItem}
                ItemSeparatorComponent={ItemDivideComponent}
                keyExtractor={(item,index) => (item.id.toString())}
                />
            </SafeAreaView>
        );
    }
}

// 列表行分割线组件
class ItemDivideComponent extends Component {
    render() {
        return (
            <View style={styles.separator}></View>
        );
    }
}

const styles = StyleSheet.create({
    // 分割线样式
    separator: {
        height: 1,
        backgroundColor: '#eeeeee',
        marginHorizontal: 15
    },
});

