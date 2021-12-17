import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
      , TouchableHighlight,TouchableOpacity, Dementions
      , TextInput,Switch}
      from 'react-native';
import axios from 'axios';
import CustomHeader from './CustomHeader';
import {API_URL} from './config'
import moment from 'moment';
import {connect} from 'react-redux';
import SwitchToggle from "react-native-switch-toggle";
import DateTimePickerModel from "react-native-modal-datetime-picker";


class editTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      listSoundData: [],
      heal_sentenceData:[],
      checked: 0,
      isVisible: false,
      choseTime: '',
      choseDateTime: '',
      listPriority: [],
    };
  }

     componentDidMount(){
    console.log("componentDidmount editTodoList this.props.userdata : ",this.props.userdata);
    //this.loadHeal_Sentence();
    //this.loadSound();
    this.loadPriority();
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


handleSubmit = async(event) => {
    //event.preventDefault();
     console.log("handleSubmit")
     console.log("this.state.title: ",this.state.title) 
     console.log("this.state.good: ",this.state.good) 
     console.log("this.state.bad: ",this.state.bad) 
     console.log("this.state.wish: ",this.state.wish) 
     
    

    const editTodoList = {}
    editTodoList.user_id= this.props.userdata.user_id
    editTodoList.diary_id= this.props.selectedDiaryData.diary_id
    editTodoList.title =this.state.title
    editTodoList.good =this.state.good
    editTodoList.bad =this.state.bad
    editTodoList.wish =this.state.wish

    console.log("editTodoList: ",editTodoList)

    axios.put(API_URL+'/api/edit-to_do_list', editTodoList)
      .then(res => { 
          console.log(res.data);
        if(res.data.message==="Success"){
          console.log("Success")
         this.props.navigation.navigate('Alarm')
        }
        else  if(res.data.message==="create fail") {
          console.log("create fail")
        }
      })
  }


loadPriority=async()=>{
   
   console.log("load priority");
    const userData ={} 
    const data =  {"user_id": this.props.userdata.user_id};;
    const endpoint = `${API_URL}/api/list-priority`;
     console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
         this.setState({"listPriority":res.data.data})
         console.log("this.state.listPriority ",this.state.listPriority)
         //this.props.navigation.navigate('HomeApp') 
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

  switchToggle = () => {
     this.setState({
       toggle: !this.state.toggle 
     })
      console.log ('selected switch!')
  }

handlePicker = (datetime) => {
  this.setState({
    isVisible:false,
    //choseTime: moment(time).format('LT')
    choseDateTime: moment(datetime).format('LL'),
  })
}

showPicker = () => {
    this.setState({
    isVisible:true
  })
}

hidePicker = () => {
  this.setState({
    isVisible:false
    
  })
}



  render() {
    const {userdata}= this.props
  return (
     <SafeAreaView style={{ flex: 1 , backgroundColor: '#EAD6A4'}}>

    <View style={{flex: 1,alignItems: 'center',paddingTop: 30,}}>

       <View style={styles.Heal_box}> 
        <Text style={styles.Heal_title}>ประโยคพิเศษจากน้องหมี</Text>
          <Text style={styles.Heal_sentence}>ชีวิตมันก็เหมือนกับรถไฟเหาะนั่นแหละ ใช้ชีวิตให้มีความสุข และสนุกไปกันมันเถอะ</Text>
        </View> 

        <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Heal-bearNight.png')}
    style={{width:390,height:175,marginTop: -150}} />     
        </View>
    </View>


<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.setAlarm}>
          <Text style={styles.textAlarm}>Todo-List</Text>

      <View style={styles.setting}>

<View style={{marginTop:-20}}>     
<TouchableOpacity activeOpacity={0.75}>
        <View>  
       <Image source={require('./assets/images/delete-red.png')}
    style={{width:25,height:30,marginTop: -20,marginLeft:305,marginBottom:10}} />     
        </View>
</TouchableOpacity>
</View> 

<View>
        <Text style={styles.textTitlePlan}>เธอวางแผนว่าจะทำอะไร ?</Text>
        <View style={{marginTop:-5}}>
          <TextInput
            placeholder="ชื่อการแจ้งเตือน"
            placeholderTextColor="#014A5C"
            autoCapitalize='none'
            style={styles.text}
          />
        </View>
</View>



        <View style={{width: 313, height: 1, backgroundColor: '#014A5C',marginTop: 21, marginLeft:20}} />
        </View>

<View>
       <View style={{marginTop:-115}}> 
      <TouchableOpacity activeOpacity={0.75} onPress={this.showPicker}>
      <View style={{marginTop: -205}}>
        <Text  style = {styles.text}> 
            {!this.state.choseDateTime ?
            <Text>วันที่ต้องส่งงาน</Text>  
            :
            <Text>{this.state.choseDateTime}</Text>  
            }
        </Text>
        
      </View>
          </TouchableOpacity>
       <DateTimePickerModel
        isVisible={this.state.isVisible}
        onConfirm={this.handlePicker}
        onCancel={this.hidePicker}
        mode={'date'}
       />
        </View>
                <View style={{width: 313, height: 1, backgroundColor: '#014A5C',marginTop: -167, marginLeft:20}}></View>
</View>
                  
       
 <View style={{marginTop: -290}}> 
       <Text style={styles.textTitlePlan}>ความสำคัญของงาน</Text>
   </View> 

   {this.priority_List()}

<View style={{marginTop: -25}}> 
       <Text style={styles.textTitlePlan}>รายละเอียดเกี่ยวกับงาน</Text>
</View>

 <View>
       <TextInput
       style={styles.input}
        placeholder="รายละเอียดเกี่ยวกับงาน..."
        placeholderTextColor="#000000"
         defaultValue={this.state.user_name}
         onChangeText={user_name=>this.setState({user_name})}
         autoCapitalize='none'
     />
</View>

      </View>

       
    
    

  <View style={{flex:1,flexDirection: 'row',marginTop: 10,paddingTop: 5}}>
      <View style={styles.cancelButton}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Alarm')} activeOpacity={0.75} >  
             <Text style={styles.textCancel}>ยกเลิก</Text> 
             </TouchableOpacity>
      </View>

      <View style={styles.saveButton}>
            <TouchableOpacity onPress={() => this.handleSubmit()} activeOpacity={0.75} >  
             <Text style={styles.textSave}>บันทึก</Text> 
             </TouchableOpacity>
      </View>
  </View>
</View>

     </SafeAreaView>
  );
  }

  priority_List(){

   return this.state.listPriority.map((data,key) => {
      return (
            
         <View key={key}>
            {this.state.checked == key ?
            <View >
                <TouchableOpacity activeOpacity={0.75}>
                    <Image source={require('./assets/images/circle-2.png')}
                           style={{width:13,height:13,marginTop: 5,marginLeft:20}} /> 
                    <Text style={styles.textSound}>{data.priority_name}</Text>
                </TouchableOpacity>
               
              </View>
                :
                <View>
                <TouchableOpacity onPress={()=>{this.setState({checked: key})}} activeOpacity={1}>
                    <Image source={require('./assets/images/circle-1.png')}
                           style={{width:13,height:13,marginTop: 5,marginLeft:20}} /> 
                    <Text style={styles.textSound}>{data.priority_name}</Text>
                </TouchableOpacity>
                
                </View>
            }
        </View>
 
      
      )
    })

  }



    day_List(){

   return this.state.day.map((data,key) => {
      return (
 <View key={key}>
            {this.state.checked == key ?
               <View style={{}}>
                    <Text>{data}</Text>
              </View>
                :
                <View style={{flexDirection: 'row',justifyContent: 'space-between',marginBottom: 20}}>
                    <Text>{data}</Text>
                </View>
            }
        </View>
 
      
      )
    })

}


}



const styles = StyleSheet.create({


Heal_box: {
    height: 133,
    width: 350,
    backgroundColor: '#014A5C',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    elevation: 3,
    justifyContent: 'center',
  },
  
  Heal_title: {
    color: '#FFFFFF',
    fontFamily: 'Quark',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 80,
    marginTop: -5
  },

  Heal_sentence: {
    color: '#FFFFFF',
    fontFamily: 'Quark',
    fontSize: 16,
    flexWrap: 'wrap',
    paddingLeft: 60,
    paddingRight: 60,
    marginLeft: 20,
  },

  setAlarm: {
    height: 445,
    width: 350,
    backgroundColor: '#014A5C',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    elevation: 3,
    marginTop: -175,
  },

  cancelButton: {

  },

  saveButton: {

  },

  textSave: {
    color: '#014A5C',
    fontFamily: 'Quark',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 130
  },

  textCancel:{
    color: '#014A5C',
    fontFamily: 'Quark',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  setting:{
    height: 394,
    width: 350,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 10,
  },

    textAlarm: {
     color: '#FFFFFF',
     fontSize: 16,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     paddingLeft: 20 ,
     paddingTop: 20,

  },

    textTitlePlan: {
     color: '#0F0F0F',
     fontSize: 16,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     paddingLeft: 20 ,
     paddingTop: 20,
    },

    textInputTitle: {
     color: '#014A5C',
     fontSize: 16,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     paddingLeft: 20 ,
     paddingTop: 15,
     marginBottom: -15
    },

     textTitle: {
      color: '#014A5C',
      fontSize: 16,
      fontFamily: 'Quark',
      fontWeight: 'bold',
      paddingLeft: 20 ,
      paddingTop: 20,
      marginBottom: -15
    },

      text: {
      color: '#4C6FAF',
      fontSize: 14,
      fontFamily: 'Quark',
      fontWeight: 'bold',
      paddingLeft: 20 ,
      paddingTop: 20,
      marginBottom: -22
    },

    textSound: {
      color: '#014A5C',
      fontSize: 14,
      fontFamily: 'Quark',
      fontWeight: 'bold',
      paddingLeft: 40 ,
      paddingTop: 20,
      paddingBottom:10,
      marginBottom: 0,
      marginTop: -37,
      
    },

    setAlarm_Box: {
       width: 315,
      height: 45,
      backgroundColor: '#014A5C',
      borderColor: '#FFFFFF',
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderBottomWidth: 2,
      borderTopWidth: 2,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 1,
      marginTop: 38,
      marginLeft: 18.5,
    },

    textsetDateTime: {
      color: '#FFFFFF',
      fontSize: 15,
      fontFamily: 'Quark',
      fontWeight: 'bold',
      margin:10,
    },

 input:{
  height: 120,
  width : 310,
  borderWidth: 1,
  paddingLeft : 15,
  paddingRight : 15,
  paddingBottom: 70,
  fontSize : 16,
  fontFamily: 'Quark',
  backgroundColor : '#FFFFFF',
  borderColor : '#000000' ,
  marginTop: 5,
  marginLeft:20,
  marginRight:20,
  },


}
);

const mapStateToProps=(state,props)=>{
  return{
 
   userdata:state.Questions.userdata, 
 }
}

export default connect(mapStateToProps)(editTodoList);
