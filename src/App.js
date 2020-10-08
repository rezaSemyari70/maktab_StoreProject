import React from 'react';
// import logo from './logo.svg';
import Container from './Container';
import {Provider} from 'react-redux';
import store , {persistor}from './redux/store';
import {PersistGate} from 'redux-persist/integration/react'
 
import './App.scss';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className="App">
                    <Container className="header"/>
                </div>
            </PersistGate>
        </Provider>
    );
}

export default App;
