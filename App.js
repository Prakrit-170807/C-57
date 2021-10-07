import { StyleSheet, Text, View, } from 'react-native';
import Main from "./#1/Main.js"
import SoundBUTTON from './#1/sound.js';
import {createAppContainer, createSwitchNavigator} from "react-navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <Contint/>
    </View>
  );

}

var Navigt = createSwitchNavigator({
  Main: Main,
  SoundBUTTON: SoundBUTTON,
})

const Contint = createAppContainer(Navigt)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
