import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';


export default function App() {
  const [counter, setcounter] = useState(0)
  const i= () =>{
    setcounter(counter + 1)
  }
  const d = () =>{
    setcounter(counter - 1)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {counter}</Text>
      {/* <Image source{URL:{'https://picsum.photos/200'}}/> */}
      <StatusBar style="auto" />

      <View style={styles.buttonConteiner}>
        <Button title='Decremento' onPress={d} />
        <Button title='Incremento' onPress={i} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text:{
    fontSize: 40,
    color: '#fff'
  },
  buttonConteiner:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
