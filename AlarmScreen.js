import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions, Switch}
       from 'react-native';
import SwitchToggle from "react-native-switch-toggle";
import ToggleSwitch from 'toggle-switch-react-native';
import DateTimePickerModel from "react-native-modal-datetime-picker";
 

import axios from 'axios';
import CustomHeader from './CustomHeader';
import {API_URL} from './config'
import moment from 'moment';
import {connect} from 'react-redux';


class AlarmScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      
    };
    this.edit = false;
  }

    componentDidMount(){
    console.log("componentDidmount AlarmScreen this.props.userdata : ",this.props.userdata);
    this.loadHeal_Sentence();
}

loadHeal_Sentence=async()=>{
   console.log("loadHeal_Sentence");
    const userData ={} 
    userData.user_id="27"
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


  switchToggle = () => {
     this.setState({
       toggle: !this.state.toggle 
     })
      console.log ('selected switch!')
  }

  editAlarm = ()=> {
    this.edit({
      edit: !this.state.edit
    })
    console.log ('edit!')
  }



  render() {
const {userdata}= this.props

const editAlarm = this.state.edit

    return (
     <SafeAreaView style={{ flex: 1, backgroundColor: '#EAD6A4' }}>
      <CustomHeader title='Alarm' isHome={true} navigation={this.props.navigation}/>

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
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textAlarm}>การแจ้งเตือน</Text>
      </View>



          <View style={{width: 310, height: 1, backgroundColor: '#000000',marginTop: 8,marginLeft: 20}}></View>
        
    <View style={{flexDirection: 'row',paddingLeft: 160,marginTop: 10}}>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('setAlarm')} activeOpacity={0.75}>
                  <View style={{flex: 1, alignItems: 'center'}}>  
                    <Image source={require('./assets/images/add.png')}
                            style={{width:19.41,height:19.41,marginLeft: -65}} />     
                  </View>
                  <Text style={styles.textAdd}>เพิ่มรายการแจ้งเตือน</Text>
        </TouchableOpacity>
      </View>
  

         <View style={{flex: 1,justifyContent: 'center',marginBottom:340 }}>
           
        <View style={styles.buttonAlarm}>
            <View style={{marginLeft:60,marginTop:10}}>
              <Text style={styles.textTask}>task</Text>
              <Text style={styles.textTime}>time</Text>
            </View>
              <Image source={require('./assets/images/time.png')}
              style={{width:27 ,height:27,marginTop: -45,marginLeft:15}}
              />
        </View>

<View style={{marginTop:-65,marginLeft:120}}> 
        <TouchableOpacity>
                  <View style={{flex: 1, alignItems: 'center'}}>  
                    <Image source={require('./assets/images/edit.png')}
                            style={{width:22,height:22,marginLeft: 70}} />     
                  </View>
        </TouchableOpacity>

        <TouchableOpacity>
                  <View style={{flex: 1, alignItems: 'center'}}>  
                    <Image source={require('./assets/images/delete.png')}
                            style={{width:22,height:22,marginLeft: 140}} />     
                  </View>
        </TouchableOpacity>
</View>
           
         </View>

      </View>
</View>

     </SafeAreaView>
  );
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
    paddingLeft: 20 ,
    paddingTop: 20,

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
      borderColor: '#87D6E8',
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

    textAlarm: {
     color: '#000000',
     fontSize: 18,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     marginLeft: 15,
     marginTop: 12,
    
    },

    textAdd: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Quark',
    fontWeight: 'bold',
    paddingLeft: 65 ,

  },

});

const mapStateToProps=(state,props)=>{
  return{
 
   userdata:state.Questions.userdata, 
 }
}

export default connect(mapStateToProps)(AlarmScreen);
