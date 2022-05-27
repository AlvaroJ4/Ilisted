import React from "react";
import { 
    Text, 
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function BemVindo() {

    const navigation = useNavigation();
    
    return (
        <View style={estilos.container}>
            <View style={estilos.containerLogo}>
                <Animatable.Image 
                animation="flipInY"
                source={require('../../../assets/logos.png')}
                style={{width: '100%'}}
                resizeMode = 'contain'
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={estilos.containerForm}>
                <Text style={estilos.titulo}>Monte, organize e compartilhe sua lista com amigos ou familiares!</Text>
                <Text style={estilos.texto}>Faça o login para começar</Text>

                <TouchableOpacity onPress={ () => navigation.navigate('Entrar')} style={estilos.butao}>
                    <Text style={estilos.butaoTexto}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f0ffff'
    },
    containerLogo: {
        flex: 2,
        backgroundColor:'#f0ffff',
        justifyContent: 'center',
        alignItems:'center',
    },

    containerForm: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    texto: {
        color: '#a1a1a1',
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