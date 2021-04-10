import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavBar } from './src/NavBar';
import { AddNumeric } from './src/AddNumeric';
 
export default function App() {
  
  const [result, setResult] = useState(null);
 
  return (
    <View style={styles.container}>
        <NavBar title="Корни квадратного уравнения" />
        <Text style={styles.str} > Формула дискриминанта: D=b^(2) - 4*a*c </Text>
        <AddNumeric 
              setResult={setResult.bind(this)}
         />
        <View>
              {result} 
        </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  str: {
    display: 'flex',
    color: 'red',
    fontSize: 15,
  },
});
