import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';
import BgQuiz from './components/BgQuiz';
import SwitchSelector from "react-native-switch-selector";
import CustomHeader from './CustomHeader';
//const fs = require('fs');
import Questions from './Json/Questions'
import {fetchQuestions,setCurrentQuestion} from './actions/Questions';
import {setQuestionId,incrementAction} from './actions/Questions';
import {setChoiceScore} from './actions/Questions';
import {setCurrentCardData} from './actions/Card';
import {fetchCards} from './actions/Card';
import {setCurrentResult} from './actions/Result'

import moment from 'moment';
import axios from 'axios';
import {API_URL} from './config'
import {connect} from 'react-redux';


class Sentence extends Component {

 constructor(props) {
   super(props)
   this.state = {
     title:'',
     checkupSwitch:'',
     checked:0,
     user_name: [],
     allCard: {},
     listSentenceData: [],
     cardResult: [],
     resultData:[],
   };
  }
 componentDidMount(){
   console.log("componentDidmount Heal_Sentence");
   console.log("componentDidmount Heal_Sentence this.props.userdata : ",this.props.userdata);
   console.log("final_score : ",this.props.choiceScore);
   console.log("currentCardID : ",this.props.currentCardID);
   this.loadHeal_Sentence();

 }

handleSubmit = async(event) => {
    //event.preventDefault();
    console.log("handleSubmit")

    const resultData = {}
    resultData.user_id= this.props.userdata.user_id
    resultData.final_score= this.props.choiceScore
    resultData.card_id = this.props.currentCardID.card_id

    axios.post(API_URL+'/api/result', resultData)
      .then(res => { 
          console.log(res.data);
        if(res.data.message==="Success"){
         console.log("Success")
         this.setState({"resultData":resultData})
         console.log("this.state.resultData ",this.state.resultData)
         this.props.dispatch(setCurrentResult(resultData))
        this.props.navigation.navigate('Result')

        }
        else  if(res.data.message==="create fail") {
          console.log("create fail")
        }
      })
  }

   setCurrentResult = async(currentResultID)=>{
  await this.props.dispatch(setCurrentResult(currentResultID))
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
          this.setState({"listSentenceData":res.data.data})
          console.log("this.state.listSentenceData ",this.state.listSentenceData) 
         //this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
        } 

}


  render() {
     const {userdata,fetchcard,currentResultID,currentCardID}= this.props
  return (
     <SafeAreaView style={[styles.container, containerStyle]}> 
 


 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Bg-Blue.png')}
    style={{width:568 ,height: 580,marginTop:80,marginRight: 40}} />     
 </View>
    
<View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/star-3.png')}
    style={{width:380, height: 134,marginTop: -10,marginRight: 0}} />     
 </View>


<View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Sunflower.png')}
    style={{width:90.18, height: 90.18, marginTop:552,marginRight: 385}} />     
 </View>
 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Sunflower.png')}
    style={{width:58.18, height: 58.18, marginTop: 70,marginRight: 110}} />     
 </View>
 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Sunflower.png')}
    style={{width:58.18, height: 58.18,marginTop: 310,marginLeft: 385}} />     
    </View>

     <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Star-4.png')}
    style={{width:40.33, height: 40.33,marginTop: 400,marginRight:150}} />     
 </View>
     <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Star-5.png')}
    style={{width:28.3, height: 28.3,marginTop: 320,marginRight: 350}} />     
 </View>
     <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Star-7.png')}
    style={{width:18.38, height: 18.38,marginTop: 62,marginLeft: 300}} />     
 </View>
     <View style={{flex: 1, alignItems: 'center'}}>  
       <Image source={require('./assets/images/Star-8.png')}
    style={{width:34.3, height: 34.3,marginTop: -15,marginLeft: -10}} />     
 </View>
     <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Star-9.png')}
    style={{width:21.68, height: 21.68,marginTop: -25,marginRight: 320}} />     
 </View>

      <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Bear-Cupid.png')}
    style={{width:145.52, height: 155.24,marginTop: 190,marginRight: -280}} />     
 </View>

{this.List_heal_sentence()}

      <View style = {styles.button}>
          <TouchableOpacity
        style={{marginTop: 20}} activeOpacity={0.75}
        onPress = {() => this.handleSubmit()}
         >
        <View style = {styles.buttonStart}>
        <Text style = {styles.textStart}>ถัดไป</Text>
        </View>
      </TouchableOpacity>
    
     </View>
     </SafeAreaView>
  );
  }



  
  List_heal_sentence() {
    return this.state.listSentenceData.map((data) => {
      return (
      <View style={{flex:1,marginTop:40,marginBottom:160}}>
      <View style={styles.Content}>
       <Text style={styles.textContent}>{data.heal_sentence}</Text> 
     </View>
    </View>
       )
    })

}

}
const containerStyle = {
       backgroundColor: '#4C6FAF',
       width: '100%',
       height: '100%',
       flex:1 ,
       flexDirection: 'column' ,
          
}
 
const styles = StyleSheet.create({
  
  container: {  
     
       alignItems: 'center',
       justifyContent: 'center' 
        
  },
 
 textHeaderStyle: {
   alignItems: 'flex-start',

 },
 
 textHeader: {
       color: '#E79995',
       fontSize: 36,
       marginTop: -100,
       marginBottom:-200,
       fontFamily: 'Quark',
       fontWeight: 'bold',
       
      
      
 
   },
 textContent: {
       color: '#000000',
       fontSize: 18,
       paddingLeft: '5%',
       paddingRight: '5%',
       marginTop: 60 ,
       fontFamily: 'Quark',

   },

  Content: {
      alignItems: 'center',
      width: 350,
      height: 160,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#E79995',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
      marginTop: -45,
      marginBottom: 70
 
      

   },


 image: {
       width: 206,
       height: 263,
       resizeMode: 'center',
       shadowColor: '#000000',
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity:  0.3,
       shadowRadius:5,
       elevation: 5,
      
      
   },
 
       button: {
         flex: 1,
       marginTop: 150,
       alignItems: 'center',
       justifyContent: 'center',
       shadowColor: "black",
       shadowOffset: { width: 0, height: 4 },
       shadowRadius: 3,
       shadowOpacity: 0.25,
       elevation: 3,
      
       
   },
 
   buttonStart: {
       borderRadius: 5,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#E79995',
       height: 41,
       width: 278,
       marginTop: -83,
       overflow: "hidden",
      
      
   },
 
   textStart: {
     color: '#FFFFFF',
     fontSize: 20,
     fontFamily: 'Quark',
     fontWeight: 'bold',
   },

   choices_Box_Click: {
      alignItems: 'center',
      width: 350,
      height: 45,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#E79995',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
      marginTop: -45,
      marginBottom: 70
   },

      choices_Box: {
      alignItems: 'center',
      width: 350,
      height: 45,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      marginTop: -45,
      marginBottom: 70
   },

    textChoices: {
     color: '#000000',
     fontSize: 18,
     fontFamily: 'Quark',
     marginTop: -33,
     marginLeft:-250,
     flexWrap: 'wrap',
     padding: 10,
   },
   
 
});
const mapStateToProps=(state,props)=>{
  
  return{
    questions:state.Questions.questions,
    questionId:state.Questions.questionId,
    currentQuestion:state.Questions.currentQuestion,
    userdata:state.Questions.userdata,
    choiceScore:state.Questions.choiceScore,
    fetchcard:state.Questions.fetchcard,
    currentResultID:state.Questions.currentResultID,
    currentCardID:state.Questions.currentCardID,
    
    
  }
}

export default connect(mapStateToProps)(Sentence);
