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
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/products";

function ReduxApp() {
    const cart = useSelector(state => state.cart);
    const counter = cart.reduce((sum, product) => {
        return sum + (1 * product.count)
    }, 0);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
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
                            {counter !== 0 && <span className='cart-counter'>{counter}</span>}
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
