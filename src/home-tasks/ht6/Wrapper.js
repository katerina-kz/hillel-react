import React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import ReduxApp from './components/ShopRedux';

const store = createStore();

function Wrapper() {
    return (
        <Provider store={store}>
          <ReduxApp/>
        </Provider>
    );
}

export default Wrapper;
