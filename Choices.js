import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
      , TouchableHighlight,TouchableOpacity, Dementions,TextInput}
      from 'react-native';
import { connect } from 'react-redux';
import {fetchQuestions,setCurrentQuestion} from './actions/Questions';
import {setQuestionId,incrementAction} from './actions/Questions';
import {setCurrentCardData} from './actions/Card';
import {setChoiceScore} from './actions/Questions';
import {fetchCards} from './actions/Card';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import axios from 'axios';
import CustomHeader from './CustomHeader';
import {API_URL} from './config'
import moment from 'moment'; 
 
 
class Choices extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      choiceData: [],
      allCard: [],
      
    };
  }

  componentDidMount(){
    console.log("score:", this.props.choiceScore)
this.props.dispatch(setChoiceScore(0))
  // console.log("componentDidmount ChoiceScreen this.props.userdata : ",this.props.userdata);
  //   console.log("this.props.fetchcard: ",this.props.fetchcard );
  //   console.log("currentCardID : ",this.props.currentCardID);
  //this.loadHeal_Sentence();
  //this.loadChoices();
  //this.loadQuestionType();
  this.loadQuestions();
  //this.loadQuestionnnaires();
  //this.loadQuestionnnaire_Question();
  this.loadAllCard();

}



loadChoices=async()=>{ 
     console.log("load choices");
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-choices`; 
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
          this.setState({"choiceData":res.data.data})
          console.log("this.state.choiceData ",this.state.choiceData)
         //this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
        } 

}

loadQuestionType=async()=>{ 
     console.log("load questiontype");
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-question_type`; 
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
          //this.setState({"choiceData":res.data.data})
          //console.log("this.state.choiceData ",this.state.choiceData)
         //this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
        } 

}

loadQuestions=async()=>{ 
     console.log("load questions");
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-question`; 
    const res = await axios.get(endpoint,{params:data}) 
    //console.log("res.data",res.data)
       if(res.data.message==="Success"){
          console.log("Success")
          //console.log("user_data: ",res.data.data)
          //this.setState({"choiceData":res.data.data})
          //console.log("this.state.choiceData ",this.state.choiceData)
         //this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
        } 

}

loadQuestionnnaires=async()=>{ 
     console.log("load questionnires");
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-questionnaires`; 
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
          //this.setState({"choiceData":res.data.data})
          //console.log("this.state.choiceData ",this.state.choiceData)
         //this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
        } 

}

loadQuestionnnaire_Question=async()=>{ 
     console.log("load questionnire question");
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-questionnaire_question`; 
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
          //this.setState({"choiceData":res.data.data})
          //console.log("this.state.choiceData ",this.state.choiceData)
         //this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
        } 
}



loadAllCard=async()=>{
   console.log("load all card");
    let Cards = []
    const clientData =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-card`;
    console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:clientData})
    const {data,message}=res.data 
    console.log("res.data ",data)
    console.log("message ",message)
       if(message==="Success"&& data){
         console.log("data.title: ",data)
          console.log("Success")
          
       this.setState({allCard:data})
       //console.log("this.state.allCard ",this.state.allCard) 

       this.props.dispatch(fetchCards(data))
         //this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
        } 
}

