import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import axios from 'axios';
import CustomHeader from './CustomHeader';
import {API_URL} from './config'
import moment from 'moment';
import {connect} from 'react-redux';

class resultScreen extends Component {
  

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
 <CustomHeader title='Result' navigation={this.props.navigation}/>
<View style={{flexDirection: 'row', height: 5}}>
     <View style={{flex: 1, alignItems: 'center'}}>
    
        <Image source={require('./assets/images/Tabloid2.png')}
     style={styles.image} /> 
    
  </View>
  </View>

    <View style={{flexDirection: 'row', alignItems: 'center',height: 154 ,width: 350
    , backgroundColor: 'white',borderRadius: 10,marginTop:300,marginLeft: 20, borderWidth: 2.5
    , borderColor : '#E79995' ,shadowColor: '#000000',
       shadowOffset: { width: 0, height: 5 },
       shadowOpacity:  0.3,
       shadowRadius:5,
       elevation: 5,
      }}>
<View style={{alignItems: 'center',paddingLeft: 30,paddingRight: 30}}>
<Text style={{ color: '#E79995',
      fontSize: 21,fontWeight: "bold",
      textAlign: 'center'}}>Spring will come soon</Text>
       <Text style={styles.textContent}>น้องหมีอยากให้คุณได้ลองคิดและทำตามคำแนะนำของน้องหมี น้องหมีเชื่อว่าคุณจะสามารถปลดหนี้ทั้งหมดได้อย่างแน่นอนน</Text>
     </View>

  </View>

   <View style={{flexDirection: 'row', alignItems: 'center',height: 154 ,width: 350
    , backgroundColor: 'white',borderRadius: 10,marginTop: 20,marginLeft: 20, borderWidth: 2.5
    , borderColor : '#E79995' ,shadowColor: '#000000',
       shadowOffset: { width: 0, height: 5 },
       shadowOpacity:  0.3,
       shadowRadius:5,
       elevation: 5,
      }}>
 <View style={{alignItems: 'center',paddingLeft: 30,paddingRight: 30}}>
<Text style={{ color: '#E79995',
      fontSize: 21,fontWeight: "bold",
      textAlign: 'center'}}>Spring will come soon</Text>
       <Text style={styles.textContent}>น้องหมีอยากให้คุณได้ลองคิดและทำตามคำแนะนำของน้องหมี น้องหมีเชื่อว่าคุณจะสามารถปลดหนี้ทั้งหมดได้อย่างแน่นอนน</Text>
     </View>
    </View>

<View style={{flex:1}}>
     <TouchableOpacity style={styles.button} activeOpacity ={0.75}
       // onPress = {() => }
     >
       <Text style={styles.textButton}>กลับไปหน้าแรก</Text>
     </TouchableOpacity>
</View>
 </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    image :{
       width: 200.45,
       height: 268.49,
       resizeMode: 'center',
       marginTop: 3,
       
    },

    textContent :{
      color: '#E79995',
      fontSize: 18,
      textAlign: 'center',
      fontFamily: 'Quark',
      marginTop: 5,
     
    },

    textButton:{
     color: '#FFFFFF',
     fontSize: 20,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     textAlign: 'center',
     
        
},

button:{
       borderRadius: 5,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#E79995',
       height: 41,
       width: 102,
       shadowColor: '#000000',
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity:  0.4,
       shadowRadius: 3,
       elevation: 2,
       margin: 60,
       marginBottom: -10,
      alignItems: 'center',
        
},

});
 

export default resultScreen;
