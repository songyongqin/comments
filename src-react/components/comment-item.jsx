import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class CommentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        hangdleRemove: PropTypes.func.isRequired
    }
    remove = () => {
        this.props.hangdleRemove(this.props.index)
    }

    render() {
        const {comment} = this.props
        console.log(comment)
        return (
            <li>
                <div>{comment.name}</div>
                <div>{comment.comment}</div>
                <button onClick={this.remove}>删除</button>
            </li>
        )
    }
}
