import React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import Router from "./Router";
import './styles.css'

const store = createStore();

function Github() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}

export default Github;

