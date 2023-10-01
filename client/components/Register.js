import React, { useState } from 'react';
import { TextInput, Button,AppBar } from '@react-native-material/core';
import { StyleSheet, View } from 'react-native';
import { NativeRouter } from 'react-router-native';


const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   async function signup(){

    
    const url="http://192.168.1.6:3000/auth/signup";
  
    const options = {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({
        userName : name,
        email : email,
        password : password
      })
    }
    console.log(options.body.userName)
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
      {/* <AppBar title="Register"/> */}
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
          label="Email"
          style={styles.textInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          variant="outlined"
          label="Password"
          style={styles.textInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Button title="Sign Up" variant="contained" style={styles.button} onPress={signup} />
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
    marginBottom: 20,
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
    width: '35%', 
    paddingVertical: 12,
  },
});

export default Register;
