import React, {Component, Fragment} from 'react';
import { Loader, Comment, Header } from 'semantic-ui-react';

class CommentsList extends Component {

    state = {
        comments: null,
        isFetching: false
    };

    componentDidMount() {
        this.fetchCommentsData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.postId !== this.props.postId && this.props.postId !== null) {
            this.fetchCommentsData()
        }
    }

    fetchCommentsData() {
        const { postId } = this.props;
        if (!postId) return;
        this.setState({ isFetching: true });
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => this.setState({ comments, isFetching: false }))
            .catch (err => this.setState({ isFetching: false }))
    }


    render() {
        const { comments, isFetching } = this.state;
        if (comments === null) return null;
        return (
            <Fragment>
                <Loader size='small' active={isFetching} />
                <Header as='h3' dividing>
                    Comments
                </Header>

                {comments.map( comment =>
                    <Comment.Group key={comment.postId}>
                    <Comment key={comment.id}>
                        <Comment.Avatar src='/images/avatar/small/matt.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>{comment.name}</Comment.Author>
                            <Comment.Metadata>
                                <div>{comment.email}</div>
                            </Comment.Metadata>
                            <Comment.Text>{comment.body}</Comment.Text>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
                )}
            </Fragment>
        )
    }
}


export default CommentsList;