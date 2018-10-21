import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/components/login/Welcome';
import {createStackNavigator} from 'react-navigation'
import HomeScreen from './src/components/home/HomeScreen'

export default class App extends React.Component {
  render() {
    return (
      // < Splash />,
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
login: Welcome,
Home: HomeScreen

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
