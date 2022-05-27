import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import Routes from './src/routes/index.js';


export default function App() {
  return (
    <NavigationContainer  >
        <StatusBar backgroundColor='#000000' barStyle='light-content'/>
        <Routes />
    </NavigationContainer>
  );
}