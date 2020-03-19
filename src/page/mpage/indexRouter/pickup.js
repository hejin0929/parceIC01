// 大货拣货

import React from 'react'

// 引入输入框组件     使用ant design mobile的ui库
import { InputItem } from 'antd-mobile';

// 引入标题导航组件
import Navs from '../../../componets/nav'
// 引入input组件
// import Inp from '../../../componets/input'
// 引入样式文件
import IndexCss from './css/pickup.module.scss'

// 引入复选框组件
import { List, Checkbox, Flex } from 'antd-mobile';

class Pickup extends React.Component {
    state = {
        boxAdd: "",
        closeAdd: "",
        weight: "",
        lenghtCM: "",
        widthCM: "",
        tallCM: "",
        special: true,
        checkList: [
            {
                name: "更新模式",
                check: true
            }, {
                name: '',
                check: true
            }, {
                name: "锁定重量",
                check: true
            }, {
                name: "锁定尺寸",
                check: true
            }, {
                name: "使用客户数据",
                check: true
            }
        ],
        forbidden: true,
        forbiddenCWG: true
    }
    // -------------------------------------------------------------------
    // 点击在输入框在运单号的时候触发此函数
    hendleChangeGoaut = (v) => {
        // console.log(v.keyCode);
        // 里面做一层判断  确认用户点击回车键后进此判断
        if (v.keyCode === 13) {
            // 里面判断用户是否使用清单号模式   如果使用了清单号模式进入if判断
            // console.log(this.refs.rvomadd);
            if (this.refs.rvomadd) {
                // 利用ref查找到清单号的输入框
                let rvomadd = this.refs.rvomadd
                // 为其获取焦点
                rvomadd.focus()
            } else if (this.refs.weight) {
                // 如果以上的if条件没有满足证明用户没有使用到清单模式
                // 则需要直接跳到重量模式
                this.handleKeyWeight()

            }
        }

    }

    // 下面是清单输入框的键盘点击事件
    handleRvomAdd = (v) => {
        // 里面做出一层判断是否点击了回车键
        if (v.keyCode === 13) {
            let { forbidden, forbiddenCWG } = this.state
            // console.log(forbiddenCWG);
            // console.log(forbidden);
            
            if (forbiddenCWG === false && forbidden === false) {
                this.keyDownTall()
            } else if(forbidden === false){
                this.handleKeyWeight(v)
            } else {
                // 如果点击了回车键则进入if判断
                let weight = this.refs.weight
                // 并未下一个输入框获取焦点
                weight.focus()
            }

        }
    }

    // 下面是重量输入框的键盘事件函数
    handleKeyWeight = (v) => {

        // 判断键盘事件是否点击的是回车键    如果是就进入if判断
        if (v.keyCode === 13) {
            let { forbidden, forbiddenCWG } = this.state
            // console.log(forbiddenCWG);
            if (forbiddenCWG === false) {
                this.keyDownTall()
            } else {
                // 通过ref 找点下一个input输入框   
                let length = this.refs.length
                // 添加focus事件     自动获取焦点
                length.focus()
            }
        }
    }

    // 下面是长输入框的键盘事件函数
    keyDownLength = (v) => {
        // 判断键盘事件是否点击的是回车键    如果是就进入if判断
        if (v.keyCode === 13) {
            // 通过ref 找点下一个input输入框
            let width = this.refs.width
            // 添加focus事件     自动获取焦点
            width.focus()
        }
    }

    // 下面是宽输入框的键盘事件函数
    keyDownWidth = (v) => {
        // 判断键盘事件是否点击的是回车键    如果是就进入if判断
        if (v.keyCode === 13) {
            // 通过ref 找点下一个input输入框
            let tall = this.refs.tall
            // 添加focus事件     自动获取焦点
            tall.focus()
        }
    }

    keyDownTall = () => {
        console.log(1);

    }


