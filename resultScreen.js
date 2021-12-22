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
  
 constructor(props) {
   super(props)
   this.state = {
          cardData: [],
          heal_sentenceData:[],
   };
  }
 

 componentDidMount(){
   console.log("componentDidmount Result");
   console.log("componentDidmount Result this.props.userdata : ",this.props.userdata);
   console.log("final_score : ",this.props.choiceScore);
   console.log("currentCardID : ",this.props.currentCardID);
   console.log("currentResultID : ",this.props.currentResultID);
   this.loadCardData();
   //this.loadHeal_Sentence();

 }

 loadCardData=async()=>{
    console.log("load Card");
    const clientData =  {"user_id": this.props.userdata.user_id,"card_id": this.props.currentResultID.card_id};
    const endpoint = `${API_URL}/api/get-one-card`;
    console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:clientData})
    const {data,message}=res.data // Destructuring
    console.log("res.data ",data)
    console.log("message ",message)
       if(message==="Success"){
          console.log("Success")
          this.setState({"cardData":data})
          console.log("this.state.cardData ",this.state.cardData) 

          //this.props.dispatch(setTodoListID(data))

          //this.props.navigation.navigate('EditTodoList') 
        }
        else  if(message==="Fail") {
          console.log("Fail")
        } 

}

  render() {
      const {userdata,fetchcard,currentResultID,currentCardID}= this.props
    return (
      <SafeAreaView style={{ flex: 1 }}>


   <View style={{flex: 1, alignItems: 'center'}}>
       <Image source={{uri: 'https://storage.cloud.google.com/card_ibearu/love-40.png'}}
    style={styles.image} />
 </View>

{this.card_description()} 

{this.card_cheer_up()}

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

card_cheer_up(){

   return this.state.cardData.map((data) => {
      return (
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
      textAlign: 'center'}}>Cheer-up</Text>
       <Text style={styles.textContent}>{data.cheer_up}</Text>
     </View>
    </View>
      )
    })

}

card_description(){

   return this.state.cardData.map((data) => {
      return (
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
      textAlign: 'center'}}>{data.card_name}</Text>
       <Text style={styles.textContent}>{data.card_description}</Text>
     </View>
  </View>
      )
    })

}

card_image(){

   return this.state.cardData.map((data) => {
      return (
  
<View >
    <View style={{flex: 1, alignItems: 'center'}}>
       <Image source={{uri: 'https://storage.cloud.google.com/card_ibearu/love-40.png'}}
    style={styles.image} />
 </View>
 </View>


      )
    })

}


}

const styles = StyleSheet.create({
    image :{
       width: 200.45,
       height: 268.49,
       resizeMode: 'center',
       marginTop:3,
       
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
 

export default connect(mapStateToProps)(resultScreen);
