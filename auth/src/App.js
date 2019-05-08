import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAN886jUBeAlnrzHywmh3dvZ5o-Vk7x15Y',
			authDomain: 'authentication-ef0c0.firebaseapp.com',
			databaseURL: 'https://authentication-ef0c0.firebaseio.com',
			projectId: 'authentication-ef0c0',
			storageBucket: 'authentication-ef0c0.appspot.com',
			messagingSenderId: '709312674465',
			appId: '1:709312674465:web:bad8c199e59f1f46'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<View style={{flexDirection: 'row'}}>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</View>
				);		
			case false: 
				return <LoginForm />
			default:
				return (
					<View style={{flexDirection: 'row'}}>
						<Spinner size="large" />
					</View>
				);
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
