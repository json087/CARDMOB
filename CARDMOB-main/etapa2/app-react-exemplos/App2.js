import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, FlatList } from 'react-native';
import List from "./components/list";


export default function App() {


  return (
    <View style={styles.container}>
      <List />
      <View style={styles.redbox}></View>
      <View style={styles.bluebox}></View>
      <View style={styles.blackbox}></View>
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
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 20,
  },
  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  }
});