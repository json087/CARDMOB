import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';


export default function App() {
  const [counter, setcounter] = useState(0)

  // crud
  const [items,  setItems] = useState([])
  const [text, setText]= useState('')
  const [editItemId, setEditItemId] = useState(null)
  const [editItemText, setEditItemText] = useState('')

  const i= () =>{
    setcounter(counter + 1)
  }
  const d = () =>{
    setcounter(counter - 1)
  }

  const addItem = () =>{
    if (text.trim()=== ''){
      return
    }
    const newItem ={
      id: Math.random().toString(),
      text: text.trim()
    }
    setItems([...items, newItem]);
    setText('');
    console.log(items);
    
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} placeholder='digite algo' onChangeText={setText}/>
      <Button title='Add item' onPress={addItem}/>
      <Text style={styles.text}>Counter: {counter}</Text>
      {/* <Image source{URL{'https://picsum.photos/200'}}/> */}
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
