import { View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native'
import React,{useState} from 'react'

import {ChevronLeftIcon} from "react-native-heroicons/solid"

import StepsView from '../components/StepsView'
import CustomButton from '../components/CustomButton'
import IdentificationList from '../components/IdentificationList'
import LocationList from '../components/LocationList'
import SecurityList from '../components/SecurityList'

export default function Registration({navigation}) {

  const[step, setStep] = useState(0)
  const stepNavigator = ()=>{
    var temp = step + 1
    if (temp > 2){
      // manage finish registration
      return
    } 
    setStep(temp)
  }

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.appbar}>
	        <Pressable onPress={()=> navigation.goBack()}>
            <ChevronLeftIcon color="#1e1e1e" size={24}/>
          </Pressable>
          <Text style={{color: '#1e1e1e'}}>Voter registration</Text>
          <View style={{width: 10}}></View>
        </View>
        <View style={{justifyContent: 'flex-start', alignItems:'flex-start', height: '100%'}}>
          <View style={{width: '100%', alignItems: 'center', marginVertical: 10}}>
            <StepsView index={step}/>
          </View>
          {
            step === 0?
            <IdentificationList/>
            :null
          }
          {
            step === 1?
            <LocationList/>
            :null
          }
          {
            step === 2?
            <SecurityList/>
            :null
          }
          <View style={{width: '100%', alignItems: 'center', marginVertical: 10}}>
            <CustomButton color='red' title={step === 2? 'Finish': 'Next'} callback={stepNavigator}/>
          </View>
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
    justifyContent: 'space-between',
  }
});