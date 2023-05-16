import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const globalStyles = require('../styles/globalStyles');


const ScreenC = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text style={globalStyles.title}>SCREEN C</Text>
            <TouchableOpacity style={globalStyles.button_orange} onPress={()=> navigation.navigate('StackTwoNavigator', {screen: "ScreenF", params: {product_id: "J1K2H1"}})}>
                <Text style={globalStyles.button_text}>GO TO SCREEN F</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ScreenC;