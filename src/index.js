import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import personsReducer from './store/reducers/persons';

import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  persons: personsReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
