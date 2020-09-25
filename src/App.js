import React from 'react';
// import logo from './logo.svg';
import Container from './Container';
import {Provider} from 'react-redux';
import store from './redux/store';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Container className="header"/>
    </div>
    </Provider>
  );
}

export default App;

