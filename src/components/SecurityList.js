import { View, Text, Switch} from 'react-native'
import React, {useState} from 'react'

import CustomButton from '../components/CustomButton'

export default function SecurityList() {

  const [image, setImage] = useState(false)
  const [fingerPrint, setFingerPrint] = useState(false)
  const [voice, setVoice] = useState(false)
  const [textNote, setTextNote] = useState(false)

  return (
    <View style={{width: '100%', paddingHorizontal: 10, marginVertical: 5}}>
      <Text style={{fontSize: 15, color: '#000'}}>Security Data</Text>
      <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
        <Text>Image</Text>
        <Switch 
          value={image} 
          onValueChange={()=> setImage(!image)} 
          thumbColor={image ? "#fff" : "#404040"} 
          trackColor={{ false: "#808080", true: "#808080" }}
        />
      </View>
      {
        image === true?
        <View style={{marginVertical: 5, paddingVertical: 5, justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomButton color='#3366cc' title='UPLOAD' callback={()=>console.log('upload')}/>
            <CustomButton color='#3366cc' title='CAMERA' callback={()=>console.log('camera')}/>
          </View>
          <View style={{backgroundColor: '#3366cc', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
            <Text>Feedback Message</Text>
          </View>
        </View>
        :null
      }
      <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
        <Text>Finger Print</Text>
        <Switch 
          value={fingerPrint} 
          onValueChange={()=> setFingerPrint(!fingerPrint)} 
          thumbColor={fingerPrint ? "#fff" : "#404040"} 
          trackColor={{ false: "#808080", true: "#808080" }}
        />
      </View>
      {
        fingerPrint === true?
        <View style={{marginVertical: 5, paddingVertical: 5, justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomButton color='#3366cc' title='UPLOAD' callback={()=>console.log('upload')}/>
            <CustomButton color='#3366cc' title='CAMERA' callback={()=>console.log('camera')}/>
          </View>
          <View style={{backgroundColor: '#3366cc', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
            <Text>Feedback Message</Text>
          </View>
        </View>
        :null
      }
      <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
        <Text>Voice</Text>
        <Switch 
          value={voice} 
          onValueChange={()=> setVoice(!voice)} 
          thumbColor={voice ? "#fff" : "#404040"} 
          trackColor={{ false: "#808080", true: "#808080" }}
        />
      </View>
      {
        voice === true?
        <View style={{marginVertical: 5, paddingVertical: 5, justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomButton color='#3366cc' title='UPLOAD' callback={()=>console.log('upload')}/>
            <CustomButton color='#3366cc' title='CAMERA' callback={()=>console.log('camera')}/>
          </View>
          <View style={{backgroundColor: '#3366cc', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
            <Text>Feedback Message</Text>
          </View>
        </View>
        :null
      }
      <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
        <Text>Text Notification</Text>
        <Switch 
          value={textNote} 
          onValueChange={()=> setTextNote(!textNote)} 
          thumbColor={textNote ? "#fff" : "#404040"} 
          trackColor={{ false: "#808080", true: "#808080" }}
        />
      </View>
      {
        textNote === true?
        <View style={{marginVertical: 5, paddingVertical: 5, justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomButton color='#3366cc' title='UPLOAD' callback={()=>console.log('upload')}/>
            <CustomButton color='#3366cc' title='CAMERA' callback={()=>console.log('camera')}/>
          </View>
          <View style={{backgroundColor: '#3366cc', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
            <Text>Feedback Message</Text>
          </View>
        </View>
        :null
      }
    </View>
  )
}