import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { masterParamList } from "../navigation/masterNavigator";

const globalStyles = require('../styles/globalStyles');


type masterNavigationType = StackNavigationProp<masterParamList>;

const ScreenB = () => {
    const navigation = useNavigation<masterNavigationType>();


    return (
        <View>
            <Text style={globalStyles.title}>SCREEN B</Text>
            <TouchableOpacity style={globalStyles.button_orange}onPress={()=> navigation.replace('BottomTabNavigator')}>
                <Text style={globalStyles.button_text}>GO TO SCREEN C</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ScreenB;