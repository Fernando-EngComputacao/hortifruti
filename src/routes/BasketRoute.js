import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import BasketScreen from '../screens/Basket';

export default function BasketRoute(){
    const Stack = createNativeStackNavigator();

    return <Stack.Navigator>
        <Stack.Screen name="BasketScreen" component={BasketScreen} />
    </Stack.Navigator>
}