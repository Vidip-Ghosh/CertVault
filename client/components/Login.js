import {TextInput,Stack,Button} from '@react-native-material/core'
import {StyleSheet, Text, View} from 'react-native';
import { useState } from 'react'
const Login = () => {
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  return (
    <View style={styles.container}>
      <h1>Login</h1>
      <TextInput variant='outlined' label='Name' value={name} style={styles.textInput} />
      <TextInput variant='outlined' label='Password' value={password} style={styles.textInput}/>
      <Stack fill spacing={4}>
        <Button title='Sign In' variant='outlined' />
        <Text>Don't have an account? <a href="/signup">Register</a></Text>
      </Stack>
      
    </View>
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

export default Login
