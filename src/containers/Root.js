import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';

export const store = configureStore();

const Root = () => (
<Provider store={store}>
    <div> Hello World </div>
    </Provider>
);
export default Root;
