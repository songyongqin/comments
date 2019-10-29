/*
包含n个reducer函数，传入一个state,和一个actions返回一个新的state
*/
import {combineReducers} from 'redux'
import {HANDLE_ADD, HANDLE_REMOVE,RECEIVE_COMMENTS} from './action-types'


const comments = (state = [],action) => {
    switch(action.type) {
        case HANDLE_ADD :
            return [action.data,...state]
        case HANDLE_REMOVE :
            return state.filter((comment,index) => index !== action.data)
        case RECEIVE_COMMENTS :
            return action.data
        default :
            return state
    }
}
const commentsTwo = (state = [],action) => {
    switch(action.type) {
        case HANDLE_ADD :
            return [action.data,...state]
        case HANDLE_REMOVE :
            return state.filter((comment,index) => index !== action.data)
        case RECEIVE_COMMENTS :
            return action.data
        default :
            return state
    }
}

export default combineReducers({
    comments,
    commentsTwo
})