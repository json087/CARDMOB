import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import ScrollViewExample from './compenents/ScrollViewExemple';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollViewExample/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'gray',
    height: 600,
    marginTop: 150,
    }
});

