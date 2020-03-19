// 这是一个首页的嵌套路由的组件

import React from 'react'

import {
    Route,
    Link,
    Redirect
  } from "react-router-dom"; 
// 引入预约回填的组件
import Booking from './indexRouter/booking'

// 引入录用跟踪号的组件
import Entering from './indexRouter/enteringtracking'

// 引入大货拣货组件
import Pickup from './indexRouter/pickup'

// 引入标签核对组件
import Label from './indexRouter/label'

// 引入查货组件
import Ckecks from './indexRouter/check'

// 引入查货核对组件
import Chahuo from './indexRouter/chahuo'

// 引入托盘管理页面
import Pallet from './indexRouter/pallet'
// 引入小包拣货的路由
import Packet from './indexRouter/packet'
class Mpage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Route path="/mpage/index" component={Booking}></Route>
                <Route path="/mpage/enteringtracking" component={Entering}></Route>
                <Route path="/mpage/pickup" component={Pickup}></Route>
                <Route path="/mpage/label" component={Label}/>
                <Route path="/mpage/check" component={Ckecks}/>
                <Route path="/mpage/chahuo" component={Chahuo}/>
                <Route path="/mpage/pallet" component={Pallet}  />
                <Route path="/mpage/packet" component={Packet} />
            </div>
         );
    }
}

export default Mpage;