import React, { useEffect, useState} from "react";
import { Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import  * as Animatable from "react-native-animatable";
import { Ionicons } from "@expo/vector-icons";
import { auth } from '../../config/firebase';


import { useNavigation } from "@react-navigation/native";


export default function Entrada({}) {

    const [email, setEmail] = useState('')
    const [hidePass, setHidePass] = useState(true);
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Principal")
            }
        })

        return unsubscribe
    }, [])
    
    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
          })
          .catch(error => alert(error.message))
      }

    
    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logado com:' , user.email);
          })
          .catch(error => alert(error.message))
    }
        
    return (
        <ScrollView>
        
            <Animatable.View animation="fadeInUp" style={estilos.containerForm}>
                <Animatable.Image 
                  animation="flipInY"
                  source={require('../../../assets/logos.png')}
                  style={{width: '100%'}}
                  resizeMode = 'contain'
                  />
                <Text style={estilos.titulo}>Email</Text>
                <TextInput placeholder="Digite seu email" value={email} style={estilos.input} 
                onChangeText={text => setEmail(text)}  />

                <Text style={estilos.titulo}>Senha</Text>
                <TouchableOpacity style={estilos.icon} onPress={ () => setHidePass(!hidePass) }>
                        { hidePass ?
                            <Ionicons name='eye' color={'#000000'} size={19}/>
                            :
                            <Ionicons name='eye-off' color={'#000000'} size={19}/>
                        }
                    </TouchableOpacity>
                <TextInput placeholder="Digite sua senha" secureTextEntry={hidePass} value={password}
                onChangeText={text => setPassword(text)} style={estilos.input}/>
                    
                <TouchableOpacity onPress={ handleLogin } style={estilos.butao}>
                    <Text style={estilos.butaoTexto}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ handleSignUp } style={estilos.butao}>
                    <Text style={estilos.registroTexto}>Não possui uma conta? Cadastre-se já!</Text> 
                </TouchableOpacity>          
            </Animatable.View>

        </ScrollView>

    );
}

const estilos = StyleSheet.create({
    /*container: {
        flex: 1,
        backgroundColor: '#f0ffff',
    },*/
    containerLogo: {
        flex: 2
    },
    imag: {
        justifyContent: 'center',
        textAlign:'center'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000'
    },
    icon:{
        width: '100%',
        height: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    containerForm: {
        backgroundColor: '#ffffff',
        flex: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    titulo: {
        fontSize: 28,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    butao: {
        backgroundColor: '#000000',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
    },
    butaoTexto: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    butaoRegistro: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registroTexto:{
        color: '#a1a1a1'
    },
    divisao: {
        textAlign: 'center',
        paddingTop: 70,
    }
});