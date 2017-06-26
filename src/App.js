import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAnpKgY_PcSbFQXPvJN0TpCfjT_WH9jh6M',
      authDomain: 'auth-f0dad.firebaseapp.com',
      databaseURL: 'https://auth-f0dad.firebaseio.com',
      projectId: 'auth-f0dad',
      storageBucket: 'auth-f0dad.appspot.com',
      messagingSenderId: '425681366057'
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
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header textHeader="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

AppRegistry.registerComponent('auth', () => App);
