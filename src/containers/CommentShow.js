import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteComment } from '../actions/comments';

class CommentShow extends Component {

  handleOnClick = () => {
    this.props.deleteComment(this.props.comment)
  }

  render() {

    return (
      <div className="comment">
        <p key={this.props.comment.id}>
          {this.props.comment.content}
        </p>
        <button onClick={this.handleOnClick}>Delete</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteComment
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentShow);
