import React from "react";
import { 
    Text, 
    View,
    StyleSheet,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { auth } from '../../../config/firebase'

export default function Perfil() {
    return (
      <View style={styles.container}>
      
        <View style={styles.containerLogo}>
                <Animatable.Image 
                animation="fadeInUp"
                source={require('../../../../assets/user-profile.jpg')}
                style={{width: 200, 
                  height: 200, 
                  borderRadius: 200 / 2 }}
                resizeMode = 'contain'
                />
         </View>

        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <View style={styles.containerForm}>
              <Text style={styles.h1}>Seu Perfil</Text>
              <Text>Olá {auth.currentUser?.email} !</Text>
              <Text style={styles.menssage}>Logo mais você podera personalizar seu perfil.</Text>
            </View>
        </Animatable.View>

      </View>
    )
}
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  containerLogo:{
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm:{
    flex: 2,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  h1: {
    marginBottom: 10
  },
  menssage: {
    marginTop: 12,
    color: '#778899'
  }
})
