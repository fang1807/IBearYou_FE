import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions, Switch,ScrollView}
       from 'react-native';
import SwitchToggle from "react-native-switch-toggle";
import ToggleSwitch from 'toggle-switch-react-native';
import DateTimePickerModel from "react-native-modal-datetime-picker";

import axios from 'axios';
import CustomHeader from './CustomHeader';
import {API_URL} from './config'
import moment from 'moment';
import {connect} from 'react-redux';

import {setTodoListID} from './actions/TodoList';


class AlarmScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoListData: [],
      complete: true,
      checked: 0,
      selectedEditData: {},
      
      
    };
   
  }

    componentDidMount(){
    console.log("componentDidmount AlarmScreen this.props.userdata : ",this.props.userdata);
    
    //this.loadHeal_Sentence();
    this.loadAllTodoList();
    //this.loadTodoList_ID();
}

loadHeal_Sentence=async()=>{
   console.log("loadHeal_Sentence");
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

// todo-list ทั้งหมด
loadAllTodoList=async()=>{
   console.log("load All Todo-List");
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-to_do_list`;
     console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
          this.setState({"todoListData":res.data.data})
          console.log("this.state.todoListData ",this.state.todoListData)
        }
        else  if(res.data.message==="Fail") {
        } 

}

//todo-list แค่ id ที่เลือก
loadTodoList_ID=async(selectedTodoList)=>{
    console.log("load  Todo-List ID");
    const clientData =  {"user_id": this.props.userdata.user_id,"to_do_list_id": selectedTodoList};
    const endpoint = `${API_URL}/api/get-one_to_do_list`;
    console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:clientData})
    const {data,message}=res.data // Destructuring
    console.log("res.data ",data)
    console.log("message ",message)
       if(message==="Success"&& data.title){
          console.log("data.title: ",data.title)
          console.log("Success")
         this.setState({"selectedEditData":data})
          console.log("this.state.selectedEditData ",this.state.selectedEditData) 

          this.props.dispatch(setTodoListID(data))

          this.props.navigation.navigate('EditTodoList') 
        }
        else  if(message==="Fail") {
          console.log("Fail")
        } 

}


   setTodoListID = async(todolistID)=>{
   await this.props.dispatch(setTodoListID(todolistID))
 }

    selectedTodoList = (todolistID) => {
    console.log("todolistID ",todolistID)
    this.setTodoListID(todolistID)
    console.log ('selected todolistID success!')
  }

  selectEditTodoList = (loadTodoList_ID) => {
    //this.props.navigation.navigate('EditTodoList') 
     console.log ('selected go to edit success!')
     console.log ('edit todo-list id: ',loadTodoList_ID)
  }



  render() {
const {userdata,todolistID,priorityID}= this.props

const editAlarm = this.state.edit

    return (
     <SafeAreaView style={{ flex: 1, backgroundColor: '#EAD6A4' }}>
     

    <View style={{flex: 1,alignItems: 'center',paddingTop: 30,}}>
       
       <View style={styles.Heal_box}> 
        <Text style={styles.Heal_title}>ประโยคพิเศษจากน้องหมี</Text>
          <Text style={styles.Heal_sentence}>วันนี้อาจจะเหนื่อย และมีเรื่องให้ต้องทุกข์ใจเยอะ ตอนนี้เรามาพักสักหน่อยกันเถอะ</Text>
        </View> 

        <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Heal-bearNight.png')}
    style={{width:390,height:175,marginTop: -150}} />     
        </View>

    </View>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.alarmList}>
        <View>
          <Text style={styles.textAlarm}>To Do List</Text>
    </View>



          <View style={{width: 310, height: 1, backgroundColor: '#000000',marginTop: 8,marginLeft: 20}}></View>
        

      <View style={{paddingLeft: 300,marginTop: 10}}>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('setAlarm')} activeOpacity={0.75}>
                    <Image source={require('./assets/images/add.png')}
                            style={{width:19.41,height:19.41,marginLeft: 10}} />     
        </TouchableOpacity>
      </View>

<ScrollView>
<View style={{flex:1,marginTop:-20,paddingTop:-80}}>
    {this.AlltodoList()}
</View>
</ScrollView>    

      </View>
     
</View>
 


     </SafeAreaView>
  );
  }

   AlltodoList(){

   return this.state.todoListData.map((data,key) => {
     
      return (
      <View>

      <View style={{flex:1}}>
        <Text style={styles.textPriority}>{data.priority_name}</Text>
      </View>
       
        <View style={{flex: 1,justifyContent: 'center',marginTop:80 }}>
        <View style={styles.buttonAlarm}>
        <TouchableOpacity onPress={() => this.loadTodoList_ID(data.to_do_list_id)} activeOpacity={0.75}>
            <View style={{marginLeft:60,marginTop:5,marginLeft:20}}>
              <Text style={styles.textTime}>{data.title}</Text>
              <Text style={styles.textTask}>{data.description}</Text>
            </View>
        </TouchableOpacity>
        </View>

        
     
         </View>

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

  textAlarm: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Quark',
    fontWeight: 'bold',
    paddingTop: 15,
    marginBottom:-6,
    marginLeft: 20

  },

  alarmList: {
    height: 562,
    width: 350,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    elevation: 3,
    marginTop: -105,
  },
  
  textAlarmList: {
    color: '#014A5C',
    fontFamily: 'Quark',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  editButton: {
    height: 50,
    width: 90,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    elevation: 3,
    justifyContent: 'center',
    marginLeft: -100,
    marginTop: 55,
  },

  textEdit: {
    color: "#000000",
    fontFamily: 'Quark',
    fontSize: 19,
    //textAlign: 'center', 
    paddingLeft: 20,  
  },

  alarmBox: {
    height: 80,
    width: 320,
    backgroundColor: '#FFFFFF',
    borderColor: '#70BA97',
    borderLeftWidth: 35,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderTopWidth: 5,
  },

  textTime: {
    color: '#000000',
    fontFamily: 'Quark',
    fontSize: 26,
    fontWeight: 'bold',
  },

  textTask: {
    color: '#000000',
    fontFamily: 'Quark',
    fontSize: 14,
  },

  buttonAlarm: {
      width: 315,
      height: 70,
      backgroundColor: '#FFFFFF',
      borderColor: '#70BA97',
      borderLeftWidth: 32,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      borderTopWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 1,
      marginTop: -60,
      marginBottom: 20,
      marginLeft: 18.5,
    },



    textAdd: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Quark',
    fontWeight: 'bold',
    paddingLeft: 65 ,

  },

  textPriority: {
    marginTop:20,
    marginBottom:-18,
    marginLeft:20,
    fontFamily: 'Quark',
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 16,
  }

});

const mapStateToProps=(state,props)=>{
  return{
 
   userdata:state.Questions.userdata, 
   todolistID:state.Questions.todolistID, 
   priorityID:state.Questions.priorityID, 
 }
}

export default connect(mapStateToProps)(AlarmScreen);
