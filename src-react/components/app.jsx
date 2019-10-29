import React, { Component } from 'react'

import CommentAdd from './comment-add'
import CommentList from './comment-list'

export default class App extends Component {
    state={
        comments:[]
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                comments:[
                    {name:'zhangsan',comment:'react is so boring'},
                    {name:'lisi',comment:'react is so cool'}
                ]
            })
        }, 1000);
    }

    hangdleAdd = (obj) => {
        this.setState({
            comments: [obj,...this.state.comments]
        })
    }
    hangdleRemove = (index) => {
        this.setState({
            comments: this.state.comments.filter((el,num)=>num !== index )
        })
    }
    render() {
        const {comments} = this.state
        return (
            <div>
                <h2>请发表对react的评论</h2>
                <CommentAdd handleAdd= {this.hangdleAdd}></CommentAdd>
                <CommentList comments= {comments} hangdleRemove={this.hangdleRemove}></CommentList>
            </div>
        )
    }
}
