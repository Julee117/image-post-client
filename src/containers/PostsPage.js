import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostShow from '../components/PostShow';
import PostForm from './PostForm';
import Posts from '../components/Posts';
import { getPosts } from '../actions/posts';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';

class PostsPage extends Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { match, posts } = this.props;
    return(
      <div>
        <Switch>
          <Route path={`${match.url}/new`} component={PostForm} />
          <Route path={`${match.url}/:postId`} component={PostShow} />
          <Route exact path={`${match.url}`} render={() => <Posts posts={posts} />} />
        </Switch>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPosts
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
