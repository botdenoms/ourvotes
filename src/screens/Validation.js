import { View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native'
import React from 'react'

import {ChevronLeftIcon} from "react-native-heroicons/solid";

export default function Validation({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.appbar}>
          <Pressable onPress={()=> navigation.goBack()}>
            <ChevronLeftIcon color="#1e1e1e" size={24}/>
          </Pressable>
          <Text style={{color: '#1e1e1e'}}>Voter verification</Text>
          <View style={{width: 10}}></View>
        </View>
        <View style={{justifyContent:'center', alignItems:'center', height: '100%'}}>
          <Text>body</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body:{
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  appbar:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});