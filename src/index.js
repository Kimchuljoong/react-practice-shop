import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let cartData = [
  {id: 0, name: "can", quan: 2},
  {id: 1, name: "miniCoke", quan: 7},
  {id: 2, name: "zero", quan: 11}];

function reducer(state = cartData, action){

  if(action.type === "addQuan"){
    let copy = [...state];
    copy[action.payload.index].quan++;
    return copy;

  }else if(action.type === "subQuan"){
    let copy = [...state];
    copy[action.payload.index].quan--;
    return copy;

  }else{
    return state;
  }
}

let store = createStore(combineReducers({reducer}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
