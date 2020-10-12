import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink,
    withRouter
} from "react-router-dom";
import { Menu } from 'semantic-ui-react'
import { CSSTransition, TransitionGroup  } from 'react-transition-group'

import Users from "./containers/Users";
import Page404 from "./containers/Page404";
import UserDetails from "./containers/UserDetails";
import Home from "./containers/Home";
import Posts from "./containers/Posts";
import Albums from "./containers/Albums";
import AlbumsPhotos from "./containers/AlbumsPhotos"
import About from "./containers/About";
import './style.css';

const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
        <CSSTransition
            key={location.pathname.includes('/users')
            || location.pathname.includes('/posts')
            || location.pathname.includes('/albums')
                ? undefined : location.key}
            classNames="fade"
            timeout={1000}>
            <Switch location={location}>
                <Route path="/"  exact><Home/></Route>
                <Route path="/about" exact><About /></Route>
                <Route path="/users"><Users/></Route>
                <Route path="/posts"><Posts /></Route>
                <Route path="/albums"><Albums /></Route>
                <Route path="/albums/:albumId"><AlbumsPhotos /></Route>
                <Route path="/people/:userId" exact><UserDetails/></Route>
                <Route path='*'><Page404/></Route>
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

function BlogRouter(props) {
    console.log('render');
    return (
        <div>
            <BrowserRouter>
                <nav>
                    <Menu tabular>
                        <Menu.Item name='home'>
                            <NavLink exact activeClassName='active' to="/">Home</NavLink>
                        </Menu.Item>
                        <Menu.Item name='about'>
                            <NavLink exact activeClassName='active' to="/about">About</NavLink>
                        </Menu.Item>
                        <Menu.Item name='users'>
                            <NavLink activeClassName='active' to="/users">Users</NavLink>
                        </Menu.Item>
                        <Menu.Item name='posts'>
                            <NavLink activeClassName='active' to="/posts">Posts</NavLink>
                        </Menu.Item>
                        <Menu.Item name='posts'>
                            <NavLink activeClassName='active' to="/albums">Albums</NavLink>
                        </Menu.Item>
                    </Menu>
                </nav>
                <AnimatedSwitch/>
            </BrowserRouter>
        </div>
    );
}

export default BlogRouter;
