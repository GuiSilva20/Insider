import React from 'react';
import Home from '../pages/home';
import Search from '../pages/search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../pages/detail';
const Stack = createNativeStackNavigator();

function StackRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
            headerShown: false,
            title: 'Detalhes'
            }}
            />
            <Stack.Screen
            name="Search"
            component={Search}
            options={{
            title: 'Sua busca',
            headerTintColor: '#FFF',
            headerTitleStyle:'#FFF',
            headerStyle:{
                backgroundColor:'#141a29'
            }
            }}
            />
        </Stack.Navigator>
    )
}

export default StackRoutes;

