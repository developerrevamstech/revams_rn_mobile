import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function AboutScreen({route}) { 
    let dataObj = route.params
  
    return ( 
        <SafeAreaProvider>
            <View style={styles.container}> 
                <Text style={styles.paragraph}> 
                This is the About Screen of HELLO WORLD!!! 
                </Text> 
            </View> 
        </SafeAreaProvider>
    );
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 0,
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