import React, { useState } from 'react';
import { TextInput, Button, AppBar } from '@react-native-material/core';
import { StyleSheet, View } from 'react-native';
import { NativeRouter } from 'react-router-native';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <Button title="Sign Up" variant="contained" style={styles.button} />
        <Button
          onPress={() => {
            navigation.navigate('IssuerDashboard')
          }}
          title="I'm an Issuer"
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
    width: '100vw'
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
    width: '10%',
    paddingVertical: 12,
  },
});

export default Register;
