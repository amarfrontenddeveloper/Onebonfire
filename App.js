import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import AuthProvider from './src/component/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