fetchCards=async(fetchcard)=>{  
     await this.props.dispatch(fetchCards(fetchcard));  
 }

 
 nextQuestion=async()=>{

   const currentIndex= this.props.questions.findIndex(e=>e.questionId==parseFloat(this.props.questionId))  

   if (currentIndex >= this.props.questions.length-1) return;
   const nextIndex =currentIndex+1;


   const question=this.props.questions[nextIndex-1];

   //const score_arr = this.props.questions.score
   //console.log("score arr:  ",score_arr)

  if(question.answer!=0){
  var score=this.props.choiceScore;

  if(isNaN(score)){
     score=0;
   //console.log("aaaaaaaaaaaaaaaaaaa :",score)
 }

/*
    const question = this.props.questions[nextIndex-1] 
    const score_arr = this.props.questions.score
if(question.answer!=0){
 var score = this.props.choiceScore;
 if(isNaN(score)){
   score=0;
 }
 */

 var newscoreint=parseFloat(question.choices[question.answer-1].choice_score,10);


 await this.props.dispatch(setChoiceScore(newscoreint+score))
}

   if(question.questionId==40003){
     
     if(question.answer==1){
       await this.props.dispatch(setCurrentQuestion(this.props.questions[nextIndex]))
       await this.props.dispatch(setQuestionId(this.props.questions[nextIndex].questionId)); 
     }

if(question.answer==2){
 
  const index= nextIndex+8;
  
await this.props.dispatch(setCurrentQuestion(this.props.questions[index])) 
await this.props.dispatch(setQuestionId(this.props.questions[index].questionId)); 
}
else if(question.answer==3){
    const index= nextIndex+16;
 await this.props.dispatch(setCurrentQuestion(this.props.questions[index])) 
 await this.props.dispatch(setQuestionId(this.props.questions[index].questionId)); 
}
else if(question.answer==4){
    const index= nextIndex+24;
 await this.props.dispatch(setCurrentQuestion(this.props.questions[index])) 
 await this.props.dispatch(setQuestionId(this.props.questions[index].questionId)); 
}
else if(question.answer==5){
   const index= nextIndex+34;
await this.props.dispatch(setCurrentQuestion(this.props.questions[index]))  
await this.props.dispatch(setQuestionId(this.props.questions[index].questionId)); 
}

   }
   else{


     await this.props.dispatch(setCurrentQuestion(this.props.questions[nextIndex]))
     await this.props.dispatch(setQuestionId(this.props.questions[nextIndex].questionId)); 
   }
   
    console.log(this.props.questionId)
 }

 submitQuestion=async()=>{ 
   //event.preventDefault();
   console.log("final score: ",this.props.choiceScore ) //all score
   console.log("fetch all card: ",this.props.fetchcard)
   console.log("******************************************")
    
    /*
    //ดึงการ์ด id 1
    const card = this.props.fetchcard;
    const card_result = card[31];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
    */

    /*
    const card_result = this.props.fetchcard.findIndex(e=>e.card_id == '1')
    console.log('Card Result: ', fetchcard(card_result))
    await this.props.dispatch(setCurrentCardData(card_result)); 
    */

    /*await this.props.dispatch(setCurrentCardData(currentCardID[card_result])); */
   
   if(this.props.choiceScore>=11&&this.props.choiceScore<=13.2){
    //ดึงการ์ด id 1
    const card = this.props.fetchcard;
    const card_result = card[0];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=13.3&&this.props.choiceScore<=15.5){
     //ดึงการ์ด id 2
    const card = this.props.fetchcard;
    const card_result = card[1];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   if(this.props.choiceScore>=20.2&&this.props.choiceScore<=22.4){
     //ดึงการ์ด id 3
    const card = this.props.fetchcard;
    const card_result = card[2];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result));  
   }
   else if(this.props.choiceScore>=22.5&&this.props.choiceScore<=24.7){
     //ดึงการ์ด id 4
    const card = this.props.fetchcard;
    const card_result = card[3];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result));  
   }
   if(this.props.choiceScore>=24.8&&this.props.choiceScore<=27){
     //ดึงการ์ด id 5
    const card = this.props.fetchcard;
    const card_result = card[4];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=15.6&&this.props.choiceScore<=17.8){
    //ดึงการ์ด id 6
    const card = this.props.fetchcard;
    const card_result = card[5];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   if(this.props.choiceScore>=31.7&&this.props.choiceScore<=33.9){
     //ดึงการ์ด id 7
    const card = this.props.fetchcard;
    const card_result = card[6];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result));  
   }
   else if(this.props.choiceScore>=27.1&&this.props.choiceScore<=29.3){
     //ดึงการ์ด id 8
    const card = this.props.fetchcard;
    const card_result = card[7];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result));  
   }
   if(this.props.choiceScore>=29.4&&this.props.choiceScore<=31.6){
     //ดึงการ์ด id 9
    const card = this.props.fetchcard;
    const card_result = card[8];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=17.9&&this.props.choiceScore<=20.1){
     //ดึงการ์ด id 10
    const card = this.props.fetchcard;
    const card_result = card[9];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result));  
   }
   if(this.props.choiceScore>=34&&this.props.choiceScore<=35){
     //ดึงการ์ด id 11
    const card = this.props.fetchcard;
    const card_result = card[10];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=50&&this.props.choiceScore<=51.8){
     //ดึงการ์ด id 12
    const card = this.props.fetchcard;
    const card_result = card[11];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   if(this.props.choiceScore>=55.7&&this.props.choiceScore<=57.5){
     //ดึงการ์ด id 13
    const card = this.props.fetchcard;
    const card_result = card[12];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=46.2&&this.props.choiceScore<=48){
     //ดึงการ์ด id 14
    const card = this.props.fetchcard;
    const card_result = card[13];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   if(this.props.choiceScore>=57.6&&this.props.choiceScore<=59.4){
     //ดึงการ์ด id 15
    const card = this.props.fetchcard;
    const card_result = card[14];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=42.4&&this.props.choiceScore<=44.2){
     //ดึงการ์ด id 16
    const card = this.props.fetchcard;
    const card_result = card[15];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result));  
   }
   if(this.props.choiceScore>=53.8&&this.props.choiceScore<=55.6){
     //ดึงการ์ด id 17
    const card = this.props.fetchcard;
    const card_result = card[16];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=51.9&&this.props.choiceScore<=53.7){
     //ดึงการ์ด id 18
    const card = this.props.fetchcard;
    const card_result = card[17];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   if(this.props.choiceScore>=59.5&&this.props.choiceScore<=60.5){
     //ดึงการ์ด id 19
    const card = this.props.fetchcard;
    const card_result = card[18];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result));  
   }
   else if(this.props.choiceScore>=48.1&&this.props.choiceScore<=49.9){
     //ดึงการ์ด id 20
    const card = this.props.fetchcard;
    const card_result = card[19];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result));  
   }
   if(this.props.choiceScore>=44.3&&this.props.choiceScore<=46.1){
     //ดึงการ์ด id 21
    const card = this.props.fetchcard;
    const card_result = card[20];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=40.5&&this.props.choiceScore<=42.3){
     //ดึงการ์ด id 22
    const card = this.props.fetchcard;
    const card_result = card[21];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   if(this.props.choiceScore>=72.1&&this.props.choiceScore<=73.6){
     //ดึงการ์ด id 23
    const card = this.props.fetchcard;
    const card_result = card[22];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=73.7&&this.props.choiceScore<=75.2){
     //ดึงการ์ด id 24
    const card = this.props.fetchcard;
    const card_result = card[23];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result));   
   }
   if(this.props.choiceScore>=78.5&&this.props.choiceScore<=80){
     //ดึงการ์ด id 25
    const card = this.props.fetchcard;
    const card_result = card[24];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=80.1&&this.props.choiceScore<=81.6){
     //ดึงการ์ด id 26
    const card = this.props.fetchcard;
    const card_result = card[25];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   if(this.props.choiceScore>=76.9&&this.props.choiceScore<=78.4){
     //ดึงการ์ด id 27
    const card = this.props.fetchcard;
    const card_result = card[26];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=81.7&&this.props.choiceScore<=83.2){
     //ดึงการ์ด id 28
    const card = this.props.fetchcard;
    const card_result = card[27];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result));  
   }
   if(this.props.choiceScore>=83.3&&this.props.choiceScore<=84.8){
     //ดึงการ์ด id 29
    const card = this.props.fetchcard;
    const card_result = card[28];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=88.1&&this.props.choiceScore<=89.6){
     //ดึงการ์ด id 30
    const card = this.props.fetchcard;
    const card_result = card[29];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   if(this.props.choiceScore>=75.3&&this.props.choiceScore<=76.8){
     //ดึงการ์ด id 31
    const card = this.props.fetchcard;
    const card_result = card[30];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=84.9&&this.props.choiceScore<=86.4){
     //ดึงการ์ด id 32
    const card = this.props.fetchcard;
    const card_result = card[31];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result));  
   }
   if(this.props.choiceScore>=86.5&&this.props.choiceScore<=88){
     //ดึงการ์ด id 33
    const card = this.props.fetchcard;
    const card_result = card[32];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result));  
   }
   else if(this.props.choiceScore>=89.7&&this.props.choiceScore<=91.2){
     //ดึงการ์ด id 34
    const card = this.props.fetchcard;
    const card_result = card[33];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   if(this.props.choiceScore>=70.5&&this.props.choiceScore<=72){
     //ดึงการ์ด id 35
    const card = this.props.fetchcard;
    const card_result = card[34];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=91.3&&this.props.choiceScore<=91.5){
     //ดึงการ์ด id 36
    const card = this.props.fetchcard;
    const card_result = card[35];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result));  
   }
   if(this.props.choiceScore>=285.3&&this.props.choiceScore<=294.5){
     //ดึงการ์ด id 37
    const card = this.props.fetchcard;
    const card_result = card[36];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=266.1&&this.props.choiceScore<=275.6){
     //ดึงการ์ด id 38
    const card = this.props.fetchcard;
    const card_result = card[37];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   if(this.props.choiceScore>=256.5&&this.props.choiceScore<=266){
     //ดึงการ์ด id 39
    const card = this.props.fetchcard;
    const card_result = card[38];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=275.7&&this.props.choiceScore<=285.2){
     //ดึงการ์ด id 40
    const card = this.props.fetchcard;
    const card_result = card[39];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
     
   }
   if(this.props.choiceScore>=408&&this.props.choiceScore<=412.9){
     //ดึงการ์ด id 41
    const card = this.props.fetchcard;
    const card_result = card[40];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result));  
   }
   else if(this.props.choiceScore>=413&&this.props.choiceScore<=417.9){
     //ดึงการ์ด id 42
    const card = this.props.fetchcard;
    const card_result = card[41];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result));  
   }
   if(this.props.choiceScore>=418&&this.props.choiceScore<=422.9){
     //ดึงการ์ด id 43
    const card = this.props.fetchcard;
    const card_result = card[42];
    console.log('Card Result: ', card_result)
   await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   else if(this.props.choiceScore>=423&&this.props.choiceScore<=427.5){
     //ดึงการ์ด id 44
    const card = this.props.fetchcard;
    const card_result = card[43];
    console.log('Card Result: ', card_result)
    await this.props.dispatch(setCurrentCardData(card_result)); 
   }
   const arr = this.props.questions.map((a,i)=>{
     return {"questionId":a.questionId,"answer":a.answer}
   })
   console.log("this.props.questions_answer : ",arr.length)
   this.props.navigation.navigate('Sentence')
 }

