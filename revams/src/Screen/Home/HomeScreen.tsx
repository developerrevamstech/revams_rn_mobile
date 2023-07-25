import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function AboutScreen({route}) { 
    let dataObj = route.params
  
    return ( 
      <View style={styles.container}> 
        <Text style={styles.paragraph}> 
          This is the About Screen of HELLO WORLD!!! 
        </Text> 
      </View> 
    );
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    paragraph: {
        color: "#FF0000",
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