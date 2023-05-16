import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ScreenC from "../screens/screenC";
import ScreenD from "../screens/screenD";
import ScreenE from "../screens/screenE";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => (
    <BottomTab.Navigator>
        <BottomTab.Screen name="ScreenC" component={ScreenC} />
        <BottomTab.Screen name="ScreenD" component={ScreenD} />
        <BottomTab.Screen name="ScreenE" component={ScreenE} />
    </BottomTab.Navigator>
)

export default BottomTabNavigator;