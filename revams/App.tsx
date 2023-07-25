import * as React from 'react';
import SplashScreen from './src/Screen/Splash/SplashScreen';
import HomeScreen from './src/Screen/Home/HomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default function App() { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen name="SplashScreen" component = {SplashScreen} /> 
        <Stack.Screen name="HomeScreen" component = {HomeScreen} /> 
      </Stack.Navigator> 
    </NavigationContainer> 
  );
}