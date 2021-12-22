import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions
       , TextInput}
       from 'react-native';
import moment from 'moment';
import axios from 'axios';
import CustomHeader from './CustomHeader';
import {API_URL} from './config'
import {connect} from 'react-redux';
import {setSelectedDiaryData} from './actions/Diary'
import {setCurrentDiaryID,setCurrentDate} from './actions/Diary'

class DiaryHistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 componentDidMount(){
  console.log("componentDidmount BadScreen this.props.userdata : ",this.props.userdata);
  console.log("this,props.selectedDiaryData",this.props.selectedDiaryData)
  //this.loadHistory_Diary();
}

loadHistory_Diary=async()=>{
   console.log("historyDiaryScreen");
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/select-diary`;
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
    const {userdata,selectedDiaryData}= this.props
    return (

<SafeAreaView style={{ flex: 1,backgroundColor: '#EAD6A4' }}>
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

<View style={{flex: 1, marginTop : -610}}>
 <View style={{flex: 1, alignItems: 'center',}}> 
      <Image source={require('./assets/images/rainy.png')}
   style={{width:392 ,height:294,marginTop: 540}} /> 
</View>


<View style={{flex:1,marginTop: 600}}>
  <View style={styles.buttonFeel}>
    <Text style={styles.textFeel}>วันนี้เป็นยังไงบ้าง</Text>
  </View>
</View>

</View>



<View style={{flex:1,marginTop: 730,marginBottom:-580}}>
 
    <TouchableOpacity style={styles.buttonVeryGood} activeOpacity={0.50}
     onPress ={() => this.selectedFeel(data.feel_id)}>
     <View>
     <Text style={styles.textMood}>{this.props.selectedDiaryData.feel_name}</Text>
      <Image source={require('./assets/images/bear-verygood.png')}
     style={{width:57.24 ,height:57.37,marginTop: -40,marginLeft: -50}}
     />
     </View>
     </TouchableOpacity>
     

</View>



<View >


<View style={{flex: 1,marginTop:-30}}>

  <View style={styles.page}></View>

  <View style={styles.spine}></View>

</View>


<View style={{marginTop: 270}}>
 <View style={{flex: 1}} >
 <Image source={require('./assets/images/line.png')}
   style={{width: 290,height:256,marginTop: 220,marginLeft: 35}}
   resizeMode='contain' />  
 </View>

<View style={{marginTop: 47}}>
 <View>
<Text style={styles.textDate}>{this.props.selectedDiaryData.date}</Text>
 </View>
<View style={styles.buttonEmoji}>

     <Text style={styles.textEmoji}>{this.props.selectedDiaryData.title}</Text>
      <Image source={require('./assets/images/pencil.png')}
   style={{width: 10.32,height:10.32,marginTop: -15,marginLeft:310}}
   resizeMode='contain'  
    />

  </View>
</View>


<View style={{flex: 1,marginTop: 10}}>

<View style={{flex: 1,marginTop: -11}}>
  <Text style={styles.textType}>เรื่องราวที่ดี</Text>
   <Text style={styles.textContent}>{this.props.selectedDiaryData.good} </Text> 
 </View>


 <View style={{flex: 1,marginTop: 18.5}}>
  <Text style={styles.textType}>เรื่องราวที่ไม่ดี</Text>
 <Text style={styles.textContent}>{this.props.selectedDiaryData.bad} </Text> 
  </View>


<View style={{flex: 1,marginTop: 20.5}}>
  <Text style={styles.textType}>ความคาดหวัง</Text>
<Text style={styles.textContent}>{this.props.selectedDiaryData.wish} </Text> 
</View>



</View>
</View>
</View>

<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:-50,marginLeft:-20 }}>
     <View>
        <TouchableOpacity 
        onPress = {() => this.props.navigation.navigate('EditDiary')}
         activeOpacity={1} activeOpacity={0.75}>
             <Image source={require('./assets/images/buttonEdit.png')}
                    style={{width:38,height:38,marginLeft:310,marginTop: 120}} /> 
        </TouchableOpacity>
    </View>
</View>


</View>
 
   
    </SafeAreaView>




    );
  }
}


const styles = StyleSheet.create({
textDate: {
     color: '#000000',
     fontSize: 14,
     fontFamily: 'Quark',
     textAlign: 'center', 
      marginLeft: -190
},

textEmoji: {
     color: '#000000',
     fontSize: 14,
     fontFamily: 'Quark',
     textAlign: 'center',   
     marginTop: -20,
    marginLeft: 165
     
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
       marginBottom: 4,
       
        
},

   buttonFeel:{
      width: 255,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      marginTop: 90,
      marginLeft: 70,
      borderRadius: 10,
      shadowColor: '#87D6E8',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
    },

    textFeel: {
     color: '#000000',
     fontSize: 24,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     textAlign: 'center',
     marginTop: 12,
    },

    page:{
      height: 394,
      width: 370,
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  0.3,
      shadowRadius:3,
      elevation: 2,
      marginLeft: -25,
      marginTop: 465,
    },

    textContent:{
    color: '#000000',
     fontSize: 14,
     fontFamily: 'Quark',
     textAlign: 'center',
     
    },

    spine:{
      height: 394,
      width: 40,
      backgroundColor: '#E79995',
      borderRadius: 2,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  0.3,
      shadowRadius:3,
      elevation: 2,
      marginTop: -394,
      marginLeft: -25,
    },

    textType: {
     color: '#000000',
     fontSize: 13,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     marginLeft: 43,
    },

    Type: {
      flex: 1,
      marginTop: -30,
    
    },

     textMood: {
     color: '#000000',
     fontSize: 18,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     marginLeft: 15,
     marginTop: 12,
    
    },

buttonVeryGood: {
      width: 325,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#70BA97',
      borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 1,
      marginTop: -60,
      marginBottom: 20,
      marginLeft: 20,
    },

    


});

const mapStateToProps=(state,props)=>{
  return{
 
   userdata:state.Questions.userdata,
   selectedDiaryData:state.Questions.selectedDiaryData 
 }
}

export default connect(mapStateToProps)(DiaryHistoryScreen);
