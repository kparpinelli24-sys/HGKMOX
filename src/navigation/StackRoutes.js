import React from 'react';

import { createNativeStackNavigator }
from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';

import DrawerRoutes from './DrawerRoutes';

import RomanceScreen from '../screens/RomanceScreen';

import MovieDetailScreen
from '../screens/MovieDetailScreen';

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
        component={MovieDetailScreen}
      />

    </Stack.Navigator>
  );
}