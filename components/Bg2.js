import React, {Component} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
 
 
export default function Bg2() {
  
    return (
      <View style={styles.container}>
       
      <View style= {styles.circle1} ></View>
      <View style= {styles.circle2} ></View>
      <View style= {styles.circle3} ></View>
      <View style= {styles.circle4} ></View>
      <View style= {styles.circle5} ></View>  
 
       </View>
 
 
 
 
   );
 }
 
const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       paddingTop: 32,
      
       },
 
   
 
   circle1: {
       backgroundColor: '#FDF1F3',
       height: 150,
       width: 150, 
       borderRadius: 100,
       marginLeft: 320,
       marginTop: 36,
   },
 
 
   circle2: {
       backgroundColor: '#F2EEF2',
       height: 326,
       width: 326,
       borderRadius: 200,
       marginRight: 330,
       marginTop: 1,
   },
 
    circle3: {
       backgroundColor: '#FAF1F1',
       height: 46,
       width: 46,
       borderRadius: 200,
       marginLeft: 240,
       marginTop: -110,
   },
 
     circle4: {
       backgroundColor: '#FEFAF5',
       height: 30,
       width: 30,
       borderRadius: 200,
       marginRight: 200,
       marginTop: 130,
   },
 
     circle5: {
       backgroundColor: '#FEF8F4',
       height: 170,
       width: 170,
       borderRadius: 200,
       marginLeft: 160,
       marginTop: -30,
   },
 
 
 
 
})
 
 
