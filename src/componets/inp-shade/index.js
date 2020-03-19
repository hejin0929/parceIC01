// 引入react 
import React from 'react'

// 引入样式文件
import IndexCss from './index.module.scss'



class InpDiv extends React.Component {
    state = {}

    handelClickNtxt = ()=>{
        this.props.somClick()
    }
    render() {
        return (
            <div>
                <div className={IndexCss.tailHas}>
                    <div className={IndexCss.tailHasTitle}>{this.props.name}</div>
                    <div className={IndexCss.tailHasText} onClick={this.handelClickNtxt}>{this.props.value}</div>
                </div>
            </div>
        );
    }
}

export default InpDiv;