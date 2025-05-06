import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';


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
// CREATE
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
//UPDATE  
  const update = (id) =>{
    setItems(items.map(item =>{
      if(item.id === id){
        return{ ...item, text: editItemText}
      }return item
    })), setEditItemId(null), setEditItemText('')
  }
  // DELETE
  const del = (id) =>{
    (setItems(items.filter(item => item.id !== id)))

  }
  // READ
  const read = ({item}) => {
    if (item.id != editItemId){
      return(
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.text}</Text>
            <View style={styles.buttons}>
              <Button title='Edit' onPress={()=>(setEditItemId(item.id))}></Button>
              <Button title='Delete' onPress={() => {del(item.id)}}></Button>
            </View>
        </View>
      )
    }else{
      return(
        <View style={styles.item}>
          <TextInput style={styles.editInput} onChangeText={setEditItemText} value={editItemText || item.text} />
          <Button title='Update' onPress={() => update(item.id)}></Button> 
        </View>
      )
    }
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} placeholder='digite algo' onChangeText={setText}/>
      {/* <Button title='Add item' onPress={addItem}/> */}
      {/* <Text style={styles.text}>Counter: {counter}</Text> */}

<Button title='Add Item' onPress={addItem}></Button>
<FlatList 
data={items}
renderItem={read}
keyExtractor={item => item.id}
style={styles.list}
/>


      {/* <Image source{URL{'https://picsum.photos/200'}}/> */}
      <StatusBar style="auto" />

      {/* <View style={styles.buttonConteiner}>
        <Button title='Decremento' onPress={d} />
        <Button title='Incremento' onPress={i} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  list: {
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  itemText: {
    flex: 1,
    marginRight: 10,
  },
  buttons: {
    flexDirection: 'row',
  },
  editInput: {
    flex: 1,
    marginRight: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  }
});

