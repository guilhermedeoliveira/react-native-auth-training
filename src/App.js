import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAnpKgY_PcSbFQXPvJN0TpCfjT_WH9jh6M',
      authDomain: 'auth-f0dad.firebaseapp.com',
      databaseURL: 'https://auth-f0dad.firebaseio.com',
      projectId: 'auth-f0dad',
      storageBucket: 'auth-f0dad.appspot.com',
      messagingSenderId: '425681366057'
  });
  }

  render() {
    return (
      <View>
        <Header textHeader="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

AppRegistry.registerComponent('auth', () => App);
