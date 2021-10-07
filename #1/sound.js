import * as React from 'react';
import {Text , View , Button, TouchableOpacity, StyleSheet} from 'react-native'
import {Audio} from "expo-av"

export default class SoundBUTTON extends React.Component {
  hear=async()=>{
    await Audio.Sound.createAsync(
    {
      uri:"http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3"
    }
    ,
    {
      shouldPlay: true
    }
    )
  }
  render(){
    return(
      <TouchableOpacity onPress={this.hear} style={styles.touching}>
        <Text style={styles.tex}>
        Beep!!!!
        </Text>
        </TouchableOpacity>
    )
  }
}

const styles= StyleSheet.create ({
    touching: {
      marginTop:50, 
      width:200, 
      height:200, 
      borderWidth:20 ,
      borderRadius:100, 
      backgroundColor:"lightblue", 
      justifyContent:"center"
    },
    tex:{
      textAlign:"center", 
      fontSize:30
    } 
})   