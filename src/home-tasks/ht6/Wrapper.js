import React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import ReduxApp from './ShopRedux';


const store = createStore();

function Wrapper({counter}) {

    console.log(counter);
    return (
        <Provider store={store}>
          <ReduxApp/>
        </Provider>
    );
}

export default Wrapper;
