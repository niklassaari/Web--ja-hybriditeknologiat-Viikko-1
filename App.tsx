import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from "react-native";


export default function App() {
  
  const [age, setAge] = useState<string>("")
  
  // tldr Jos arvo on muu kuin numero, lower ja upper saavat arvon 0
  // checkNumeric tarkistaa että annettu arvo on numero ja että kenttään on syötetty jotain
  const checkNumeric = age !== "" && !isNaN(Number(age))

  const lower = checkNumeric ? (220 - Number(age)) * 0.65 : 0;
  const upper = checkNumeric ? (220 - Number(age)) * 0.85 : 0;


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <StatusBar style="auto" />
      <Text>Enter your age:</Text>

<TextInput
style={styles.inputfield}
placeholder="Age"
keyboardType="number-pad"
value={age}
onChangeText={setAge}
/>

{checkNumeric ? (
  <>
    <Text style={styles.text}>Lower limit: {lower.toFixed(2)} bpm</Text>
    <Text style={styles.text}>Upper limit: {upper.toFixed(2)} bpm</Text>
  </>
) : (
  <>
    <Text style={styles.text}>Lower limit: {lower.toFixed(2)} bpm</Text>
    <Text style={styles.text}>Upper limit: {upper.toFixed(2)} bpm</Text>
  </>
)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    marginLeft: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputfield: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#b4b4b4",
    padding: 10,
    width: 90,
    marginTop: 10,
    marginBottom: 20,
  }
});
