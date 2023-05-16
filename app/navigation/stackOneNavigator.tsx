import { createStackNavigator } from '@react-navigation/stack';

import ScreenA from "../screens/screenA"
import ScreenB from "../screens/screenB"


export type StackOneParamList = {
    "ScreenA": undefined;
    "ScreenB": undefined
}

const Stack = createStackNavigator<StackOneParamList>();

const StackOneNavigator = () => (
    <Stack.Navigator
        initialRouteName='ScreenA'>
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
    </Stack.Navigator>
)


export default StackOneNavigator;