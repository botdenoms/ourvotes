import { View, Text, TextInput, StyleSheet} from 'react-native'
import React, {useState} from 'react'

export default function IdentificationList() {

  const [idNo, setIdNo] = useState('')
  const [dob, setDob] = useState('')
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [tel, setTel] = useState('')

  return (
    <View style={{width: '100%', paddingHorizontal: 10, marginVertical: 5}}>
      <Text style={{fontSize: 15, color: '#000'}}>Identification Data</Text>
      <TextInput placeholder='Id number' style={styles.input} value={idNo} onChangeText={(t)=> setIdNo(t)}/>
      <TextInput placeholder='Dob' style={styles.input} value={dob} onChangeText={(t)=> setDob(t)}/>
      <TextInput placeholder='First Name' style={styles.input} value={first} onChangeText={(t)=> setFirst(t)}/>
      <TextInput placeholder='Second Name' style={styles.input} value={last} onChangeText={(t)=> setLast(t)}/>
      <TextInput placeholder='Tel number' style={styles.input} value={tel} onChangeText={(t)=> setTel(t)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    backgroundColor: '#6699ff',
    marginVertical: 5,
    borderRadius: 5,
  }
})