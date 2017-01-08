import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './app/Views/Login';
import FindEvents from './app/Views/FindEvents';
import Profile from './app/Views/Profile';
import Logs from './app/Views/Logs';
import Messages from './app/Views/Messages';
import SubmitHours from './app/Views/SubmitHours';

export default class volve extends Component {
  // <View style={styles.container}>
  //   <Text style={styles.welcome}>
  //     Welcome to React Native!
  //   </Text>
  //   <Text style={styles.instructions}>
  //     To get started, edit index.ios.js
  //   </Text>
  //   <Text style={styles.instructions}>
  //     Press Cmd+R to reload,{'\n'}
  //     Cmd+D or shake for dev menu
  //   </Text>
  // </View>

  render() {
    return (
        <Router>
        <Scene key="root">
          <Scene key="Login" component={Login} title="Login" />
          <Scene key="FindEvents" component={FindEvents} hideNavBar title="FindEvents" />
          <Scene key="Profile" component={Profile} title="Profile" />
          <Scene key="Logs" component={Logs} initial={true} hideNavBar title="Logs" />
          <Scene key="Messages" component={Messages} title="Messages" />
          <Scene key="SubmitHours" component={SubmitHours} title="SubmitHours" />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('volve', () => volve);
