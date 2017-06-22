import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

export default class App extends React.Component {
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
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
