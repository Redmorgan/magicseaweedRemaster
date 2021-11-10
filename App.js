import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import MainScreen from './pages/SW_mainScreen'
import HomeScreen from './pages/SW_homeScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown:false }}>

        <Stack.Screen name="Home"component={HomeScreen}/>

        <Stack.Screen name="Main" component={MainScreen} />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
