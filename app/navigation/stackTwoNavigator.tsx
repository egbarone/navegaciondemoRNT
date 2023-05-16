import { createStackNavigator } from '@react-navigation/stack';

import ScreenF from "../screens/screenF"
import ScreenG from "../screens/screenG"





export type StackTwoParamList = {
    "ScreenF": undefined;
    "ScreenG": {
        name: string
    }
}

const Stack = createStackNavigator<StackTwoParamList>();



const StackTwoNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="ScreenF" component={ScreenF} />
        <Stack.Screen name="ScreenG" component={ScreenG} />
    </Stack.Navigator>
)

export default StackTwoNavigator;