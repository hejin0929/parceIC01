// 这是一个换标页面

// 创建一个react
import React from 'react'

// 引入input标签页面
import Inp from '../../../componets/input'

// 引入navs组件
import Navs from '../../../componets/nav'

// 创建一个类组件、
class Packet extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navs name="换标"/>
                <Inp name="打印机号"/>
            </div>
         );
    }
}
 
export default Packet;