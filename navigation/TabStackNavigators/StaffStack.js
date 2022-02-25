//IMPORTS
import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import StaffScreen from '../../screens/StaffScreen';
import PdfScreen from '../../screens/PdfScreen';

const Stack = createNativeStackNavigator();

function StaffStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen name="StaffHome" component={StaffScreen} />
                <StaffScreen.Screen name ="PdfScreen" component={PdfScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

/*
// Constants

const screens = {
  StaffHome: StaffScreen,
  PdfScreen: PdfScreen,
}

// StaffStack

const StaffStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
      header: null,
    }
  }
);
*/

export default StaffStack;