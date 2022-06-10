import React from 'react';
import { View,StyleSheet, TouchableOpacity, Text, Settings } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import HomeScreen from './Home';
import Listas from './Lista';
import Perfil from './Profile';
import Configuracao from './Configuracao';
import Sair from './Exit';

import { auth } from '../../config/firebase';

import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 



const Drawer = createDrawerNavigator();


const Principal = () => {

  const navigation = useNavigation() 

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Entrar")
        })
    }
  
  return (
    <NavigationContainer independent={true} >
      <Drawer.Navigator >
        <Drawer.Screen  name='Home' component={HomeScreen} options={{
          drawerIcon: ({size}) => (
            <Ionicons
               name="ios-home"
               size={size}
               color='black'
            />
         ),
        }}/>
        <Drawer.Screen name='Perfil' component={Perfil} options={{
          drawerIcon: ({size}) => (
            <AntDesign
               name="user"
               size={size}
               color='black'
            />
         ),
        }}/>
        <Drawer.Screen name='Sua Lista' component={Listas} options={{
          drawerIcon: ({size}) => (
            <Ionicons
               name="ios-list"
               size={size}
               color='black'
            />
         ),
        }}/>
        <Drawer.Screen name='Configurações' component={Configuracao} options={{
          drawerIcon: ({size}) => (
            <AntDesign
               name="setting"
               size={size}
               color='black'
            />
         ),
        }}/>
        <Drawer.Screen name='Exit' component={Sair} options={{
          drawerIcon: ({size}) => (
            <Ionicons
               name="ios-exit-outline"
               size={size}
               color='black'
               onPress={handleSignOut}  // professor aqui eu so consegui fazer a função de deslogar no ícone e nao no texto em si,
                                        // entao para deslogar basta clicar no icone de exit que ele desloga e volta pra tela inicial
            />
         ),
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Principal;

