import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions
       , TextInput,ScrollView}
       from 'react-native';
import axios from 'axios';
import CustomHeader from './CustomHeader';
import {API_URL} from './config';
import moment from 'moment';
import {connect} from 'react-redux';

import {fetchGoodStory} from './actions/Diary';
import {fetchHeal_Sentence} from './actions/Heal_Sentence';

class GoodScreen extends Component {
    constructor(props) {
       super(props);
       this.state = {goodStoryData: [],
                     heal_sentenceData:[],
       }
   }

componentDidMount(){
  console.log("componentDidmount GoodScreen this.props.userdata : ",this.props.userdata);


  this.loadGoodScreen();
  console.log("componentDidMount_loadGoodScreen: ")

    
  this.loadHeal_Sentence();

}

loadGoodScreen=async()=>{
   console.log("loadGoodScreen"); 
 const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-allgood`;
     console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
          this.setState({"goodStoryData":res.data.data})
          console.log("this.state.goodStoryData ",this.state.goodStoryData)
          //this.fetchGoodStory(res.data.data)
        }
        else  if(res.data.message==="Fail") {
        } 

}

 loadHeal_Sentence=async()=>{
   console.log("loadHeal_Sentence");
    const userData ={} 
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-heal_sentence`;
     console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
          this.setState({"heal_sentenceData":res.data.data})
          console.log("this.state.heal_sentenceData ",this.state.heal_sentenceData) 
         //this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
        } 

}





  render() {
    const {userdata,goodstory}= this.props
    return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor: '#EAD6A4' }}>

  <View style={{flex: 1, alignItems: 'center'}}>  

       <Image source={require('./assets/images/Vector-Pink.png')}
    style={{width:552.17 ,height: 323.61,marginTop: -150}} /> 

    <View style={styles.date}>
  <Text style={styles.day}>{moment().format('ddd')}</Text>
  <Text style={styles.number}>{moment().format('Do')}</Text>
  <Text style={styles.month}>{moment().format('MMM')}</Text>
    </View> 

    <View style={{marginLeft: 101,marginTop: -85}}>
      <Text style={styles.topic}>???????????????????????????????????????????????????????????????</Text>
      <Text style={styles.sentence}>??????????????????????????????????????????????????????????????????????????????????????? ??? ???????????????
      ????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????? ??? ??????</Text>
    </View>

 </View>

{/* <View>
  <View style={{flex: 1, alignItems : 'flex-start',marginTop: -239}}>
      <CustomHeader title='goodStory' navigation={this.props.navigation}/>
  </View>
</View> */}

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  
  <View style={{flex: 1,marginTop: -152}}>  
  <View style = {styles.Good}>  
           <Text style = {styles.textType}>??????????????????????????????????????????</Text>  
  </View>
  
 <ScrollView>
{this.goodList()}
</ScrollView>
      
</View>
  
</View>
      

{/* <View style = {{flex: 1}}>
   <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/shell-2.png')}
    style={{width:35 ,height:29,marginTop:-40,marginLeft:500}} />     
 </View>

  <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/crab.png')}
    style={{width:43 ,height:25,marginTop:-250,marginRight:480}} />     
 </View>




</View> */}

    </SafeAreaView>
    );
  }
  goodList(){

   return this.state.goodStoryData.map((data) => {
     if(String(data.good).trim()!=="")
      return (

  
<View style={styles.container}>
      
      <View style = {{marginBottom: -90}}>

     
<View >
     
      <Text style={styles.textDate}>{data.date}</Text>

      <View style={styles.boxContent}>

    
      
      <Text style ={styles.textContent}>{data.good}</Text>
      </View> 
</View> 

      </View> 

       </View>
       
      

      

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

} //end of component


const styles = StyleSheet.create({

  container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        marginBottom: 60,
    },

    Good:{
      width: 354,
      height: 47,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      borderLeftColor: '#61A768',
      borderLeftWidth: 42,
      shadowColor: '#61A768',
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
      textAlign: 'left',
      marginLeft: 40,
      marginTop: 10,
      flexWrap: 'wrap',

    },

    boxContent: {
      width: 354,
      height: 40,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#61A768',
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
      marginTop: -140,
      marginLeft: -270,
    },

    day: {
      fontSize: 14,
      color:'#000000',
      fontFamily: 'Quark',
      marginBottom: 5,
      marginTop: 10,
      marginLeft: 10,
    },

    number: {
      fontSize: 18,
      color:'#000000',
      fontFamily: 'Quark',
      fontWeight: 'bold',
      marginBottom: 5,
      marginLeft: 6,
      marginTop: -2,
    },
    month: {
      fontSize: 18,
      color:'#FFFFFF',
      fontFamily: 'Quark',
      marginLeft: 8,
      marginTop: 0,
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
      fontSize: 18,
      color:'#FFFFFF',
      fontFamily: 'Quark',
      marginTop: -3,
      flexWrap: 'wrap',
      paddingLeft: 18,
      paddingRight: 18,
      marginLeft:-5
    }


});

function Good_Box (props){
  return <View style={{flex: 1}}>
      <View>
      <Text style={styles.textDate}>{props.userdata.email}</Text>
      </View>
      <View style={styles.boxContent}>
        <Text style ={styles.textContent}>text</Text>
      </View>
</View>
}

 

const mapStateToProps=(state,props)=>{
  return{
 
   userdata:state.Questions.userdata,
   goodstory:state.Questions.goodstory,  
 }
}

export default connect (mapStateToProps)(GoodScreen);