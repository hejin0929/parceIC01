// 引入react
import React from 'react'
// 引入输入框组件     使用ant design mobile的ui库
import { InputItem } from 'antd-mobile';

// 引入局部样式
 import IndexCss from './index.module.scss'
// 创建类组件函数
class Inp extends React.Component {
    render() {
        return (
            <div className={IndexCss.index}>
                <div className={IndexCss.text}>{this.props.name}</div>
                <div className={IndexCss.inputCss}>
                <InputItem/>
                </div>
            </div>
        );
    }
}

export default Inp;