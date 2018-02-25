import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments } from '../actions/comments';
import { bindActionCreators } from 'redux';

class CommentsList extends Component {
  componentDidMount() {
    this.props.getComments();
  }

  render() {
    return (
      
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
