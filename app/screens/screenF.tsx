import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";

import { StackTwoParamList } from "../navigation/stackTwoNavigator";

const globalStyles = require('../styles/globalStyles');

// TYPE
type stackTwoNavigationType = StackNavigationProp<StackTwoParamList>;

const ScreenF = () => {
    const navigation = useNavigation<stackTwoNavigationType>();
    const route = useRoute();
    return (
        <View>
            <Text style={globalStyles.title}>SCREEN F</Text>
            <Text style={globalStyles.title}>PRODUCT ID: {route.params?.product_id}</Text>
            <TouchableOpacity style={globalStyles.button_blue} onPress={()=> navigation.navigate('ScreenG', {name: "Hello Aliens"})}>
                <Text style={globalStyles.button_text}>GO TO SCREEN G</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ScreenF;