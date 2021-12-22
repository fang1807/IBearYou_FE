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

import moment from 'moment';
import axios from 'axios';
import {API_URL} from './config'
import {connect} from 'react-redux';
/*
const readQuestion=async()=>{
      try {
      const jsonString = fs.readFileSync("./Question.json");
      const question = JSON.parse(jsonString);
      return question;
    } catch (err) {
      console.log(err);
      return {};
    }
} */
/*********** Scoring 
m.onsave(async (m) => { 
                  const score = m.data.items.map((m,i)=>{
                    return {"subject":i+1,"score":m.value,"max":m.max} 
                     
                  })
                  //console.log("score: ",score)
                  const fillAll = await score.every((o)=>{
                    //console.log( ' parseInt(o.score) < parseInt(o.max)', parseInt(o.score) < parseInt(o.max))
                    //console.log( ' isNumber(parseInt(o.score))',  isNumber(parseInt(o.score)))
                    return  parseInt(o.score) <= parseInt(o.max) && isNumber(parseInt(o.score))

                  })
                 // console.log("fillAll : ",fillAll)
                 if(fillAll){
                   const scorereq = {}
                   //console.log('this.admin.admin_id: ',this.admin.admin_id)
                   scorereq.admin_id =this.admin.admin_id
                   scorereq.ideal_final ="ideal"
                   scorereq.pro_id = data.pro_id
                   //console.log('data ',data)
                   scorereq.score_json_ideal =JSON.stringify(score)
                   scorereq.score_json_final =""
                   //console.log('scorereq',scorereq)
                   const sum = score.reduce((ret,e)=>{
                     return ret + parseFloat(e.score)
                   },0)
                   scorereq.score_cal_ideal = sum
                   scorereq.score_cal_final = 0



 */

const switchOption = [
  {label: 'Check-up', value: 'Check-up'},
  {label: 'History', value: 'History'},
];
function   plus(val1,val2){
    return val1+val2
  }
function printVal(val){
   console.log(val)
}

class CheckupScreen extends Component {

 constructor(props) {
   super(props)
   this.state = {
     title:'',
     checkupSwitch:'',
     checked:0,
     user_name: [],
     allCard: {},
     listSoundData: [],
   };
  }
 componentDidMount(){
   console.log("componentDidmount CheckupScreen");
   console.log("componentDidmount CheckupScreen this.props.userdata : ",this.props.userdata);
   this.loadUsername();

   
 }
 async setfirstquestion(){
   	   
   //console.log(this.props.action)
   //console.log(Questions)
  // await this.props.dispatch(setQuestionId("40002"));
   //this.props.navigation.navigate('choices')
 }
   setSwitch = async()=> {

     //const {Question} =Questions 
     let Questions = []
     console.log("load questions");
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-question`; 
    const res = await axios.get(endpoint,{params:data}) 
    //console.log("res.data",res.data)
       if(res.data.message==="Success"){
              Questions= res.data.data
        }
        else  if(res.data.message==="Fail") {
        } 
       // console.log("Questions: ",Questions)
    //const no. ${i } questid ${e.questionId}`)
     //const newDetail = "รายละเอียด "+e.detail + " ขี้เกียจทำ"
     //return {"questionId":e.questionId,atty:"value", "newDetail":newDetail}
   //});
   //console.log(questionProcess)
  //fetchQuestions(2)
   //incrementAction(2) 
  const questionForUser=   Questions.map((q,i)=>{
    
     return {...q,"answer":"","score":[0]}

  }

  )

  //console.log("questionForUser: ",questionForUser)
   
   await this.props.dispatch(fetchQuestions(questionForUser));
   // console.log("this.props.questions ",this.props.questions)
   await this.props.dispatch(setQuestionId(Questions[0].questionId));
   //console.log("this.props.questionId ",this.props.questionId)
   const currentQ = Questions.find(e=>e.questionId === this.props.questionId )
   //console.log("currentQ " ,currentQ) 
   //printVal(Question[71])
   
//const currentId = Question.findIndex(e=>e.questionId === '45002')
//console.log('current element: ', Question[currentId])

//const nextId = currentId+1
//console.log('next element: ', Question[nextId] )

//const previousId = currentId-1
//console.log('previous element: ', Question[previousId])

   //const questionLength =  Question.length
   //console.log("questionLength : ",questionLength) 
   await this.props.dispatch(setCurrentQuestion(currentQ))
   //console.log("this.props.currentQuestion :",this.props.currentQuestion)
   
   this.props.navigation.navigate('Choices') 
  }




loadSound=async()=>{
   
   console.log("All_Sound");
    const userData ={} 
    const data =  {"user_id": this.props.userdata.user_id};;
    const endpoint = `${API_URL}/api/list-sound`;
     console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
          this.setState({"listSoundData":res.data.data})
          console.log("this.state.listSoundData ",this.state.listSoundData)
        }
        else  if(res.data.message==="Fail") {
        } 

}

  

 loadUsername=async()=>{
   console.log("list_username");
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-user_name`;
     console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
          this.setState({"user_name":res.data.data})
          console.log("this.state.user_name",this.state.user_name)
         //this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
        } 

}

  render() {
     const {userdata,fetchcard}= this.props
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

 
     <View style={{flexDirection: 'row' ,justifyContent: 'space-around', alignItems: 'center'}}>
 
      
    <SwitchSelector
      options={switchOption}
      initial={0}
      onPress={() => this.props.navigation.navigate('History')}
      textColor='#565656' 
      fontSize={16}
      selectedColor='#FFFFFF'
      buttonColor='#FE8150'
      backgroundColor='#FFE0D4'
      height = {37}

      style={{
      shadowColor: '#000000',
      shadowOffset: { width: 1, height: 4 },
      shadowOpacity:  0.20,
      shadowRadius:3,
      elevation: 2,
      width: 290,
      marginTop: -370,
}}
    />

</View>

<View style={{flex:1,marginTop:40,marginBottom:160}}>
{this.username()} 

      <View style={styles.Content}>
       <Text style={styles.textContent}>"แบบทดสอบนี้ จะพาเธอไปสำรวจตนเอง ถ้าหากเธอกำลังเผชิญปัญหา หมดกำลังใจ เรามาทำแบบทดสอบนี้กัน"</Text> 
     </View>
</View>

      <View style = {styles.button}>
          <TouchableOpacity
        style={{marginTop: 20}} activeOpacity={0.75}
        //onPress={() => this.startCheckUp()}
        onPress = {() => this.setSwitch()}
         >
        <View style = {styles.buttonStart}>
        <Text style = {styles.textStart}> Let's Get Started </Text>
        </View>
      </TouchableOpacity>
    
     </View>
     </SafeAreaView>
  );
  }



  
  username() {
    return this.state.user_name.map((data) => {
      return (
      <View style={styles.textHeaderStyle}>
       <Text style={styles.textHeader}>ยินดีต้อนรับ {data.user_name}</Text>
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
    currentCardID:state.Questions.currentCardID,
    fetchcard:state.Questions.fetchcard,
    
    
  }
}

export default connect(mapStateToProps)(CheckupScreen);