    // 点击handleCheckList 整一个数组的事件触发的函数
    handleCheckList = (i) => {
        // render函数上面循环了六个check选择模式     所以采取 i 来找到相应的对象
        // 创建一个变量拿到checkList数组   并未其进行改造
        let { checkList, special, forbidden, forbiddenCWG } = this.state
        // 通过索引来取到他的值    并为check取反
        checkList[i].check = !checkList[i].check

        // 由于业务原因  当用户点击了更新模式以及 以及不使用关清号都进入此if判断
        if (i === 0 || i === 1) {
            // 由于业务原因  更新模式以及 清关号模式都可以直接操作 清关号的input标签   所以清关号的显示以及隐藏都取决于此两个状态
            special = checkList[i].check
        }

        // 当更新号模式选中状态  则需要将清关号模式重置  所以做了以下的if判断
        if (i === 0) {
            checkList[1].check = true
        }
        // 由于清关号有两个模式   所以做了一下判断
        if (i === 1 && checkList[1].name === "更新请关号") {
            special = !checkList[i].check
        }
        // 判断用户是否点击锁定重量
        if (i === 2) {
            forbidden = checkList[i].check
            // 用户点击锁定重量  就要找到重量的 input标签  把它禁用掉
        }

        if (i === 3) {
            forbiddenCWG = checkList[i].check
        }

        if (i === 4) {
            forbidden = checkList[i].check
            forbiddenCWG = checkList[i].check
            checkList[2].check = true
            checkList[3].check = true
        }
        // 把改造过的值赋值回去
        this.setState({
            checkList,
            special,
            forbidden,
            forbiddenCWG,
        })


    }
    // 文本输入框禁用 editable={false}
    render() {

        return (
            <div>
                <Navs name="拣货" />
                <div className={IndexCss.inp}>
                    <div className={IndexCss.boxAdd}>
                        <span>运单号/箱号</span><div><InputItem autoFocus="autofocus" value={this.state.boxAdd} onChange={(v) => {
                            this.setState({
                                boxAdd: v
                            })
                        }} onKeyDown={this.hendleChangeGoaut} /></div>
                    </div>
                    {this.state.special && <div className={IndexCss.rvomadd}><span>清关号</span><div><InputItem value={this.state.closeAdd} onChange={(v) => {
                        this.setState({
                            closeAdd: v
                        })
                    }}
                        onKeyDown={this.handleRvomAdd}
                        ref="rvomadd"
                    />
                    </div> </div>
                    }
                    {this.state.checkList[0].check &&
                        <div className={IndexCss.update}>
                            <div>
                                <span className={this.state.forbidden === false ? IndexCss.input : ''}>重量</span>
                                <div>
                                    <InputItem
                                        className={this.state.forbidden === false ? IndexCss.input : ''}
                                        onChange={(v) => {
                                            this.setState({
                                                weight: v
                                            })
                                        }}
                                        editable={this.state.forbidden}
                                        onKeyDown={this.handleKeyWeight}
                                        ref="weight"
                                    />
                                </div>
                            </div>
                        </div>
                    }

                    {this.state.checkList[0].check && <div className={IndexCss.Divthree}>
                        <div className={IndexCss.length}><InputItem
                            className={this.state.forbiddenCWG === false ? IndexCss.input : ''}
                            type="digit" placeholder="长" ref="length" onChange={(v) => {
                                this.setState({
                                    lenghtCM: v
                                })
                            }}
                            editable={this.state.forbiddenCWG}
                            onKeyDown={this.keyDownLength}
                        /></div>
                        <div className={IndexCss.length}><InputItem
                            className={this.state.forbiddenCWG === false ? IndexCss.input : ''}
                            placeholder="宽" ref="width" onChange={(v) => {
                                this.setState({
                                    widthCM: v
                                })
                            }}
                            editable={this.state.forbiddenCWG}
                            onKeyDown={this.keyDownWidth}
                        /></div>
                        <div className={IndexCss.length}><InputItem
                            className={this.state.forbiddenCWG === false ? IndexCss.input : ''}
                            placeholder="高" ref="tall" onChange={(v) => {
                                this.setState({
                                    tallCM: v
                                })
                            }}
                            editable={this.state.forbiddenCWG}
                            onKeyDown={this.keyDownTall}
                        /></div>
                    </div>}
                    {this.state.checkList.map((v, i) => {
                        this.state.checkList[1].name = `${this.state.checkList[0].check ? '不使用清关号' : '更新请关号'}`
                        return <div key={i} className={IndexCss.checkMap}>
                            <Checkbox onChange={() => ((i) => {
                                this.handleCheckList(i)
                            })(i)}
                                checked={!v.check}
                            >
                                {v.name}
                            </Checkbox>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default Pickup;