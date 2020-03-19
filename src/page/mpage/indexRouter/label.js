// 这是一个标签核对的页面

// 引入react
import React from 'react'

// 引入标题 navs 组件
import Navs from '../../../componets/nav'
// 引入样式文件
import IndexCss from './css/label.module.scss'

import { InputItem, Checkbox,Toast } from 'antd-mobile';

// 引入一个div组件
import InpDiv from '../../../componets/inp-shade'

// 引入axios 
import axios from 'axios'
// 创建一个类组价
class Label extends React.Component {
    state = {
        checked: false,
        req_id: "",
        lading_number: "",
        number: "",
        oneBlur: false,
        twoBlur: false
    }
    // 点击核对出货单的事件处理函数
    handleChange = () => {
        this.setState({
            checked: !this.state.checked
        })

    }
    // 出货单号的input事件函数
    handleChangereq_id = (v) => {
        this.setState({
            req_id: v
        })
    }
    // 货箱号input处理函数
    handleChangelading_number = (v) => {
        this.setState({
            lading_number: v
        })
    }
    // 跟踪号的input事件处理函数
    handleChangenumber = (v) => {
        this.setState({
            number: v
        })
    }
    handleClcik = () => {
        this.setState({
            oneBlur:true
        })

    }
    handleClear = ()=>{
        this.setState({
            twoBlur:true
        })
    }

    divAddInpOne = () => {
        if (this.state.oneBlur === false) {
           return <div className={IndexCss.divAdd}><InpDiv somClick={this.handleClcik} name="跟踪号" value={this.state.number} /></div>
        } else {
           return  <div className={IndexCss.tailHas}>
                <div className={IndexCss.text}>
                    跟踪号
                    </div>
                <div className={IndexCss.inp}>
                    <InputItem
                        autoFocus="autofocus"
                        onChange={this.handleChangenumber}
                        value={this.state.number}
                        onBlur={()=>{this.setState({oneBlur:false})}}
                        onKeyDown = {this.onAxios}
                    />
                </div>
            </div>
        }
    }

    divAddInpTwo = () => {
        if (this.state.twoBlur === false) {
            return <div className={IndexCss.divAdd}><InpDiv somClick={this.handleClear} name="出货箱" value={this.state.lading_number} /></div>
        }else{
            return <div className={IndexCss.container}>
                <div className={IndexCss.text}>
                    出货箱
            </div>
                <div className={IndexCss.inp}>
                    <InputItem
                        autoFocus="autofocus"
                        onChange={this.handleChangelading_number}
                        value={this.state.lading_number}
                        onKeyDown={this.handleKeyGo}
                        onBlur={()=>{this.setState({twoBlur:false})}}
                    />
                </div>
            </div>
        }
        }

     handleKeyaut = (v)=>{
         if(v.keyCode === 13){
            this.handleClear()
         }
     }
     handleKeyGo = (v)=>{
        if(v.keyCode === 13){
            this.handleClcik()
         }
     }


     onAxios = (e)=>{
        let {req_id,lading_number,number} = this.state
         if(e.keyCode === 13){
            Toast.loading("请求中...")
            axios.post("/api/test/lading_scan_check?sample=1",{
                req_id,
                lading_number,
                number
            }).then(res=>{
                console.log(res);
                Toast.hide()
                this.setState({
                    req_id:'',
                    lading_number:'',
                    number:''
                })
            })
         }else if(e.keyCode === 16){
            Toast.loading("请求中...")
            axios.post("/api/test/lading_scan_check?sample=0",{
                req_id,
                lading_number,
                number
            }).then(res=>{
                Toast.hide()
                Toast.fail(res.data.info);
                
                this.setState({
                    req_id:'',
                    lading_number:'',
                    number:''
                })

                
            })
         }
         
     }
    render() {
        return (
            <div className={IndexCss.label}>
                <Navs name="标签核对" />
                <div className={IndexCss.bodylaber}>
                    {this.state.checked && <div className={IndexCss.shipment}>
                        <div className={IndexCss.text}>
                            出货单号
                    </div>
                        <div className={IndexCss.inp}>
                            <InputItem
                                onChange={this.handleChangereq_id}
                                value={this.state.req_id}
                                onKeyDown={this.handleKeyaut}
                            />
                        </div>
                    </div>
                    }
                    {this.divAddInpTwo()}
                    {this.divAddInpOne()}
                    <div className={IndexCss.checked}>
                        <Checkbox onChange={this.handleChange}
                        checked={this.state.checked}>核对出货单</Checkbox>
                    </div>
                </div>
            </div>
        );
    }
}

export default Label;