import React, {Component} from 'react';
import  Main from './Components/maincomp';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore } from './redux/configstore';

const store = ConfigureStore();
export default class App extends React.Component {
  render(){

    return (
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Main />
            </div>
          </BrowserRouter>
        </Provider>         
    );  
  }
}
