import React from 'react';

import { createBottomTabNavigator }
from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Buscar"
        component={SearchScreen}
      />

      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
      />';

    </Tab.Navigator>
  );
}