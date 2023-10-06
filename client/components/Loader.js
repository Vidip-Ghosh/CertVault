import React, { useEffect } from 'react';
import { View, ActivityIndicator,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoaderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Set a timeout to navigate to the next screen after 3 seconds (3000 milliseconds)
    const timeout = setTimeout(() => {
      navigation.navigate('Login'); // Replace 'NextScreen' with the name of your next screen
    }, 3000);

    // Clear the timeout when the component unmounts to prevent memory leaks
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 

     <ActivityIndicator size="large" color="#74F94D" />

     <Image
        source={{ uri: 'https://github-production-user-asset-6210df.s3.amazonaws.com/80088403/271822380-20112d8c-b644-46b6-ab3d-7da59a14aa5b.png' }}
        style={{ width: 150, height: 150,marginTop:10 }} // Adjust the width and height as needed
      />     
    </View>
  );
};

export default LoaderScreen;
