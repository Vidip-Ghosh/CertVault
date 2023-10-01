import React from 'react'
import { ScrollView,StyleSheet,Text,View,Image,Dimensions } from 'react-native';
import HeroSection from './HeroSection';
import About from './About';
import Features from './Features';

const Home = () => {
  return (
    <View>
      <HeroSection/>
      <About/>
      <Features/>
    </View>
  )
}

export default Home
