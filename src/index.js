import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux';
import './index.css';
//import Admin from './Admin';
import Router from './router'
import * as serviceWorker from './serviceWorker';
const store=createStore(
    rootReducer, 
    {}
)

ReactDOM.render(
    <Provider >
        <Router />
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
