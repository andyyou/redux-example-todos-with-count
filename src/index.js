import React from 'react'
import { render } from 'react-dom'
import { addTodo } from './actions'
import { createStore, applyMiddleware } from 'redux'
import App from './App'
import rootReducer from './reducers'
// 匯入 Provider
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
var store = createStoreWithMiddleware(rootReducer);

var unsubscribe = store.subscribe(() => {
  console.log(store.getState())
});

// console.log('Initial:', store.getState());

// store.dispatch(addTodo('Hello, Redux'));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)