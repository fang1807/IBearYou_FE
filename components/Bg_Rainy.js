import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions
       ,TextInput,KeyboardAvoidingView} 
       from 'react-native';

class Bg_Rainy extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
       <SafeAreaView style={{ flex: 1,backgroundColor: '#EAD6A4' }}>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('../assets/images/rainy.png')}
    style={{width:392 ,height:294,marginTop: -50}} />     
 </View>
 <View style={styles.boxContent}>
        <Text style={styles.textContent}>วันนี้เธอรู้สึกอย่างไร</Text>
</View>
        </View>
      </SafeAreaView> 
    );
  }
}

const styles = StyleSheet.create({

    boxContent:{
      width: 255,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      marginBottom: 610
    },

    textContent: {
     color: '#000000',
     fontSize: 24,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     textAlign: 'center',
     marginTop: 10,
    }
    });

export default Bg_Rainy;
