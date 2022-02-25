import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabBarIcon from '@expo/vector-icons/Ionicons';

import MapScreen from '../../screens/MapScreen';

const Stack = createNativeStackNavigator();

function MapStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

/*
// PlanStack
const screens = {
    Map: MapScreen,
  };

  const MapStack =  createStackNavigator(
    screens, 
    { defaultNavigationOptions: { header: null }
    }
  );
  */

export default MapStack;