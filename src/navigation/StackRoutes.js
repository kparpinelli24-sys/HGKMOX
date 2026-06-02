import React from 'react';

import { createNativeStackNavigator }
from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreens';

import DrawerRoutes from './DrawerRoutes';

import RomanceScreen from '../screens/RomanceScreens';

import MovieDetailScreen
from '../screens/MovieScreens';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Main"
        component={DrawerRoutes}
      />

      <Stack.Screen
        name="Romance"
        component={RomanceScreen}
      />

      <Stack.Screen
        name="MovieDetail"
        component={MovieScreens}
      />

    </Stack.Navigator>
  );
}