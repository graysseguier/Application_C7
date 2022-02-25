// IMPORTS
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SatisfactionScreen from '../../screens/SatisfactionScreen';

const Stack = createNativeStackNavigator();

function SatisfactionStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Satisfaction" component={SatisfactionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

/*
// Constants :

const screens = {
  Satisfaction: SatisfactionScreen,
};


// BugStack
const SatisfactionStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
    header: null
  }}
);
*/

export default SatisfactionStack;