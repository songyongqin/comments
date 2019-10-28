import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CommentItem  from './comment-item'

export default class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired
    }
    state = {
        isShow: ''
    }
    render() {
        const {comments} = this.props
        // const {isShow} = this.state
        return (
            <ul>
                {
                    comments.map((el,index) => <CommentItem comment= {el} key={index} />)
                }
            </ul>
        )
    }
}
