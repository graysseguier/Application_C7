//IMPORTS

import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import {TabBarIcon, Ionicons} from '@expo/vector-icons/Ionicons';
import {Button, View, Text} from 'react-native';

import ProgramScreen from '../../screens/ProgramScreen';
import Program2 from '../../screens/Program2';

const Stack = createNativeStackNavigator();

function ProgramStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Program1" component={ProgramScreen} />
          <Stack.Screen name="Program2" component={Program2} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

/*
//CONSTS

const screens = {

  Program1: {
    screen: ProgramScreen,
  },

  Program2: {
    screen: Program2,
  },

};

//STACK NAVIGATOR :

const ProgramStack = createStackNavigator(
  
  screens, 
  {
    defaultNavigationOptions: {
      header: null,
    }
  }
);
*/
//EXPORTS :

export default ProgramStack;