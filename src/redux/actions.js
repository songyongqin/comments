/*
包含了所有的action creator(action的工厂函数)    
*/
import {HANDLE_ADD,HANDLE_REMOVE,RECEIVE_COMMENTS} from './action-types'

//同步添加
export const hangdleAdd = (comment)=> ({type:HANDLE_ADD, data:comment})
//同步删除
export const hangdleRemove = (index)=> ({type:HANDLE_REMOVE, data:index})
//同步评论
export const receiveComments = (comments)=> ({type:RECEIVE_COMMENTS, data:comments})


//异步获取评论
export const getComments = ()=> {
    return dispatch => {
        setTimeout(() => {
            const comments=[
                {name:'zhangsan',comment:'react is so boring'},
                {name:'lisi',comment:'react is so cool'}
            ]
            dispatch(receiveComments(comments))
        }, 1000);
    }
}
