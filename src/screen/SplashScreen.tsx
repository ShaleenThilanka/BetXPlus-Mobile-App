import React, { FC, useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { moderateScale } from "../utils/Metrics";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splashscreen: FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.ipregistry.co/?key=i5lo5fas70dxjo18');
        const calling_code = response.data['location']['country']['calling_code'];
        if (calling_code) {
          await AsyncStorage.setItem('callingCode', "+" + calling_code);
        }
      } catch (error) {
        console.error('Error fetching calling code:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../src/asstes/s.jpg')}
        resizeMode="cover"
      >
        <View style={styles.textContainer}>
          <Text style={[styles.title, styles.font]}>Level Up Your</Text>
          <Text style={[styles.title, styles.font]}>Wallet</Text>
        </View>
        <Image
          source={require('../../src/asstes/logo.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </ImageBackground>
      <Text style={styles.version}>Version : 1.0.0</Text>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: moderateScale(26),
    textAlign: 'center',
  },
  font: {
    fontFamily: "Open Sans",
  },
  logo: {
    width: '25%',
    height: '25%',
    alignSelf: 'center',
    bottom: 50
  },
  version: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    color: 'white',
  },
});
