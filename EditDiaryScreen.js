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

class EditDiaryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {title : this.props.selectedDiaryData.title,
                  good : this.props.selectedDiaryData.good,
                  bad : this.props.selectedDiaryData.bad,
                  wish : this.props.selectedDiaryData.wish,
                  date : this.props.selectedDiaryData.create_date,

    };
  }

 componentDidMount(){
  // this.loadHistory_Diary();
   console.log("this,props.selectedDiaryData EditScreen",this.props.selectedDiaryData);
    
 }
  
loadHistory_Diary=async()=>{
   console.log("EditDiaryScreen");
    const userData ={} 
    userData.user_id="27"
    const data = JSON.stringify({
  "user_id": "27","first_name":"first_name","last_name":"last_name"
});
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

 
handleSubmit = async(event) => {
    //event.preventDefault();
     console.log("handleSubmit")
     console.log("this.state.title: ",this.state.title) 
     console.log("this.state.good: ",this.state.good) 
     console.log("this.state.bad: ",this.state.bad) 
     console.log("this.state.wish: ",this.state.wish) 
     
    

    const createDiary = {}
    createDiary.user_id= this.props.userdata.user_id
    createDiary.diary_id= this.props.selectedDiaryData.diary_id
    createDiary.title =this.state.title
    createDiary.good =this.state.good
    createDiary.bad =this.state.bad
    createDiary.wish =this.state.wish

    console.log("createDiary: ",createDiary)

    axios.put(API_URL+'/api/edit_diary', createDiary)
      .then(res => { 
          console.log(res.data);
        if(res.data.message==="Success"){
          console.log("Success")
         this.props.navigation.navigate('Calendar')
        }
        else  if(res.data.message==="create fail") {
          console.log("create fail")
        }
      })
  }


  render() {
    const {userdata,selectedDiaryData}= this.props
    return (
<SafeAreaView style={{ flex: 1,backgroundColor: '#EAD6A4' }}>
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

<View style={{flex: 1, marginTop : -645}}>
 <View style={{flex: 1, alignItems: 'center',}}> 
      <Image source={require('./assets/images/rainy.png')}
   style={{width:392 ,height:294,marginTop: 540}} /> 
</View>



<View style={{marginTop: 600}}>
  <View style={styles.buttonFeel}>
    <Text style={styles.textFeel}>?????????????????????????????????????????????????????????</Text>
  </View>
</View>

</View>

<View style={{marginTop: 320}}>
 

</View>



<View >


<View style={{flex: 1,marginTop: -5}}>

  <View style={styles.page}></View>

  <View style={styles.spine}></View>

</View>


<View style={{marginTop: 320}}>
 <View style={{flex: 1}} >
 <Image source={require('./assets/images/line.png')}
   style={{width: 290,height:256,marginTop: 220,marginLeft: 35}}
   resizeMode='contain' />  
 </View>

<View style={{marginTop: 5}}>
 <View>
<Text style={styles.textDate}>{this.props.selectedDiaryData.date}</Text>
 </View>
<View style={styles.buttonEmoji}>
<TouchableOpacity activeOpacity={0.75}>
     <Text style={styles.textEmoji}>{this.props.selectedDiaryData.title}</Text>
      <Image source={require('./assets/images/pencil.png')}
   style={{width: 10.32,height:10.32,marginTop: -15,marginLeft:310}}
   resizeMode='contain'
  
    />
  </TouchableOpacity>
  </View>
</View>


<View style={{flex: 1,marginTop: 10}}>

<View style={{flex: 1,marginTop: 20}}>
  <Text style={styles.textType}>??????????????????????????????????????????</Text>
   <TextInput placeholder="???????????????????????????????????????????????????????????????????????????"
            placeholderTextColor="#707070"
            autoCapitalize='none'
            onChangeText={ (good) => this.setState({good}) }
            style={styles.textContent}
            defaultValue={this.props.selectedDiaryData.good}
 />
 </View>


 <View style={{flex: 1,marginTop: 48}}>
  <Text style={styles.textType}>???????????????????????????????????????????????????</Text>
   <TextInput placeholder="????????????????????????????????????????????????????????????????????????????????????"
            placeholderTextColor="#707070"
            autoCapitalize='none'
            onChangeText={ (bad) => this.setState({bad:bad}) }
            style={styles.textContent}
            defaultValue={this.state.bad}
 />
  </View>


<View style={{flex: 1,marginTop: 45.5}}>
  <Text style={styles.textType}>?????????????????????????????????</Text>
   <TextInput placeholder="??????????????????????????????????????????????????????????????????"
            placeholderTextColor="#707070"
            autoCapitalize='none'
            onChangeText={ (wish) => this.setState({wish}) }
            defaultValue={this.props.selectedDiaryData.wish}
            style={styles.textContent}
 />
</View>



</View>
</View>
</View>

<View style={{flex: 1,marginTop: 172}}>
 <Image source={require('./assets/images/rain-doll.png')}
   style={{width: 91,height:95.71,marginLeft: 10}}
   resizeMode='contain' />  
</View>
 
<View style={{flex: 1,flexDirection: 'row' , justifyContent: 'space-between',alignItems: 'flex-end',marginBottom: 20}}>
  <TouchableOpacity style={styles.button} activeOpacity ={0.75}
     onPress = {() => this.props.navigation.navigate('Calendar')}
   >
       <Text style={styles.textButton}>??????????????????</Text>
  </TouchableOpacity>
 
     <TouchableOpacity style={styles.button} activeOpacity ={0.75}
       onPress ={() => this.handleSubmit()}
     >
       <Text style={styles.textButton}>??????????????????</Text>
     </TouchableOpacity>
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
      marginLeft: -170
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
    
    }
    


});

const mapStateToProps=(state,props)=>{
  return{
 
   userdata:state.Questions.userdata,
   selectedDiaryData:state.Questions.selectedDiaryData 
 }
}



export default connect(mapStateToProps)(EditDiaryScreen);