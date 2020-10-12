import React, {Component, Fragment, useEffect, useState} from 'react';
import { useParams, Redirect, Link } from 'react-router-dom'
import {Loader, Comment, Header, Dimmer } from 'semantic-ui-react';
import useData from "../hooks/useData";

function Comments()  {

    const { postId } = useParams();
    const [comments, isFetching] = useData(`posts/${postId}/comments`, []);

    return (
        <Fragment>
            <Loader active={isFetching}>Loading</Loader>
            <Header as='h3' dividing>
                Comments
            </Header>
            {comments.map(comment =>
                <Comment.Group>
                    <Comment key={comment.id + '/cm'}>
                        <Comment.Avatar src={`https://img2.freepng.ru/20180703/ya/kisspng-computer-icons-user-avatar-user-5b3bafe2381423.1933594815306383062297.jpg`}/>
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

export default Comments;
