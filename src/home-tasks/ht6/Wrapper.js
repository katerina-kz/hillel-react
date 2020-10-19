import React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import ReduxApp from './components/ShopRedux';
import {saveState} from "./saveState";

const store = createStore();

// store.subscribe(() => {
//     saveState(store.getState());
// })

function Wrapper() {
    return (
        <Provider store={store}>
          <ReduxApp/>
        </Provider>
    );
}

export default Wrapper;
