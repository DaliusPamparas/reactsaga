import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import allReducers from './reducers'
import {Provider} from 'react-redux'

const store = createStore (allReducers, applyMiddleware(logger))
    
ReactDOM.render( 
<BrowserRouter>
<Provider store={store}>
    <App />
</Provider>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
