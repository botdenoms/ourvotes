import { View, Text, TextInput, StyleSheet} from 'react-native'
import React, {useState} from 'react'

export default function LocationList() {

  const [county, setCounty] = useState('')
  const [consti, setConsti] = useState('')
  const [ward, setWard] = useState('')


  return (
    <View style={{width: '100%', paddingHorizontal: 10, marginVertical: 5}}>
      <Text style={{fontSize: 15}}>Location Data</Text>
      <TextInput placeholder='County' style={styles.input} value={county}/>
      <TextInput placeholder='Constituency' style={styles.input} value={consti}/>
      <TextInput placeholder='Ward' style={styles.input} value={ward}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    backgroundColor: '#23bc64',
    marginVertical: 5,
    borderRadius: 5,
  }
})