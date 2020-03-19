import React from "react";

// 配置路由   引入路由标签
import {
  Link
} from "react-router-dom"; 
// 引入json文件数据
import Data from "../../data.json";

// 引入宫格布局
// import { Grid } from 'antd-mobile';

// 引入flex布局
import { Flex, WhiteSpace } from "antd-mobile";
// 引入样式文件
import IndexCss from "./index.module.css";

import Hade from '../../componets/head'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // 将json文件的值复制给data数组
    this.setState({
      data: Data.data
    });
    // console.log(this.state.data);
  }

  render() {
    return (
      <div>
        <Hade />
        <div className={IndexCss.indexBody}>
          {this.state.data.length && <div className={IndexCss.indexs}>
            {
              this.state.data.map((v, i) => {
                return (<div className={IndexCss.maps} key={i}>
                  <Link to={"/mpage/"+v.url} className={IndexCss.item}>
                    <i className={["iconfont " + v.iocn]}></i>
                    <div>{v.title}</div>
                  </Link>
                </div>
                )
              })
            }
          </div>}
          <div className={IndexCss.quit}>
            <div className={IndexCss.retquit} onClick={() => { this.props.history.push("/") }}>
              <i className={"iconfont icon-tuichu"}></i>
              <div>退出登录</div>
            </div>
          </div>
        </div>
        <div className={IndexCss.bot}>
        </div>
      </div>
    );
  }
}
export default Index;