import React, {useEffect} from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import {Menu} from "semantic-ui-react";
import Basket from "./components/Basket";
import Page404 from "./components/Page404";
import MainPage from "./components/MainPage";
import ProductList from './components/ProductList'
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import './style.css';
import { useSelector } from 'react-redux'

function ReduxApp() {
    const counter = useSelector(state => state.counter);

    useEffect(() => {
        if (counter === 0) {
            document.querySelector('.cart-counter').classList.remove('block');
        }
    }, [counter]);

    return (
        <>
            <BrowserRouter>
                <nav>
                    <Menu tabular>
                        <Menu.Item name='home'>
                            <NavLink exact activeClassName='active' to="/">Home</NavLink>
                        </Menu.Item>
                        <Menu.Item name='products'>
                            <NavLink exact activeClassName='active' to="/products">Products</NavLink>
                        </Menu.Item>
                        <Menu.Item name='basket' className='basket-menu'>
                            <NavLink activeClassName='active' to="/basket">
                                <Icon name='cart' size='large'/>
                            </NavLink>
                            <span className='cart-counter'>{counter}</span>
                        </Menu.Item>
                    </Menu>
                </nav>
                <Switch>
                    <Route path="/" exact><MainPage/></Route>
                    <Route path="/basket" exact><Basket/></Route>
                    <Route path="/products"><ProductList/></Route>
                    <Route path='*'><Page404/></Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default ReduxApp;
