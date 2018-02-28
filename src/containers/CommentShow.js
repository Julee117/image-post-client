import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteComment } from '../actions/comments';
import { Button } from 'react-bootstrap';
import Comment from '../components/Comment';

class CommentShow extends Component {

  handleOnClick = () => {
    this.props.deleteComment(this.props.comment)
  }

  render() {

    return (
      <div className="comment">
        <Comment comment={this.props.comment}/>
        <Button bsStyle="danger" bsSize="small" className="deleteButton" onClick={this.handleOnClick}>Delete</Button>
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
