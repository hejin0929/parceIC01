// 封装一个Promise对象的axios请求

// 引入axios 模块
import axios from 'axios'


// 创建一个函数  并暴露出去
// const Post = (url,data)=>{
//     return new Promise((resolve, reject)=>{
//         axios.post(url,data).then(res=>{
//             resolve(res.data)
//         }).catch(err=>{
//             reject(err)
//         })
//     })
// }

const Post = (url,data)=>{
    return new Promise((resolve, reject)=>{
            axios.post(url,data).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}


export default Post