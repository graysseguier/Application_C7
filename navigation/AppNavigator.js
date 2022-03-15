//IMPORTS
import React from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';


import MapScreen from '../screens/MapScreen';
import ProgramScreen from '../screens/ProgramScreen';
import ResultsScreen from '../screens/ResultsScreen';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


function MapStackScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Map" component={MapScreen}/>
    </Stack.Navigator>
  )
}

function ProgramStackScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Program" component={ProgramScreen}/>
    </Stack.Navigator>
  )
}

function ResultsStackScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Results" component={ResultsScreen}/>
    </Stack.Navigator>
  )
}

function Navigation(){
  return(
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Map" component={MapStackScreen}/>
        <BottomTab.Screen name="Program" component={ProgramStackScreen}/>
        <BottomTab.Screen name="Results" component={ResultsStackScreen}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation 