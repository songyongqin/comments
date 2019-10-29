import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CommentItem  from './comment-item'

export default class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        hangdleRemove: PropTypes.func.isRequired
    }
    state = {
        isShow: ''
    }
    render() {
        const {comments,hangdleRemove} = this.props
        if(comments.length === 0) {
            return <p>暂无评论</p>
        }
        return (
            <ul>
                {
                    comments.map((el,index) => <CommentItem hangdleRemove = {hangdleRemove} comment= {el} index={index} key={index} />)
                }
            </ul>
        )
    }
}
