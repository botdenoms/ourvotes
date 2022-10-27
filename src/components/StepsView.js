import { View, StyleSheet } from 'react-native'
import React from 'react'

export default function StepsView({index}) {
  return (
    <View style={styles.container}>
      <View style={[styles.circle, index === 0? styles.active: null]}></View>
      <View style={[styles.circle, index === 1? styles.active: null]}></View>
      <View style={[styles.circle, index === 2? styles.active: null]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  circle:{
    borderRadius: 5,
    height: 10,
    width: 10,
    backgroundColor: 'grey',
    margin: 2
  },
  active:{
    height: 11,
    width: 11,
    borderRadius: 6,
    backgroundColor: 'blue'
  }
})