import React, { Component } from 'react';
import { AppLoading, Font, Asset } from 'expo';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { console } from 'console';
import { Text, View } from 'react-native';
import MainNavigation from './navigation/MainNavigation';

export default class App extends Component {
  state = {
    loaded: false,
  };

  handleError = (error) => console.log(error);
  
  handleLoaded = () => this.setState({ loaded: true });

  // error 발생 -> handleError
  loadAssets = async() => {
    await Font.loadAsync({
      // Ionicons는 font랑 같이 import된다.
      ...Ionicons.font,
    });    
  }

  render() {
    const { loaded } = this.state;
    if (!loaded) return (
      <AppLoading 
        startAsync={this.loadAssets} 
        onFinish={this.handleLoaded}
        onError={this.handleError}
      />        
    );

    return (
      <>
        <StatusBar barStyle="light-content" />
        <MainNavigation />
      </>
    );
  }
}