import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import React from 'react'

import CandidateCard from './CandidateCard'
import CustomButton from './CustomButton'

export default function ElectionCard({active, callback}) {
  return (
    <View style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Elec title</Text>
            <Text> Date string</Text>
        </View>
        <ScrollView horizontal= {true} style={{marginVertical: 5}}>
            <CandidateCard/>
            <CandidateCard/>
            <CandidateCard/>
            <CandidateCard/>
            <CandidateCard/>
        </ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
                <Text style={{fontSize:10, color: '#1e1e1e'}}>Reg Voters</Text>
                <Text style={{fontSize:15, color: '#1e1e1e'}}>00000000</Text>
            </View>
            {
                !active?
                <View>
                    <Text style={{fontSize:10, color: '#1e1e1e'}}>Turn up</Text>
                    <Text style={{fontSize:15, color: '#1e1e1e'}}>000%</Text>
                </View>
                : null
            }
            <CustomButton 
                title={!active? 'Results' : 'Vote'} 
                color={active?'red':'#003399'} 
                callback={callback}
            />
            {/* <Button color={active?'red':'#003399'} title={!active? 'Results' : 'Vote'} /> */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#d9e0f0',
        padding: 5,
        borderRadius: 5,
        width: '100%',
        marginVertical: 5
    }
})