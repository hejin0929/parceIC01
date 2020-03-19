// 这是小包装箱组件的页面
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
                <Navs name="小包装箱"/>
                <Inp name="请扫箱号"/>
            </div>
         );
    }
}
 
export default Packet;