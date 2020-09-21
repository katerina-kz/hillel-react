import React, {Component, Fragment} from 'react';
import {Loader, Comment, Header, Dimmer } from 'semantic-ui-react';
import './avatarsApi';
import avatarsApi from "./avatarsApi";

class CommentsList extends Component {

    state = {
        comments: null,
        icons: null,
        isFetching: false,
        avatar: 'https://img2.freepng.ru/20180703/ya/kisspng-computer-icons-user-avatar-user-5b3bafe2381423.1933594815306383062297.jpg',
    };

    componentDidMount() {
        this.fetchIconsData();
        this.fetchCommentsData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.postId !== this.props.postId && this.props.postId !== null) {
            this.fetchCommentsData();
        }
    }

    fetchIconsData() {
        const rand = 0 + Math.random() * (3 - 0);
        const iconNumber = Math.floor(rand);
        this.setState({ isFetching: true });
        avatarsApi
            .fetchAvatars()
            .then(icons => {
                this.setState({
                    icons,
                    avatar: icons[iconNumber].url,
                    isFetching: false })
            })
    }

    fetchCommentsData() {
        const { postId } = this.props;
            if (!postId) return;
            this.setState({ isFetching: true });
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(response => response.json())
                .then(comments => this.setState({
                    comments,
                    // isFetching: false
                }))
                .catch(err => this.setState({ isFetching: false }));
    }

    render() {
        const { comments, isFetching, avatar } = this.state;
        if (comments === null) return null;
        return (
            <Fragment>
                <Loader active={isFetching}>Loading</Loader>
                <Header as='h3' dividing>
                    Comments
                </Header>
                {comments.map( comment =>
                    <Comment.Group>
                    <Comment key={comment.id + '/cm'}>
                        <Comment.Avatar src={`${avatar}`} />
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