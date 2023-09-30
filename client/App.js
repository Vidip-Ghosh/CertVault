
import { AppBar } from '@react-native-material/core';
import { StyleSheet, Text, View } from 'react-native';
import Linking from './components/Linking';
import Register from './components/Register';
import Login from './components/Login';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function App() {
  return (
    <View>
      <Register/>
    </View>
  );
}




