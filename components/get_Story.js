import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions
       , TextInput}
       from 'react-native';
import axios from 'axios';
import {API_URL} from './config'
import moment from 'moment';


function get_Story (props){
  return 
(<View style={{flex: 1}}>
      <Text style={styles.textDate}>Date</Text>
      <View style={styles.boxContent}>
        <TextInput style ={styles.textContent} />
      </View>
</View>
    );
}

export default get_Story;