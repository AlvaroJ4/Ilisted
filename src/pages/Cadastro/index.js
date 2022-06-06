
import React, { useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from "react-native";

import firebase from 'firebase/compat';


import  * as Animatable from "react-native-animatable";

export default function Cadastro () {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Cadastrado com:',user.email);
        })
        .catch(error => alert(error.message))
    }
     
    return (
        <ScrollView>
            <View style={estilos.container}>
                <Animatable.View animation="fadeInLeft" delay={500} style={estilos.containerHeader}>
                    <Text style={estilos.mensagem}>Cadastro</Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" style={estilos.containerForm}>
                    <Text style={estilos.titulo}>Nome Completo</Text>
                    <TextInput placeholder="Digite seu nome" style={estilos.input} value={nome} onChangeText={(nome) => setNome(nome)}/>

                    <Text style={estilos.titulo}>Usuário</Text>
                    <TextInput placeholder="Digite o nome de usuário" style={estilos.input}/>

                    <Text style={estilos.titulo}>Email</Text>
                    <TextInput placeholder="Digite seu email" value={email} style={estilos.input}  
                    onChangeText={(email) => setEmail(email)}/>
                    
                    
                    <Text style={estilos.titulo}>Senha</Text>
                    
                   <TextInput placeholder="Digite uma senha" 
                        onChangeText={(password) => setPassword(password)} value={password}
                        style={estilos.input}
                    />

                    <TouchableOpacity style={estilos.butao} onPress={ handleSignUp }>
                        <Text style={estilos.textoButao}  >Cadastrar</Text>
                    </TouchableOpacity>

                </Animatable.View>
            </View>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0ffff',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: ' 8%',
        paddingStart: '5%',
        
    },
    mensagem:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
    },
    containerForm: {
        backgroundColor: '#ffffff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    titulo: {
        fontSize: 28,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        width: '90%',
    },
    butao: {
        backgroundColor: '#000000',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoButao: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon:{
        width: '100%',
        height: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

})