import React, { useState } from 'react';
import { TextInput, Button, AppBar } from '@react-native-material/core';
import { StyleSheet, View, Text } from 'react-native';
import { NativeRouter } from 'react-router-native';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <NativeRouter>
      {/* <AppBar title="Log In"/> */}
      <View style={styles.container}>
        <TextInput
          variant="outlined"
          label="Name"
          style={styles.textInput}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          variant="outlined"
          label="Password"
          style={styles.textInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Button 
          onPress={()=>{
            navigation.navigate('Dashboard')
          }} 
          title="Sign In" 
          variant="contained" 
          style={styles.button}
        />
        <Button 
          onPress={()=>{
            navigation.navigate('Register')
          }} 
          title="Create New Account" 
          variant="contained" 
          style={styles.button}
        />
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100vw'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  textInput: {
    fontSize: 18,
    marginVertical: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: '100%', 
  },
  button: {
    marginTop: 20,
    width: '15%', 
    paddingVertical: 12,
  },
});

export default Login;
