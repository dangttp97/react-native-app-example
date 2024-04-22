/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Pressable, Text, View} from 'react-native';
import FlutterLibrary from 'flutter_module';

const App = () => {
  return (
    <View
      style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Pressable
        style={{
          height: 50,
          marginHorizontal: 20,
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 10,
        }}
        onPress={() => FlutterLibrary.showFlutter()}>
        <Text style={{color: 'black', padding: 0}}>
          Press to navigate to Flutter
        </Text>
      </Pressable>
    </View>
  );
};

export default App;