/*
   handleSubmit = ( submitQuestion) => {
        this.props.navigation.navigate('Sentence')
        //this.props.dispatch(setCurrentCardData(data))
   }*/

 setCurrentCardData=async(currentCardID)=>{  
     await this.props.dispatch(setCurrentCardData(currentCardID)); 
  }
 
 
  previousQuestion=async()=>{
    const firstpage=[41001,42001,43001,45001,45011]
  
    if(firstpage.includes(parseInt(this.props.questionId)) ){
      
       await this.props.dispatch(setQuestionId(41001)); 
    }
  
   const currentIndex = this.props.questions.findIndex(e=>e.questionId == this.props.questionId)
   
   if(currentIndex<1) return;
   const previousIndex =currentIndex-1
   await this.props.dispatch(setCurrentQuestion(this.props.questions[previousIndex])) //Question.currentQuestion
   console.log("this.props.questions[previousIndex]",this.props.questions[previousIndex])
   await this.props.dispatch(setQuestionId(this.props.questions[previousIndex].questionId)); 
 
 }
 setAnswerForType1=async(value)=>{
    const currentIndex = this.props.questions.findIndex(e=>e.questionId === this.props.currentQuestion.questionId)
    const currentQ= {...this.props.currentQuestion}
          currentQ.answer= value
     //await this.props.dispatch(setCurrentQuestion(currentQ))
     let mQuestions =this.props.questions
     mQuestions[currentIndex]=currentQ
     await this.props.dispatch(fetchQuestions(mQuestions));
     //console.log("this.props.questions ",this.props.questions)
 
 }

 


   RadioGroup(props){
     const index = parseInt(props.answer)>0?parseInt(props.answer)-1:-1
     const choice_props =  props.questionType==="1"? props.choices.map((e)=>{
  return {...e,label:e.desc,value:parseInt(e.seq)} }) : {}
  const radio_props = props.choices
/*   return <RadioForm
 formHorizontal={true}
 animation={true}
>
  {
   radio_props.map((obj, i) => (
     <RadioButton labelHorizontal={true} key={i} >
     
       <RadioButtonInput
         obj={obj}
         index={i}
         isSelected={obj.value === i+1}
         onPress={(value) => {this.setAnswerForType1(value)}}
       />
       <RadioButtonLabel
         obj={obj}
         index={i}
         labelHorizontal={false}
         onPress={(value) => {this.setAnswerForType1(value)}} 
       />
     </RadioButton>
   ))
 } 
</RadioForm> */
 
    return  <RadioForm
         radio_props={choice_props}
         initial={index}
         onPress={(value) => {this.setAnswerForType1(value)}}
         buttonColor={'#E79995'}
         buttonWrapStyle={{marginLeft: 10}}
         labelStyle={{fontSize: 18, color: '#000000',  fontFamily: 'Quark',}}
         style={styles.radioButton}
       /> 
   }
 render() {

let {questions,questionId,currentQuestion,userdata,currentCardID,choiceScore,fetchcard} = this.props
 
/*const choice_props = (typeof(currentQuestion.choices)!=='undefined' &&currentQuestion.choices!==null) ? currentQuestion.choices.map((e)=>{
  return {...e,label:e.desc,value:parseInt(e.seq)}
}) : {} */
const choice_props =  currentQuestion.questionType==="1"? currentQuestion.choices.map((e)=>{
  return {...e,label:e.desc,value:parseInt(e.seq)}
}) : {}
 
 
   return (
<SafeAreaView  style={[styles.container, containerStyle]}>
  
<View style={{flex: 1, alignItems: 'center',}}>
     <Image source={require('./assets/images/Bg-Blue.png')}
  style={{width:568 ,height: 580,marginTop:200,marginRight: 40}} />   
</View>
<View style={{flex: 1, alignItems: 'center'}}>
     <Image source={require('./assets/images/Vector-Pink.png')}
  style={{width:552.17 ,height: 323.61,marginTop: -150}} />
  <View style={styles.date}>
  <Text style={styles.day}>ศ.</Text>
  <Text style={styles.number}>24</Text>
  <Text style={styles.month}>ธ.ค.</Text>
  </View>
  <View style={{marginLeft: 100,marginTop: -85}}>
    <Text style={styles.topic}>ประโยคพิเศษประจำวันจากน้องหมี </Text>
    <Text style={styles.sentence}>"มะม่วงยังสุก เราจะทุกข์ทำไม"</Text>
  </View>
</View>
<View style={{flex: 1, alignItems: 'center',}}>
     <Image source={require('./assets/images/Sunflower.png')}
  style={{width:90.18, height: 90.18, marginTop:552,marginRight: 385}} />   
</View>
<View style={{flex: 1, alignItems: 'center',}}>
     <Image source={require('./assets/images/Sunflower.png')}
  style={{width:58.18, height: 58.18, marginTop: 120,marginRight: 170}} />   
</View>
<View style={{flex: 1, alignItems: 'center',}}>
     <Image source={require('./assets/images/Sunflower.png')}
  style={{width:58.18, height: 58.18,marginTop: 310,marginLeft: 385}} />   
  </View>
   <View style={{flex: 1, alignItems: 'center',}}>
     <Image source={require('./assets/images/Star-4.png')}
  style={{width:40.33, height: 40.33,marginTop: 500}} />   
</View>
   <View style={{flex: 1, alignItems: 'center',}}>
     <Image source={require('./assets/images/Star-5.png')}
  style={{width:28.3, height: 28.3,marginTop: 400,marginRight: 350}} />   
</View>


<View style={{flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}}>
{currentQuestion.questionType==="1" &&
   <View >
   <View style={{flex:1,marginTop: 80,marginLeft: 45}}>
<View style={styles.question}>
     <Text style={styles.textQuestion} >{currentQuestion.detail}  </Text>
</View>
</View>
    <View style={{height: 200,width: 353, backgroundColor: '#FFFFFF',borderRadius: 10,marginTop: 200,paddingTop: 20,marginBottom: 60,marginLeft: 45}}>
   {this.RadioGroup(currentQuestion)}
    </View>
 
    <View style={{flex: 1,flexDirection: 'row' , justifyContent: 'space-between',alignItems: 'flex-end',marginBottom: 30}}>
<TouchableOpacity style={styles.button} activeOpacity ={0.75} onPress = {() => this.previousQuestion()}>
     <Text style={styles.textButton}>ย้อนกลับ</Text>
</TouchableOpacity>
 
   <TouchableOpacity style={styles.button} activeOpacity ={0.75}
      onPress = {() => this.nextQuestion()}
   >
     <Text style={styles.textButton}>ถัดไป</Text>
   </TouchableOpacity>
 
</View>
   </View>
 
  
 
  
}
{currentQuestion.questionType==="2" &&
   <View >
       
 <View style={{flex:1,marginTop: -20,marginLeft: 30}}>
<View style={styles.questionM}>
     <Text style={styles.textQuestionM}> {currentQuestion.detail} </Text>
</View>
</View>
   <View style={{flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}}>
      <View>
      <TextInput
      style={styles.input}
       placeholder="บอกความในใจของเธอมาได้เลย..."
       placeholderTextColor="#000000"
       autoCapitalize='none'
        
    />
    </View>
 </View>
 
 <View style={{flex: 1,flexDirection: 'row' , justifyContent: 'space-between',alignItems: 'flex-end',marginBottom: 5}}>
<TouchableOpacity style={styles.button} activeOpacity ={0.75} onPress = {() => this.previousQuestion()}>
     <Text style={styles.textButton}>ย้อนกลับ</Text>
</TouchableOpacity>
 
   <TouchableOpacity style={styles.button} activeOpacity ={0.75}
      onPress = {() => this.nextQuestion()}
   >
     <Text style={styles.textButton}>ถัดไป</Text>
   </TouchableOpacity>
 
</View>
   </View>
 
 
}
{currentQuestion.questionType==="3" &&
   <View >
       
<View style={{flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center',marginTop: 300}}>
  <View style= {styles.containerS}>
      <Text style={styles.textS}>{currentQuestion.detail} </Text>
  </View>
</View>
 
 
<View style={{flex: 1,flexDirection: 'row' , justifyContent: 'space-between',alignItems: 'flex-end',marginBottom: 100,marginLeft:-10}}>
<TouchableOpacity style={styles.button} activeOpacity ={0.75} onPress = {() => this.previousQuestion()}>
     <Text style={styles.textButton}>ย้อนกลับ</Text>
</TouchableOpacity>
 
<View style={{flex:1}}>
     <TouchableOpacity style={styles.button_submit} activeOpacity ={0.75}
      onPress = {() => this.submitQuestion()}>
     <Text style={styles.textButton}>ส่งคำตอบ</Text>
   </TouchableOpacity>
</View>
 
</View>
   </View>
}
</View>
 
 
 
  </SafeAreaView>


 
 
 
   );
}

choice_List(){

   return this.state.listSoundData.map((data,key) => {
      return (
   
          
         <View key={key}>
            {this.state.checked == key ?
     <View>
          <View style={styles.choices_Box_Click}>
                <TouchableOpacity activeOpacity={1} onPress={(value) => {this.setAnswerForType1(value)}}>
                    <Image source={require('./assets/images/radioBt-2.png')}
                           style={{width:23,height:23,marginTop: 10,marginLeft:280}} />      
                </TouchableOpacity>
                <Text style={styles.textChoices}>wwwww</Text>
          </View>              
   </View>
                :
        <View>
          <View style={styles.choices_Box}>
                <TouchableOpacity onPress={()=>{this.setState({checked: key})}} activeOpacity={1}>
                    <Image source={require('./assets/images/radioBt-1.png')}
                           style={{width:23,height:23,marginTop: 10,marginLeft:280}} />      
                </TouchableOpacity>
                <Text style={styles.textChoices}>wwwww</Text>
          </View>   
      </View>
            }
        </View>
 
      
      )
    })

  }
  
  card_List(){

   return this.state.allCard.map((data) => {
      return (
   
          
         <View >
            <Text>{data.card_name}</Text>
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
      marginBottom: 20,
     alignItems: 'center',
     
      
},

button_submit:{
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
      marginBottom: 20,
     alignItems: 'center',
     
      
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
     marginLeft: 16,
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
     fontSize: 18,
     color:'#FFFFFF',
     fontFamily: 'Quark',
     marginLeft: 12,
     marginTop: -3,
   },
 
   question: {
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      height: 127,
      width: 355,
      shadowColor: '#E79995',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
     marginTop: 100
 
   },
 
   textQuestion: {
     fontSize: 22,
     color:'#000000',
     fontFamily: 'Quark',
     fontWeight: 'bold',
     textAlign: 'center',
     paddingLeft: 10,
     paddingRight: 10,
   },
 
   textChoices: {
     fontSize: 18,
     color:'#000000',
     fontFamily: 'Quark',
     marginLeft: 20,
   },
 
   radioButton: {
     marginLeft: 15,
   },
 
   input:{
   height: 250,
   width : 320,
   margin: 30,
   borderWidth: 1,
   paddingLeft : 15,
   paddingBottom: 200,
   fontSize : 18,
   fontFamily: 'Quark',
   backgroundColor : '#FFFFFF',
   borderRadius: 10,
   borderColor : '#FFFFFF' ,
   shadowColor: '#E79995',
   shadowOffset: { width: 0, height: 3 },
   shadowOpacity:  5,
   shadowRadius:2,
   elevation: 1,
   marginBottom: -50,
   marginTop: 225,
   },
 
  questionM: {
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      height: 127,
      width: 355,
      shadowColor: '#E79995',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
      marginTop: 205,
      marginLeft: 15
     
 
   },
 
   textQuestionM: {
     fontSize: 20,
     color:'#000000',
     fontFamily: 'Quark',
     fontWeight: 'bold',
     textAlign: 'center',
   },
 
textS:{
    color: '000000',
    fontSize: 20,
    fontFamily: 'Quark',
    fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'wrap',
    paddingLeft: 20,
    paddingRight: 20,
   
      
},
 
containerS: {
      height: 116,
      width: 298,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 2,
      margin: 60,
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
   currentCardID:state.Questions.currentCardID,
 }
}
export default connect (mapStateToProps) (Choices);
 
