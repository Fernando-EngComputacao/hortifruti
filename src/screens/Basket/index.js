import React from "react";
import { ScrollView, Text, View } from "react-native";
import Top from "../Top";

export default function Home(){

    return <ScrollView>
        <Top />
        <Text style={{flex:1,justifyContent:"center",alignItems:"center"}}>IF Goiano!</Text>
    </ScrollView>
}