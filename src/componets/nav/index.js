// 引入react
import React from 'react'

// 引入ui组件
import { NavBar, Icon } from 'antd-mobile';

class Navs extends React.Component {
    state = {}

    handelClick = () => {
        window.history.go(-1);
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="返回"
                    onLeftClick={this.handelClick}
                >{this.props.name}</NavBar>
            </div>
        );
    }
}

export default Navs;