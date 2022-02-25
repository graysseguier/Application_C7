//IMPORTS 
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import InfosScreen from '../../screens/InfosScreen';

const Stack = createNativeStackNavigator();

function InfosStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen name="Infos" component={InfosScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

/*
// InfosStack
const screens = {
    Infos: InfosScreen,
  };

const InfosStack =  createStackNavigator(
  screens, 
  { defaultNavigationOptions: { header: null }
  }
);
*/

export default InfosStack;