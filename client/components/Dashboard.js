import { ScrollView,StyleSheet,Text,View,Image,ImageBackground } from 'react-native';
import UploadImage from './UploadImage';
const Dashboard = () => {
    const date = new Date();
  return (
    <ScrollView style={styles.container}>
        <View>
            <ImageBackground source={require('../assets/TechBackground.jpeg')} style={styles.header}>
                <View style={styles.img}>
                    <Image style={styles.avatar} source={{uri: 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='}}></Image>
                    {/* <Button title="Upload Photo" onPress={handleUploadPhoto} /> */}
                </View>
            </ImageBackground>
            <View style={styles.bodyContent}>
                <Text style={styles.name}>ABC</Text>
                <Text style={styles.skill}>Web Developer | Open Source Contributor</Text>
            </View>
            <View>
                <UploadImage/>
            </View>
        </View>
        <View style={styles.footer}>
           <Text style={styles.footerText}> ©{date.getFullYear()} OpenSourceHackfest</Text>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'gray',
        height: 200,
        width: '100vw'
    },
    avatar: {
        height: 130,
        width: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor:'green',
        marginBottom: 10,
        position: 'absolute',
        marginTop: 130,
        flex: 1,
        alignItems: 'center'
    },
    img:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: '100vh'
    },
    name: {
        fontSize: 50,
        fontWeight: "bold",
        color: "gray"
    },
    bodyContent:{
        flex: 1,
        alignItems: 'center',
    },
    skill: {
        fontWeight: "normal",
        fontSize: 20,
        color: '#00BFFF'
    },
    footer: {
        backgroundColor: "blue",
        padding: 40,
        marginTop: 335
    },
    footerText: {
        color:"white",
        textAlign: 'center'

    }
})

export default Dashboard
