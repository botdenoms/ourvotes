import 'react-native-gesture-handler';

import React from 'react';

import Home from './src/screens/Home'
import Registration from './src/screens/Registration'
import Validation from './src/screens/Validation'

import {Bars3Icon, ChevronLeftIcon, UserPlusIcon, PencilSquareIcon} from "react-native-heroicons/solid";

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  DrawerContentScrollView,
  // DrawerItem
} from '@react-navigation/drawer';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.drawer}>
      <View>
        <TouchableOpacity onPress={()=> props.navigation.closeDrawer()} style={styles.btns}>
          <ChevronLeftIcon color="#1e1e1e" size={24}/>
        </TouchableOpacity>
          <Text style={styles.titleText}>Services</Text>
        <TouchableOpacity onPress={()=> props.parent.navigate('Registration')} style={styles.btns}>
          <UserPlusIcon color="#1e1e1e" size={24}/>
          <Text style={styles.linkText}>Voter Registration</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> props.parent.navigate('Validation')} style={styles.btns}>
          <PencilSquareIcon color="#1e1e1e" size={24}/>
          <Text style={styles.linkText}>Voter Records</Text>
        </TouchableOpacity>
      </View>
      {/* <DrawerItem
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
      /> */}
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
        },
        drawerIcon: ({ focused, color, size})=> <Bars3Icon size={size} color='#1e1e1e'/>
      }}
      >
      <Drawer.Screen name="main" component={Home}/>
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
        <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }}/>
        <Stack.Screen name="Validation" component={Validation} options={{ headerShown: false }}/>
	    </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawer:{
    backgroundColor: '#d9d9d9',
    flex: 1,
    height: '100%'
  },
  titleText:{
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  linkText:{
    fontSize: 17,
    color: '#1e1e1e',
    paddingHorizontal: 10,
  },
  btns:{
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default App;
