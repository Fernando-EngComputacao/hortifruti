import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Home from './HomeRoute';
import Basket from './BasketRoute';

import IconHome from '../assets/home.svg';
import IconCodeBox from '../assets/codebox.svg';
import IconBook from '../assets/book.svg';
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppRoutes(){
    const Tab = createBottomTabNavigator();

    return <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color }) => {
                let Icon = (route.name === 'Basket' ? IconBook : IconHome);

                return <Icon color={color} />
            },
            tabBarActiveTintColor:"#1e90ff",
            tabBarInactiveTintColor: "#A9A9A9",
        })}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Basket" component={Basket}/>
        </Tab.Navigator>
    </NavigationContainer>
}