import React from 'react';
import Home from '../pages/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        </Stack.Navigator>
    )
}

export default StackRoutes;