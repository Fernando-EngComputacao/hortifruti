import React from "react";
import { Text, View } from "react-native";

import IconHome from '../assets/home.svg';

export default function Home(){

    return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>Fernando Furtado!</Text>
        <IconHome  />
    </View>
}