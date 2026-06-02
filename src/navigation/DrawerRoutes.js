import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabRoutes from './TabRoutes';
import SobreScreens from '../screens/SobreScreens';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={TabRoutes}
      />

      <Drawer.Screen
        name="Sobre"
        component={SobreScreens}
      />
    </Drawer.Navigator>
  );
}