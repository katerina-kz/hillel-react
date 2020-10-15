import React, {useEffect} from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import {Menu} from "semantic-ui-react";
import Basket from "./Basket";
import MainPage from "./MainPage";
import ProductList from './ProductList'
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import '../style.css';
import { useSelector } from 'react-redux';

function ReduxApp() {
    let counter = 0;
    useSelector(state => state.shopping.map(product => counter += product.amount));

    useEffect(() => {
        if (counter !== 0) {
            document.querySelector('.cart-counter').classList.add('block');
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
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default ReduxApp;
