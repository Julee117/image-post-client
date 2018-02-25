import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments } from '../actions/comments';
import { bindActionCreators } from 'redux';
import CommentShow from './CommentShow';

class CommentsList extends Component {
  componentDidMount() {
    this.props.getComments();
  }

  render() {
    const findComments = this.props.comments.filter(comment => comment.id === this.props.post.id)
      const filteredComments = findComments.map(comment => {
        return <CommentShow key={comment.id} comment={comment} />
      })

    return(
      <div>
        {filteredComments}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getComments
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
