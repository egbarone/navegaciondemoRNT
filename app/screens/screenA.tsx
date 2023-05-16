import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { StackOneParamList } from "../navigation/stackOneNavigator";

const globalStyles = require('../styles/globalStyles');


type stackOneNavigationType = StackNavigationProp<StackOneParamList>;

const ScreenA = () => {
    const navigation = useNavigation<stackOneNavigationType>();

    return (
        <View>
            <Text style={globalStyles.title}>SCREEN A</Text>
            <TouchableOpacity style={globalStyles.button_blue} onPress={()=> navigation.navigate('ScreenB')}>
                <Text style={globalStyles.button_text}>GO TO SCREEN B</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ScreenA;