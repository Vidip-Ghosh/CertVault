import React, { useState } from 'react';
import { TextInput, Button, AppBar } from '@react-native-material/core';
import { StyleSheet, View, Text } from 'react-native';
import { NativeRouter } from 'react-router-native';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  async function log(){

    
    const url="http://192.168.1.6:3000/auth/login";
  
    const options = {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({
        userName : name,
        password : password
      })
    }
    try{
      const response = await fetch(url,options);
      const result = await response.json();
      if(result.token){
        navigation.navigate("Dashboard")
      }
      console.log(result);
    }
    catch(err){
      console.error(err)
    }
      

  }

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
          // onPress={()=>{
          //   navigation.navigate('Dashboard')
          // }} 
           onPress={log}
          title="Log In" 
          variant="contained" 
          style={styles.button}
        />
        <Button 
          onPress={()=>{
            navigation.navigate('Register')
          }} 
          title="Sign up" 
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
