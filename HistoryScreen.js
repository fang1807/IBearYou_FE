import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions,ScrollView}
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
import {setDetailResult} from './actions/Result';

import moment from 'moment';
import axios from 'axios';
import {API_URL} from './config'
import {connect} from 'react-redux';

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

class HistoryScreen extends Component {

 constructor(props) {
   super(props)
   this.state = {
     title:'',
     checkupSwitch:'',
     checked:0,
     user_name: [],
     allCard: {},
     listResultData: [],
     selectedCardData:[],
   };
  }
 componentDidMount(){
   console.log("componentDidmount HistoryScreen");
   console.log("componentDidmount HistoryScreen this.props.userdata : ",this.props.userdata);
   //this.loadUsername();
   this.loadAllResult();

   
 }


//all result 
loadAllResult=async()=>{
   console.log("load All Result");
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-result`;
     console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
          this.setState({"listResultData":res.data.data})
          console.log("this.state.listResultData ",this.state.listResultData)
        }
        else  if(res.data.message==="Fail") {
        } 

}

//get card แค่ id ที่เลือก
loadCard_ID=async(selectedResult)=>{
    console.log("load card id");
    const clientData =  {"user_id": this.props.userdata.user_id,"card_id": selectedResult};
    const endpoint = `${API_URL}/api/get-one-card`;
    console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:clientData})
    const {data,message}=res.data // Destructuring
    console.log("res.data ",data)
    console.log("message ",message)
       if(message==="Success"){
          console.log("Success")
         this.setState({"selectedCardData":data})
          console.log("this.state.selectedCardData ",this.state.selectedCardData) 

          this.props.dispatch(setDetailResult(data))

          this.props.navigation.navigate('resultHistory') 
        }
        else  if(message==="Fail") {
          console.log("Fail")
        } 

}
   setDetailResult = async(detailResult)=>{
   await this.props.dispatch(setDetailResult(detailResult))
 }

    selectedResult = (detailResult) => {
    console.log("detailResult ",detailResult)
    this.setDetailResult(detailResult)
    console.log ('selected detailResult success!')
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
     const {userdata,fetchcard,detailResult}= this.props
  return (
     <SafeAreaView style={[styles.container, containerStyle]}> 
 


 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Bg-Blue.png')}
    style={{width:560 ,height: 820,marginTop:-90,marginRight: 40}} />     
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
    style={{width:58.18, height: 58.18, marginTop: -300,marginRight: -385}} />     
 </View>
 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Sunflower.png')}
    style={{width:95.18, height: 95.18,marginTop: -220,marginLeft: -385}} />     
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

   

 
     <View style={{flexDirection: 'row' ,justifyContent: 'space-around', alignItems: 'center',marginTop:-1850}}>
 
      
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

<View style={{flex:1,marginTop:-135,marginBottom:350}}>

          <View style={styles.historyBox}>
              <Text style={{ color: '#E79995',fontSize: 30,fontWeight: "bold",marginLeft: 10,paddingLeft: 20,paddingRight: 20}}>History</Text>
         </View>

        <View style={{flex: 1, alignItems: 'center',marginRight:30,marginLeft:-150}}>  
       <Image source={require('./assets/images/Bear-small.png')}
            style={{width:90, height: 96,marginTop: -110,marginRight: 100}} />     
      </View>

       <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Sunflower.png')}
            style={{width:34.18, height: 34.18, marginTop: -120,marginRight: -160}} />     
      </View>

 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Sunflower.png')}
    style={{width:47.18, height: 47.18,marginTop: -120,marginLeft: -160}} />     
    </View>

<View style={{felx:1,height:400}}>
<ScrollView>

   {this.list_result()}

</ScrollView>
</View>

</View>

     </SafeAreaView>
  );
  }



  list_result() {
    return this.state.listResultData.map((data) => {
      return (

   <View style={styles.container}>

 <View style = {{marginBottom: -10,marginTop:-60}}>

<View> 
     <View style = {styles.button}>
     
     <View style={{flex:1,marginBottom:40,marginLeft:-100}}>
     <Image source={require('./assets/images/Frame.png')}
       style={styles.image}  />
     </View>

          <TouchableOpacity style={{flex:1}} activeOpacity={0.75}
           onPress={() => this.loadCard_ID(data.card_id)}  > 

      <View style={{marginTop:10,marginLeft:50}}>

         <View style={{flex:1, marginTop: -60,marginLeft: -40}}> 

            <Text style={styles.textDate}>{data.date}</Text>

            <Text style={styles.textCard}>{data.card_name}</Text>


         </View>
      </View>
      </TouchableOpacity>
     </View>
</View>
</View>
     </View>

       )
    })

}

  list_result_name() {
    return this.state.listResultData.map((data) => {
      return (
      
     <View >
            <Text style={styles.textCard}>{data.card_name}</Text>
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
 
       button: {
       width: 354,
       height: 90,
       borderRadius: 10,
       marginTop: 70,
       marginBottom:20,
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

   historyBox: {
      flexDirection: 'row', 
      alignItems: 'center',
      height: 60 ,
      width: 160, 
      backgroundColor: 'white',
      borderRadius: 10,
      borderBottomWidth: 3,
      borderColor : '#E79995' ,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity:  0.3,
      shadowRadius:5,
      elevation: 5,
      marginBottom:50,
      marginLeft:100,
},

    image: {
       width: 62,
       height: 81,
       resizeMode: 'center',
       marginTop: 0,
       marginLeft: -90,
       borderRadius: 3,
    },

    textDate: {
      color: '#AAAAAA',
      fontSize: 14,
      fontWeight: 'bold',
      fontFamily: 'Quark',
    },

    textCard: {
      color: '#E79995',
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'Quark',
    }
   
 
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
    detailResult:state.Questions.detailResult,
    
  }
}

export default connect(mapStateToProps)(HistoryScreen);
