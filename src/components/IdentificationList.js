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
      <Text style={{fontSize: 15}}>Identification Data</Text>
      <TextInput placeholder='Id number' style={styles.input} value={idNo} onChange={(e)=> setIdNo('')}/>
      <TextInput placeholder='Dob' style={styles.input} value={dob} />
      <TextInput placeholder='First Name' style={styles.input} value={first}/>
      <TextInput placeholder='Second Name' style={styles.input} value={last}/>
      <TextInput placeholder='Tel number' style={styles.input} value={tel}/>
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