import {TextInput,Stack,Button} from '@react-native-material/core'
import { StyleSheet,View } from 'react-native'
import {NativeRouter,Route,Link} from 'react-router-native'
import { useState } from 'react'

const Register = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  return (
    <NativeRouter>
      <View style={styles.container}>
        <h1>Register</h1>
        <TextInput variant='outlined' label='Name' style={styles.textInput} value={name}/>
        <TextInput variant='outlined' label='Email' style={styles.textInput} value={email}/>
        <TextInput variant='outlined' label='Password' style={styles.textInput} value={password}/>
        <Stack fill spacing={4}>
          <Button title='Sign In' variant='outlined' />
        </Stack>
      </View>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
  textInput: {
      fontSize: 18,
      margin: 10,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

export default Register
