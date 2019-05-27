import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyA91xIV3_Zufaerz5gtdQ7M2DxvDdUt5h0',
            authDomain: 'manager-4ea6e.firebaseapp.com',
            databaseURL: 'https://manager-4ea6e.firebaseio.com',
            projectId: 'manager-4ea6e',
            storageBucket: 'manager-4ea6e.appspot.com',
            messagingSenderId: '126298140596',
            appId: '1:126298140596:web:865f30402b05d014'
        };
        
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
