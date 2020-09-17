import React, { Component, Fragment } from 'react';
import { Feed, Loader, Button } from 'semantic-ui-react';
import CommentsList from "./CommentsList";

class Posts extends Component {

  state = {
    posts: [],
    selectedPost: null,
    isCommentOpened: false,
    isPostFetching: false,
  };
    //
    // toggleClick = () =>{
    //     this.setState({
    //         isCommentOpened: !this.state.isCommentOpened
    //     });

    // };

    handleCommentSelection = post => {
        this.setState({ selectedPost: post })
        console.log(this.state)
    };

  componentDidMount() {
    this.setState({ isPostFetching: true });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts })
      })
  }

  render() {
    const { posts, isPostFetching, selectedPost } = this.state;
    const { onPostSelect, onShowComments } = this.props;
    // if (this.state.isCommentOpened) return <CommentsList />;

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
                <Button onClick={() => this.handleCommentSelection(post.id)}>See all comments</Button>
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
