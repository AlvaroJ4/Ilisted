import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AnimatedLottieView from 'lottie-react-native'


export default function Configuracao(){
    
    return (
        <View style={styles.container}>
            <AnimatedLottieView source={require('../../../../assets/settings.json')}
            autoPlay={true}
            loop={true}
            />
        </View>
    )
}
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
    },
})
