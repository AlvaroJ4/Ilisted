import React from 'react'
import { ImageBackground, Text, View, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'


const CustomDrawer = (props) => {
    return (
        <View style={{flex:1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#f0ffff'}}>
                <ImageBackground source={require('../../assets/menu-app.jpg')} style={{padding:20}}>
                    <Image source={require('../../assets/user-profile.jpg')} 
                    style={{height:80, with:80, borderRadius:40, marginBottom:10}}
                    />
                    <Text style={{color: '#000000', fontSize:'18', fontFamily:'Roboto-Medium'}}></Text>
                </ImageBackground>
                
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <View>
                <Text>Our Custom text</Text>
            </View>
        </View>
    )
}

export default CustomDrawer
