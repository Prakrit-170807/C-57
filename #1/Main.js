import * as React from 'react';
import {Text , View , StyleSheet, TouchableOpacity} from 'react-native'
import HEADING from './Apphead'

export default class Main extends React.Component {
  render(){
    return(
      <View style={styles.all}>
        <HEADING/>

        <TouchableOpacity style={styles.touch}>

        </TouchableOpacity>
      </View>
    )
  }
 }

const styles = StyleSheet.create({
  all:{
    backgroundColor: "black"
  },
  touch:{
      
  }
})

