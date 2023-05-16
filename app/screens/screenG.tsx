import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

const globalStyles = require('../styles/globalStyles');


const ScreenG = () => {
    const route = useRoute();

    return (
        <View>
            <Text style={globalStyles.title}>SCREEN G</Text>
            <Text style={globalStyles.title}>NAME: {route.params?.name}</Text>
        </View>
    )
}

export default ScreenG;