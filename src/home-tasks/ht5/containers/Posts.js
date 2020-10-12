import React, {useState, useEffect, useCallback} from 'react';
import { Link, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import {Button, Container, Feed, GridColumn, Image, Item, List, Loader} from "semantic-ui-react";
import UserDetails from "./UserDetails";
import Comments from "./Comments";
import useData from '../hooks/useData'
import CommentsList from "../../ht2/life-cycle-hooks/CommentsList";
// import UserDetails from "./UserDetails";

function Posts() {
    const [posts, isFetching] = useData('/posts', []);
    const { path, url } = useRouteMatch();
    const [selectedPost, setSelectedPost] = useState(null);
    const [isCommentOpened, setIsCommentOpened] = useState(false);

    const handleCommentSelection = (post) => {
        !isCommentOpened ? setSelectedPost(post) : setSelectedPost(null);
        !isCommentOpened ? setIsCommentOpened(true) : setIsCommentOpened(false);
    };

    return (
        <Item.Group className="post">
            {posts.map(post => (
                <Item>
                    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png'/>

                    <Item.Content>
                        <Item.Header as='a'>{post.title}</Item.Header>
                        <Item.Description>{post.body}</Item.Description>
                        <Link to={`/users/${post.userId}`}>Go to author page</Link>
                        <Link className="target-link" to={`/posts/${post.id}/comments`}
                              onClick={() => handleCommentSelection(post.id)}>Open comments</Link>
                        <div>
                            <Switch>
                                <Route path={`${path}/:postId/comments`} exact>
                                    {selectedPost === post.id ? <Comments/> : null}
                                </Route>
                            </Switch>
                        </div>
                    </Item.Content>
                </Item>
            ))}
        </Item.Group>
    );
}

export default Posts;