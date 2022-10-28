import { View, Text, TextInput, StyleSheet, Switch} from 'react-native'
import React, {useState} from 'react'

export default function LocationList() {

  const [alien, setAlien] = useState(false)
  const [country, setCountry] = useState('')
  const [county, setCounty] = useState('')
  const [consti, setConsti] = useState('')
  const [ward, setWard] = useState('')


  return (
    <View style={{width: '100%', paddingHorizontal: 10, marginVertical: 5}}>
      <Text style={{fontSize: 15, color: '#000'}}>Location Data</Text>
      <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
        <Text>Alien Citizen</Text>
        <Switch 
          value={alien} 
          onValueChange={()=> setAlien(!alien)} 
          thumbColor={alien ? "#fff" : "#404040"} 
          trackColor={{ false: "#808080", true: "#808080" }}
        />
      </View>
      {
        alien === true?
        <TextInput placeholder='Country' style={styles.input} value={country} onChangeText={(t)=> setCountry(t)}/>
        :null
      }
      {
        alien === false?
        <View>
          <TextInput placeholder='County' style={styles.input} value={county} onChangeText={(t)=> setCounty(t)}/>
          <TextInput placeholder='Constituency' style={styles.input} value={consti} onChangeText={(t)=> setConsti(t)}/>
          <TextInput placeholder='Ward' style={styles.input} value={ward} onChangeText={(t)=> setWard(t)}/>
        </View>
        :null
      }
      
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