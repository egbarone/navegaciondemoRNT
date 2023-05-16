import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import StackOneNavigator from './stackOneNavigator';
import StackTwoNavigator from './stackTwoNavigator';
import BottomTabNavigator from './bottomTabNavigator';


export type masterParamList = {
    "StackOneNavigator": undefined;
    "StackTwoNavigator": undefined;
    "BottomTabNavigator": undefined;
}


const Stack = createStackNavigator();

const MasterNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator
                initialRouteName='StackOneNavigator'
                screenOptions={{
                    headerShown: false
                }}>
            <Stack.Screen name="StackOneNavigator" component={StackOneNavigator}/>
            <Stack.Screen name="StackTwoNavigator" component={StackTwoNavigator}/>
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default MasterNavigator;