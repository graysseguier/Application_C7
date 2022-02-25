// IMPORTS
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import BugScreen from '../../screens/BugScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function BugStackScreen() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen name="Bugstack" component={BugScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default BugStackScreen