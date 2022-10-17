import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CandidateCard() {
    return (
        <View style={styles.card}>
            <View style={{borderRadius: 18, height: 36, width: 36, backgroundColor: '#fff'}}></View>
            <Text style={{fontSize: 10, color: '#fff'}}>Candidate name</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={{borderRadius: 9, height: 18, width: 18, backgroundColor: '#fff'}}></View>
                <Text style={{fontSize: 11, color: '#fff'}}>Party</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#1e1e1e',
	paddingVertical: 5,
        borderRadius: 5,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    }
})