import {useState} from 'react'
import { StyleSheet,Text,View,Image,TouchableOpacity,Alert } from 'react-native';
import { Button } from '@react-native-material/core';
import * as ImagePicker from 'expo-image-picker';

const UploadImage = () => {
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'Sorry, we need camera roll permission to upload images.');
        } else {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.canceled) {
                setFile(result.uri); 
                setError(null);
            }
        }
    };
  return (
    <View>
      <Text>Add Image:</Text>

      <Button title="Choose File" style={styles.btn} onPress={pickImage}></Button>
      {
        file ? (
            <View style={styles.imageContainer}>
                <Image style={styles.img} source={{uri: file}}></Image>
            </View>
        ) : (
            <Text style={{color:'red'}}>{error}</Text>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
    btn: {
        width: 150, 
        borderRadius: 10, 
        margin:10
    },
    imageContainer: {
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        shadowRadius:4,
        elevation: 5
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 8
    }
})

export default UploadImage
