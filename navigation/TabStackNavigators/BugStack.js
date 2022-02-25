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

/*
// Constants :

const screens = {
  Bug: BugScreen,
};


// BugStack
const BugStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
    header: null
  }}
);

export default BugStack;
*/

export default BugStackScreen