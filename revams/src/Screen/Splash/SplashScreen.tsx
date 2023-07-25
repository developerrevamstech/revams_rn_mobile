import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react'

export default function HomeScreen({navigation}) { 
    const data = { websiteName: "John's Tech" }
  
    return ( 
      <View style={styles.container}> 
        <Button 
          title="Go to About" 
          onPress={() => navigation.navigate('HomeScreen')} 
        /> 
      </View> 
    );
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });