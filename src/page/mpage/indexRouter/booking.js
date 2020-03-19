// 预约回填页面

import React from 'react'

// 引入input标签页面
import Inp from '../../../componets/input'
// 引入导航组件页面
import Navs from '../../../componets/nav'

import IndexCss from './css/index.module.scss'
class Booking extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <Navs name="预约号录入" />
                <div className={IndexCss.bgs}><Inp name="预约号" /></div>
            </div>
        );
    } 
}

export default Booking;