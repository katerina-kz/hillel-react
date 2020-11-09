import React from 'react';
import { Provider } from 'react-redux';
import createStore from "./redux/createStore";
import "./style.css";
import RouterOrder from "./RouterOrder";

const store = createStore();

function AppOrder(props) {
    return (
        <Provider store={store}>
            <RouterOrder/>
        </Provider>
    )
}

export default AppOrder;