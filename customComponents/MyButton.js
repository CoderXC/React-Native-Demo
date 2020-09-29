import React,{Component} from 'react'
import {Text,TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
// let goldenRatio = 0.618//黄金比例
export default class MyButton extends Component {
    // static defaultProps = {
    //     fColor:'#000',
    //     size:10
    // };
    static propTypes = {
        //文本的样式
        style:PropTypes.object,
        //文本
        text:PropTypes.string.isRequired,
        //按钮事件
        onPress:PropTypes.func.isRequired,
        //用于给残障人士显示的文本
        accessibilityLabel:PropTypes.string,
    }
    render(){
        let {style,text,accessibilityLabel} = this.props
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text style={{
                    borderRadius:5,
                    // shadowRadius:10,
                    // shadowOpacity:1,
                    // shadowOffset:{width:-5,height:5},
                    // shadowColor:'#999',
                    // fontWeight:'bold',
                    // backgroundColor:bgColor,
                    color:'#000',
                    ...style}}
                    accessibilityLabel={accessibilityLabel}
                    >{text}</Text>
            </TouchableOpacity>
        )
    }
}