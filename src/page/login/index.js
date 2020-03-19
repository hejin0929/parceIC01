// 引入react
import React from 'react'

// 引入ui库的文本输入组件
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';

// 引入头部组件
import Hade from '../../componets/head'

// 引入json文件
import data from './data.json'

// 引入提示文件
import { Toast } from 'antd-mobile';

class Login extends React.Component {
    state = {
        value:{
        name: '',
        password: '',
        }
    }


    componentDidMount (){
        let data = JSON.parse(localStorage.getItem('name'))
        console.log(data[0].name);
        data = {
            name:data[0].name,
            password:data[1].password
        }
        this.setState({
            value:data
        })
    }
    changePassword = (v) => {
        this.setState({
            password: v
        })
    }

    changeName = (v) => {
        this.setState({
            name: v
        })
    }

    HandelClick = () => {
        if (this.state.value.name == data.name && this.state.value.password == data.password) {
            Toast.success('登陆成功！');
            localStorage.setItem('name',JSON.stringify([{name:this.state.value.name},{password:this.state.value.password}]))
            this.props.history.push("/index")
        } else if (this.state.value.name == '' || this.state.value.password == '') {
            Toast.fail('用户名或密码不能为空！');
        } else {
            Toast.fail('用户名或密码错误！');
        }
    }

    divStyleCss = {
        padding: "15px"
    }
    render() {
        return (
            <div>
                <Hade />
                <div style={this.divStyleCss}>
                    <List>
                        <InputItem
                            placeholder="1300130000"
                            editable="true"
                            value={this.state.value.name}
                            onChange={this.changeName}
                        >用户名</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type="password"
                            placeholder="****"
                            editable="true"
                            value={this.state.value.password}
                            onChange={this.changePassword}
                        >密码</InputItem>
                        <WhiteSpace />
                        <Button type="primary" onClick={this.HandelClick}>登录</Button>
                        {/* <WhiteSpace /> */}
                    </List>
                </div>
            </div>
        );
    }
}

export default Login;