
import { AppBar } from '@react-native-material/core';
import { StyleSheet, Text, View } from 'react-native';
import Linking from './components/Linking';
import Register from './components/Register';
import Login from './components/Login';
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <View style={styles.container}>
      <Login/>
      </View>
    </TailwindProvider>
  );
}




