import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import CommentAdd from '../components/comment-add'
import CommentList from '../components/comment-list'
import {hangdleAdd, hangdleRemove,getComments} from '../redux/actions'

class App extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        hangdleAdd: PropTypes.func.isRequired,
        hangdleRemove: PropTypes.func.isRequired,
        getComments: PropTypes.func.isRequired,
    }
    
    componentDidMount() {
       this.props.getComments()
    }

    render() {
        const {comments,hangdleAdd,hangdleRemove} = this.props
        return (
            <div>
                <h2>请发表对react的评论</h2>
                <CommentAdd handleAdd= {hangdleAdd}></CommentAdd>
                <CommentList comments= {comments} hangdleRemove={hangdleRemove}></CommentList>
            </div>
        )
    }
}
export default connect(
    state => ({comments:state.comments}),
    {hangdleAdd, hangdleRemove,getComments}
)(App)
