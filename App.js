import 'react-native-gesture-handler';

import React from 'react';

import Home from './src/screens/Home'
import Registration from './src/screens/Registration'
import Validation from './src/screens/Validation'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Close"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Voter Registration"
        onPress={() => props.parent.navigate('Registration')}
      />
      <DrawerItem
        label="Voter Records"
        onPress={() => props.parent.navigate('Validation')}
      />
    </DrawerContentScrollView>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({navigation}) {
  return (
    <Drawer.Navigator 
        drawerContent={(props) => <CustomDrawerContent {...props} parent={navigation} />}
        screenOptions={{
          headerShown: true,
          headerTitle: 'OurVotes',
          headerTitleAlign: 'center',
          headerStyle: {
            elevation: 0,
          }
        }}
      >
      <Drawer.Screen name="main" component={Home} />
    </Drawer.Navigator>
  );
}

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Registration" component={Registration } />
        <Stack.Screen name="Validation" component={Validation} />
	    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
