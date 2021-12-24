import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions
       , TextInput,ScrollView}
       from 'react-native';
import axios from 'axios';
import CustomHeader from './CustomHeader';
import {API_URL} from './config'
import moment from 'moment';
import {connect} from 'react-redux';

class BadScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { badStoryData: []
      
    };
  }


async componentDidMount(){ 
  //this.loadHeal_Sentence();
  await this.loadBadScreen();
}

loadBadScreen=async()=>{ 
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-allbad`; 
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
          this.setState({"badStoryData":res.data.data})
          console.log("this.state.badStoryData ",this.state.badStoryData)
         //this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
        } 

}


 loadHeal_Sentence=async()=>{
   console.log("loadHeal_Sentence");
    const userData ={} 
    userData.user_id="27"
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-heal_sentence`;
     console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
         //this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
        } 

}




  render() {
    const {userdata,arr}= this.props
    return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor: '#EAD6A4' }}>

<View style={{flex: 1, alignItems: 'center'}}>  

       <Image source={require('./assets/images/Vector-Pink.png')}
    style={{width:552.17 ,height: 323.61,marginTop: -150}} /> 

    <View style={styles.date}>
  <Text style={styles.day}>ศ.</Text>
  <Text style={styles.number}>24</Text>
  <Text style={styles.month}>ธ.ค.</Text>
    </View> 

    <View style={{marginLeft: 101,marginTop: -85}}>
      <Text style={styles.topic}>ประโยคพิเศษจากน้องหมี</Text>
      <Text style={styles.sentence}>น้องหมีอยากให้กำลังใจเธอในทุก ๆ วันนะ
      ไม่ว่าจะเจออะไร จำไว้เสมอนะว่ายังมีวันพรุ่งนี้ที่สดใสรอเธออยู่เสมอนะ สู้ ๆ นะ</Text>
    </View>

 </View>



    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>

     <View style={{flex: 1,marginTop: -152}}>  
  <View style = {styles.Bad}>  
           <Text style = {styles.textType}>เรื่องราวที่ไม่ดี</Text>  
  </View>
  

<View style={{flex: 1}}>
<ScrollView>
     {this.badList()}
     </ScrollView>
</View>
      </View>
</View>

    </SafeAreaView>
    );
  }

  badList(){

   return this.state.badStoryData.map((data) => {
      if(String(data.bad).trim()!=="")
      return (

  
<View style={styles.container}>
      
      <View style = {{marginBottom: -90}}>

     
<View >
     
      <Text style={styles.textDate}>{data.date}</Text>

      <View style={styles.boxContent}>

    
      
      <Text style ={styles.textContent}>{data.bad}</Text>
      </View> 
</View> 

      </View> 

       </View>
       



    //   <View style = {{flex: 1}}>

    //   <Text style= {styles.textDate}>{data.date}</Text>
    //   <View style={styles.boxContent}>
    //     <Text style ={styles.textContent}>{data.bad}</Text>
    //   </View>
    // </View>
      )
    })

}
heal_sentence_List(){

   return this.state.heal_sentenceData.map((data) => {
      return (
      <View style={{flex: 1}}>
     <Text style={styles.sentence}>{data.heal_sentence}</Text>
      </View>
      )
    })

}
  
}

const styles = StyleSheet.create({

   container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        marginBottom: 60,
    },

    Bad:{
      width: 354,
      height: 47,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      borderLeftColor: '#FF4135',
      borderLeftWidth: 42,
      shadowColor: '#FF4135',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
      marginBottom: 20,
    },

    textType: {
      fontSize: 20,
      color:'#000000',
      fontFamily: 'Quark',
      fontWeight: 'bold',
      marginLeft: 20,
      marginTop: 11,
    },

    textDate: {
      fontSize: 14,
      color:'#000000',
      fontFamily: 'Quark',
      fontWeight: 'bold',
      marginBottom: 5
    },

    textContent: {
      fontSize: 16,
      color:'#000000',
      fontFamily: 'Quark',
      fontWeight: 'bold',
      padding: 10,
      textAlign: 'left',
      marginLeft: 40,
      flexWrap: 'wrap',
    },

    boxContent: {
      width: 354,
      height: 40,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#FF4135',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
      marginBottom: 30,
    },

    date: {
      width: 44,
      height: 88,
      backgroundColor: '#FFFFFF',
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomWidth: 30,
      borderBottomColor: '#FE8150',
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 1,
      marginTop: -135,
      marginLeft: -270,
    },

    day: {
      fontSize: 14,
      color:'#000000',
      fontFamily: 'Quark',
      marginBottom: 5,
      marginTop: 10,
      marginLeft: 14,
    },

    number: {
      fontSize: 24,
      color:'#000000',
      fontFamily: 'Quark',
      fontWeight: 'bold',
      marginBottom: 5,
      marginLeft: 6,
      marginTop: -5,
    },
    month: {
      fontSize: 18,
      color:'#FFFFFF',
      fontFamily: 'Quark',
      marginLeft: 12,
      marginTop: -5,
    },

      topic: {
      fontSize: 20,
      fontWeight: 'bold',
      color:'#FFFFFF',
      fontFamily: 'Quark',
      marginLeft: 12,
      marginTop: -5,
    },

      sentence: {
      fontSize: 16,
      color:'#FFFFFF',
      fontFamily: 'Quark',
      marginLeft: 0,
      marginTop: -10,
      flexWrap: 'wrap',
      padding:10,
    }


});

 function Component1 (props){
  return <View style={{flex: 1}}>
      <Text style={styles.textDate}>{props.date}</Text>
      <View style={styles.boxContent}>
        <Text style ={styles.textContent}>{props.text}</Text>
      </View>
</View>
}

const mapStateToProps=(state,props)=>{
  return{
 
   userdata:state.Questions.userdata, 
 }
}

export default connect (mapStateToProps)(BadScreen) ;