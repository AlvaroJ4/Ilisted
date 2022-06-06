import React from 'react';
import { View,StyleSheet, } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';

import { NavigationContainer, useNavigation } from '@react-navigation/native';

import HomeScreen from './Home';
import { auth } from '../../config/firebase';
import CustomDrawer from '../../components/CustomDrawer';;
import Listas from './Lista';


const Drawer = createDrawerNavigator();


export default function Menu() {
    
    const navigation = useNavigation()

    const handleSignOut = () => {
      auth
      .signOut()
      .then(() => {
        navigation.replace("Entrada")
      })
      .catch(error => alert(error.message))
    }

  return (

    <NavigationContainer independent={true} >
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Sua Lista" component={Listas} />
        
      </Drawer.Navigator>
    </NavigationContainer>

  );
}


const estilo = StyleSheet.create({
  
});