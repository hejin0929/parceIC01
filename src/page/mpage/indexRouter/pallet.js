// 这是托盘管理组件的页面

// 引入react 
import React from 'react'

// 引入头部组件
import Navs from '../../../componets/nav'

// 引入标签页组件
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
// 引入局部样式
import IndexCss from './css/pickup.module.scss'

// 引入input组件
import Inp from '../../../componets/input'


const tabs = [
    { title: <Badge>装托盘</Badge> },
    { title: <Badge>清空托盘</Badge> },
    { title: <Badge>入库</Badge> },
];
class Pallet extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <Navs name="托盘管理" />
                <div>
                    <Tabs tabs={tabs}
                        initialPage={1}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <div className={IndexCss.tabsItem}>
                            <Inp name="托盘号"/>
                 </div>
                        <div>
                            <Inp name="托盘号"/>
                 </div>
                        <div>
                            <Inp name="库位"/>
                            <Inp name="托盘号"/>
                 </div>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Pallet;