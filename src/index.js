import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';


const feelingReducer = (state = '', action) =>{
    switch (action.type) {
        case 'ADD_FEELING':
        return state = action.payload 
        case 'CLEAR':
        return state = null
    }
    return state;
}

const understandingReducer = (state = '', action) => {
    switch (action.type) {
        case 'ADD_UNDERSTANDING':
            return state = action.payload
        case 'CLEAR':
            return state = null
    }
    return state;
}

const supportedReducer = (state = '', action) => {
    switch (action.type) {
        case 'ADD_SUPPORTED':
            return state = action.payload
        case 'CLEAR':
            return state = null
    }
    return state;
}

const commentReducer = (state = '', action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return state = action.payload
        case 'CLEAR':
            return state = ''
    }
    return state;
}





const store = createStore(
    combineReducers({
       feelingReducer, 
       understandingReducer, 
       supportedReducer, 
       commentReducer 
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
