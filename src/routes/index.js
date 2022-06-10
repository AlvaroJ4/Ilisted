import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-gesture-handler';

import  BemVindo from "../pages/BemVindo";
import Entrada from "../pages/Entrar";
import Cadastro from "../pages/Cadastro";
import Principal from "../pages/Principal";
import Lista from "../pages/Principal/Lista";


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Bemvindo" 
            component={BemVindo} 
            options={{ headerShown: false}}
            />
            <Stack.Screen 
            name="Entrar" 
            component={Entrada} 
            options={{ headerShown: false}}
            />
            <Stack.Screen 
            name="Cadastro" 
            component={Cadastro} 
            options={{ headerShown: false}}
            />
            <Stack.Screen 
            name="Principal"
            component={Principal}
            options={{ headerShown: false }}
            />
            <Stack.Screen 
            name="Lista"
            component={Lista}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}