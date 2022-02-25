// IMPORTS
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ContactsScreen from '../../screens/ContactsScreen';

const Stack = createNativeStackNavigator();

function ContactsStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen name="Contacts" component={ContactsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

/*
// Constants :

const screens = {
  Contacts: ContactsScreen,
};


// ContactsStack
const ContactsStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
    header: null
  }
  }
);
*/

export default ContactsStack;
