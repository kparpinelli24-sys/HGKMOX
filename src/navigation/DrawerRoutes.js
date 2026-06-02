import React from 'react';

import { createDrawerNavigator }
from '@react-navigation/drawer';

import TabRoutes from './TabRoutes';

import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>

      <Drawer.Screen
        name="Início"
        component={TabRoutes}
      />

      <Drawer.Screen
        name="Sobre"
        component={AboutScreen}
      />

    </Drawer.Navigator>
  );
}