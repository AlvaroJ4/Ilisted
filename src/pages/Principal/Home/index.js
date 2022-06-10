import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../routes';

export default function HomeScreen() {
  
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <AnimatedLottieView source={require('../../../../assets/welcome.json')}
          autoPlay={true}
          loop={false}
          style={{ width: 200, height: 200}}
          resizeMode='cover'
        />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.titulo}>Bem vindo ao Ilisted, monte, organize e compartilhe sua lista!</Text>
        <Text style={styles.texto}>
          De um jeito , simples e prático crie lista em qualquer lugar que estiver, 
          compartilhe com familiares e até mesmo com seus amigos,
          esteja pronto para fazer sua lista de festa! Para começar a fazer basta 
          clicar no botão abaixo, aproveite!
        </Text>

        <TouchableOpacity style={styles.butao}>
            <Text style={styles.butaoTexto}>Cria lista</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    alignItems: 'center', 
    justifyContent:'center'
},
  texto: {
    color: '#a1a1a1',
    alignItems:'center',
    justifyContent:"center"
},
  butao: {
    position: 'absolute',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#000000'
},
  butaoTexto: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold'
}
})
