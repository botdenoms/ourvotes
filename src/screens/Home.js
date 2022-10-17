import { 
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'

import ElectionCard from '../components/ElectionCard';

import React from 'react'

export default function Home() {
  return (
    <View style={styles.body}>
        <Text style={styles.title}>on going</Text>
        <ElectionCard active={true}/>
        <Text style={styles.title}> Previous</Text>
        <ScrollView>
          <ElectionCard active={false}/>
          <ElectionCard active={false}/>
          <ElectionCard active={false}/>
          <ElectionCard active={false}/>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize: 17,
    color: '#1e1e1e'
  },
  body:{
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#fff'
  }
});