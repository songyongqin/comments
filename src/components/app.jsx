import React, { Component } from 'react'

import CommentAdd from './comment-add'
import CommentList from './comment-list'

export default class App extends Component {
    state={
        comments:[
            {name:'zhangsan',comment:'react is so boring'},
            {name:'lisi',comment:'react is so cool'}
        ]
    }
    hangdleAdd = (obj) => {
        this.setState({
            comments: [obj,...this.state.comments]
        })
    }
    render() {
        const {comments} = this.state
        return (
            <div>
                <h2>请发表对react的评论</h2>
                <CommentAdd handleAdd= {this.hangdleAdd}></CommentAdd>
                <CommentList comments= {comments}></CommentList>
            </div>
        )
    }
}
