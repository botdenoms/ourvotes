import 'react-native-gesture-handler';

import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        HomeScreen
      </Text>
    </View>
  );
}

function RegistrationScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        RegistrationScreen
      </Text>
    </View>
  );
}

function ValidationScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        ValidationScreen
      </Text>
    </View>
  );
}


const Drawer = createDrawerNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Registration" component={RegistrationScreen} />
        <Drawer.Screen name="Validation" component={ValidationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
