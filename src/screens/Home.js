import { 
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'

import ElectionCard from '../components/ElectionCard';

import React from 'react'

export default function Home({stack}) {

  const toVoting = () =>{
    stack.navigate('Voting')
  }

  const toResults = () =>{
    stack.navigate('Results')
  }

  return (
    <View style={styles.body}>
        <Text style={styles.title}>on going</Text>
        <ElectionCard active={true} callback={toVoting}/>
        <Text style={styles.title}> Previous</Text>
        <ScrollView>
          <ElectionCard active={false} callback={toResults}/>
          <ElectionCard active={false} callback={toResults}/>
          <ElectionCard active={false} callback={toResults}/>
          <ElectionCard active={false} callback={toResults}/>
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