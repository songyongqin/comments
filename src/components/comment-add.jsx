import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class CommentAdd extends Component {

    static propTypes = {
        handleAdd: PropTypes.func.isRequired
    }


    addComment = ()=>{
        console.log(111)
        const name = this.name.value
        const comment = this.comment.value
        this.props.handleAdd({name,comment})
        this.name.value = ''
        this.comment.value = ''
    } 
    render() {
        return (
            <div>
                <div>用户名</div>
                <input placeholder ='用户名' ref={name => this.name = name  } />
                <div>评论内容</div>
                <textarea ref={comment => this.comment = comment  }></textarea>
                {/* <textarea value={comment} onChange = {this.hangdleChange}></textarea> */}
                <button onClick= {this.addComment}>提交</button>
            </div>
        )
    }
}
