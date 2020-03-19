// 这是一个录用跟踪号的组件页面

// 引入react
import React from 'react'

import { List, InputItem } from 'antd-mobile';

// 引入axios请求 
import Post from '../../../axios/request'
// 引入导航模块
import Navs from '../../../componets/nav'

import { Toast } from 'antd-mobile';

import IndexCss from './css/enteringtracking.module.scss'
// 创建类组件
class Entering extends React.Component {

    state = {
        select: false,
        req_id: "",
        number: "",
        Data: {
            dataList: [],
            tailAfter: [],
            boxList: []
        },
        userData: 0,
        userNuber: 0
    }

    componentDidMount() {
    }
    // 获取到用户填写的单号
    handelCase = (v) => {
        this.setState({
            req_id: v
        })
    }


    // 获取到用户填写的跟踪号
    handelTail = (v) => {
        this.setState({
            number: v
        })
    }

    // 当用户按下单号的回车键触发此函数
    handelGoNext = (event) => {
        if (event.keyCode === 13) {
            let input = this.refs.input
            input.focus()
        }
    }
    // 这是发送axios请求的函数
    handelKeyup = async (event) => {

        // 当用户按下回车键触发此函数
        let { req_id, number, userData } = this.state
        let Data = this.state.Data
        // console.log(Data.boxList);
        let { dataList, boxList, tailAfter } = Data
        // 判断是否按下的是回车键    如果是则进入此判断
        if (event.keyCode === 13 && req_id && number !== '') {
            // 添加一个遮罩
            Toast.loading('录入中...')
            // 只要有axios请求发送就添加扫描数
            userData++
            // 发送axios请求
            let res = await Post("/api/test/enteringtracking?sample=1", { "lading_number": "UPS", req_id, number })
            res.num = req_id
            let tail = tailAfter.indexOf(number)
            if (tail !== -1) {
                res.text = "跟踪号重复"
                dataList[tail].text = "跟踪号重复"
            } else if (tail === -1) {
                tailAfter.unshift(number)
            }
            // res.num = req_id
            dataList.unshift(res)
            // console.log(dataList);

            // ------------------------------------------------------------------------------------------

            let box = boxList.indexOf(req_id)
            if (box === -1) {
                boxList.unshift(req_id)
            }
            // 如果请求回来则把遮罩关闭
            Toast.hide()
            Data = { boxList, dataList, tailAfter }
            this.setState({
                Data,
                req_id: '',
                number: '',
                userData
            })
        } else if (event.keyCode === 16) {
            // 添加一个遮罩
            Toast.loading('录入中...')
            userData++
            let res = await Post("/api/test/lading_scan_check?sample=0", { "lading_number": "UPS", req_id, number })
            res.num = number
            dataList.unshift(res)
            // 如果请求回来则把遮罩关闭
            Toast.hide()
            let box = boxList.indexOf(req_id)
            if (box === -1) {
                boxList.unshift(req_id)
            }
            this.setState({
                Data,
                req_id: '',
                number: '',
                userData
            })
        }
    }
    // 定义一个变量来判断是否需要return 那一个标签

    handelClickNtxt = () => {
        // console.log(1);

        this.setState({
            inpSlt: 0
        })
    }

    RovmClick = () => {
        let { dataList, boxList, tailAfter } = this.state.Data
        dataList = []
        boxList = []
        tailAfter = []
        let Data = { dataList, boxList, tailAfter }
        this.setState({
            Data,
            req_id: '',
            number: '',
            userData: 0
        })
    }
    render() {

        return <div>
            <div className={IndexCss.nav}> <Navs name="录入跟踪号" /></div>
            <div className={IndexCss.bodys}>
                <div className={IndexCss.selectAdd}>
                    <span className={IndexCss.selectTitle}>快递服务</span>
                    <select className={IndexCss.commText}>
                        <option value="顺丰快递">顺丰快递</option>
                        <option value="中通快递">中通快递</option>
                        <option value="申通快递">申通快递</option>
                        <option value="天天快递">天天快递</option>
                        <option value="顺丰快递">顺丰快递</option>
                        <option value="中通快递">中通快递</option>
                        <option value="申通快递">申通快递</option>
                        <option value="天天快递">天天快递</option>
                        <option value="顺丰快递">顺丰快递</option>
                        <option value="中通快递">中通快递</option>
                        <option value="申通快递">申通快递</option>
                        <option value="天天快递">天天快递</option>
                        <option value="顺丰快递">顺丰快递</option>
                        <option value="中通快递">中通快递</option>
                        <option value="申通快递">申通快递</option>
                        <option value="天天快递">天天快递</option>
                        <option value="顺丰快递">顺丰快递</option>
                        <option value="中通快递">中通快递</option>
                        <option value="申通快递">申通快递</option>
                        <option value="天天快递">天天快递</option>
                        <option value="顺丰快递">顺丰快递</option>
                        <option value="中通快递">中通快递</option>
                        <option value="申通快递">申通快递</option>
                        <option value="天天快递">天天快递</option>
                        <option value="顺丰快递">顺丰快递</option>
                        <option value="中通快递">中通快递</option>
                        <option value="申通快递">申通快递</option>
                        <option value="天天快递">天天快递</option>
                        <option value="顺丰快递">顺丰快递</option>
                        <option value="中通快递">中通快递</option>
                        <option value="申通快递">申通快递</option>
                        <option value="天天快递">天天快递</option>
                    </select>
                </div>
                <List>
                    <InputItem
                        autoFocus="autofocus"
                        clear
                        onChange={this.handelCase}
                        onKeyDown={this.handelGoNext}
                        value={this.state.req_id}
                    >箱号</InputItem>
                    <div className={IndexCss.inpSlt}>
                        <InputItem
                            clear
                            onChange={this.handelTail}
                            onKeyDown={this.handelKeyup}
                            value={this.state.number}
                            ref="input"
                        >跟踪号</InputItem>
                    </div>
                </List>
            </div>
            <div className={IndexCss.numberUser}>
                <span>扫描数 <strong>{this.state.userData}</strong></span>
                <span>箱子数 <strong>{this.state.Data.boxList.length}</strong></span>
                <span>跟踪号 <strong>{this.state.Data.tailAfter.length}</strong></span>
                <div className={IndexCss.rovm} onClick={this.RovmClick}>清除</div>
            </div>
            {this.state.Data.dataList && <div>
                {
                    this.state.Data.dataList.map((v, i) => {

                        if (v.info) {
                            return <div key={i} className={IndexCss.text}><div>{v.req_id}</div>
                                <div>{v.num}</div>
                                <div>{v.info}</div>
                            </div>
                        } else if (v.text) {
                            return <div key={i} className={IndexCss.tailAfter}>
                                <div>{v.req_id}</div>
                                <div>{v.num}</div>
                                <div>{v.text}</div>
                            </div>
                        } else {
                            return <div key={i} className={IndexCss.cont}>
                                <div>{v.req_id}</div>
                                <div>{v.num}</div>
                            </div>
                        }
                    })
                }
            </div>}
        </div>
    }
}

export default Entering