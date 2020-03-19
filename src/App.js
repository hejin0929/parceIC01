import React from "react";
// 配置路由   引入路由标签
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
// 引入样式初始化
import "./index.css";

import Mpage from './page/mpage'
// 引入登录组件
import Login from './page/login'

// 引入index页面组件
import Index from './page/index'

// 创建一个类组件
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/index" component={Index} />
            <Route path="/login" component={Login} />
            <Route path="/mpage" component={Mpage}></Route>
            <Route path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
