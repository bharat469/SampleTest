/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Navigation from './src/helpers/navigation/navigation';
import {Provider} from 'react-redux';
import store from './src/helpers/redux/store';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <StatusBar />
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
