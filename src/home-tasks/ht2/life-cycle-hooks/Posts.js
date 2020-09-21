import React, { Component, Fragment } from 'react';
import { Feed, Loader, Button } from 'semantic-ui-react';
import CommentsList from "./CommentsList";
import './PostStyle.css';

class Posts extends Component {

  state = {
    posts: [],
    selectedPost: null,
    isCommentOpened: false,
    isPostFetching: false,
  };

  handleCommentSelection = post => {
     const { isCommentOpened } = this.state;
     !isCommentOpened ? this.setState({ selectedPost: post, isCommentOpened: false }) : this.setState({ selectedPost: null, isCommentOpened: false })
  };

  componentDidMount() {
    this.setState({ isPostFetching: true });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        this.setState({
            posts,
            isPostFetching: false
        })
      })
  }

  render() {
    const { posts, isPostFetching, selectedPost } = this.state;
    const { onPostSelect } = this.props;

    return (
      <Fragment>
        <Loader size='small' active={isPostFetching} />
        <Feed>
          {posts.map(post => (
            <Feed.Event key={post.id}>
              <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
              <Feed.Content>
                <Feed.Summary onClick={() => onPostSelect(post)}>
                  <a>{post.title}</a>
                </Feed.Summary>
                <Feed.Extra text>
                  {post.body}
                </Feed.Extra>
                <Button onClick={() => this.handleCommentSelection(post.id)} onToggle={this.toggleClick}>See all comments</Button>
                  {post.id === selectedPost ? <CommentsList postId={selectedPost}/> : null}
              </Feed.Content>
            </Feed.Event>
          ))}
        </Feed>
      </Fragment>
    );
  }
}

export default Posts;
