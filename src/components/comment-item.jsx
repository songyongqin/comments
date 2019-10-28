import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class CommentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired
    }
    render() {
        const {comment} = this.props
        console.log(comment)
        return (
            <li>
                <div>{comment.name}</div>
                <div>{comment.comment}</div>
                <button>删除</button>
            </li>
        )
    }
}
