// 这是一个查货核对的订单

// 引入react 
import React from 'react'
// 引入navs组件
import Navs from '../../../componets/nav'

// 引入ui库的input标签
import { InputItem } from 'antd-mobile';

// 引入 局部样式 
import IndexCss from './css/chahuo.module.scss'
// 引入DuvINp 组件
import InpDiv from '../../../componets/inp-shade'
// 引入axios请求
import Post from '../../../axios/request'


class Chahuo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            req_id:'',
            number:'',
            data:{}
        }
    }
    componentDidMount() {
        let inputEl = this.refs.input;
        inputEl.focus()

        Post("/api/test/check?status=1",{"req_id":1584521078,"lading_number":"123456","number":"123456"})
        Post("/api/test/check_save?status=0",{"req_id":1584522127,"number":"123456","op_remark":"op remark"})
    }


    hendelGoNext = (v) => {
        if (v.keyCode === 13) {
            let inputText = this.refs.inputText
            inputText.focus()
        }
    }

    handleAxios = async (v)=>{
        if(v.keyCode === 13){
            let {req_id,number} = this.state
            let res = await  Post("/api/test/check?status=1",{req_id,number})
            console.log(res);
            
            this.setState({
                req_id:'',
                number:'',
                data:res
            })
        }
    }
    render() {
        return (
            <div>
                <Navs name="查货核对" />
                <div className={IndexCss.chahuo}>
                    <div className={IndexCss.chuhuodan}>
                        <div className={IndexCss.chuhuoTetx}>
                            出货单号
                            </div>
                        <InputItem
                            ref="input"
                            onKeyDown={this.hendelGoNext}
                            onChange={(v)=>{this.setState({req_id:v})}}
                            value={this.state.req_id}
                        />
                    </div>
                    <div className={IndexCss.chuhuodan}>
                        <div className={IndexCss.chuhuoTetx}>
                            出货箱
                            </div>
                        <InputItem
                            ref="inputText"
                            onChange={(v)=>{this.setState({number:v})}}
                            value={this.state.number}
                            onKeyDown={this.handleAxios}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Chahuo;