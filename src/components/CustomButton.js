import {Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomButton({title, color, callback}) {

  const styles = StyleSheet.create({
    container:{
      paddingHorizontal: 25,
      paddingVertical: 5,
      backgroundColor: color,
      borderRadius: 5
    },
    text:{
      color: '#fff',
      fontWeight: '700'
    }
  })
  return (
    <Pressable onPress={()=> callback()} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

