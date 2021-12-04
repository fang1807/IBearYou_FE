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


class setAlarmScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      listSoundData: [],
      heal_sentenceData:[],
      checked: 0,
      day:['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'] ,
      isVisible: false,
      choseTime: '',
      choseDateTime: '',
    };
  }

     componentDidMount(){
    console.log("componentDidmount setAlarmScreen this.props.userdata : ",this.props.userdata);
    this.loadHeal_Sentence();
    this.loadSound();
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
    choseDateTime: moment(datetime).format('LLLL'),
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
      <CustomHeader title='setAlarm'  navigation={this.props.navigation}/>

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
          <Text style={styles.textAlarm}>ตั้งค่าการแจ้งเตือน</Text>
          <View style={{width: 310, height: 1, backgroundColor: '#FFFFFF',marginTop: 8,marginLeft: 20}}></View>
       
       <View> 
      <TouchableOpacity activeOpacity={0.75} onPress={this.showPicker}>
      <View style={styles.setAlarm_Box}>
        <Text style={styles.textsetDateTime}>
            {this.state.choseDateTime}
        </Text>
      </View>
          
                    <Image source={require('./assets/images/Settime.png')}
                            style={{width:25,height:25,marginTop: -35,marginLeft: 290}} />     
          </TouchableOpacity>
       <DateTimePickerModel
        isVisible={this.state.isVisible}
        onConfirm={this.handlePicker}
        onCancel={this.hidePicker}
        mode={'datetime'}
       />
        </View>

      <View style={styles.setting}>
        <Text style={styles.textDate}>{moment().format('YYYY-MM-DD')}</Text>
        <View>
          <TextInput
            placeholder="ชื่อการแจ้งเตือน"
            placeholderTextColor="#014A5C"
            autoCapitalize='none'
            style={styles.textInputTitle}
          />
        </View>


        <View style={{width: 313, height: 1, backgroundColor: '#014A5C',marginTop: 12, margin: 20}} />
        </View>


        <View>
        <View style={{marginTop: -210}}>
        <Text style = {styles.textTitle}>เสียงการแจ้งเตือน</Text>  
           <TouchableOpacity activeOpacity={0.75}>
                    <Text style = {styles.text}>ชื่อเสียงที่เลือก</Text>  
            </TouchableOpacity>

        
             
             <View style={{marginTop: -20}}>
                    <View style={{width: 1, height: 30, backgroundColor: '#014A5C',marginTop: 0, marginLeft: 250}} />
                    <View style={{width: 313, height: 1, backgroundColor: '#014A5C',marginTop: 5, margin: 20}} />
             </View>

              <View style={{marginLeft:268,marginTop: -57}}> 
              <Switch
                trackColor={{false: '#FFFFFF', true: '#014A5C'}}
                thumbColor={this.state.toggle ? "#FFFFFF" : "#014A5C"}
                ios_backgroundColor="#FFFFFF"
                onValueChange={(value) => this.setState({toggle: value})}
                value={this.state.toggle}
                style={{ transform: [{ scaleX: .7 }, { scaleY: .6 }] }}
              />
            </View>

              <View style={{marginTop: 20}}>
                   {this.sound_List()}   
              </View>  
                      
            </View>
            


        </View>

       
       

      </View>
    
    

  <View style={{flex:1,flexDirection: 'row',marginTop: 10,paddingTop: 5}}>
      <View style={styles.cancelButton}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Alarm')} activeOpacity={0.75} >  
             <Text style={styles.textCancel}>ยกเลิก</Text> 
             </TouchableOpacity>
      </View>

      <View style={styles.saveButton}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Alarm')} activeOpacity={0.75} >  
             <Text style={styles.textSave}>บันทึก</Text> 
             </TouchableOpacity>
      </View>
  </View>
</View>
     </SafeAreaView>
  );
  }

  sound_List(){

   return this.state.listSoundData.map((data,key) => {
      return (
   
          
         <View key={key}>
            {this.state.checked == key ?
            <View>
                <TouchableOpacity activeOpacity={1}>
                    <Image source={require('./assets/images/circle-2.png')}
                           style={{width:13,height:13,marginTop: 5,marginLeft:20}} /> 
                    <Text style={styles.textSound}>{data.sound_name}</Text>
                </TouchableOpacity>
                <View style={{width: 313, height: 1, backgroundColor: '#014A5C',marginTop: 0, margin: 20}} />
              </View>
                :
                <View>
                <TouchableOpacity onPress={()=>{this.setState({checked: key})}} activeOpacity={1}>
                    <Image source={require('./assets/images/circle-1.png')}
                           style={{width:13,height:13,marginTop: 5,marginLeft:20}} /> 
                    <Text style={styles.textSound}>{data.sound_name}</Text>
                </TouchableOpacity>
                <View style={{width: 313, height: 1, backgroundColor: '#014A5C',marginTop: 0, margin: 20}} />
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
    height: 460,
    width: 350,
    backgroundColor: '#014A5C',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    elevation: 3,
    marginTop: -185,
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
    height: 280,
    width: 350,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 57,
  },

    textAlarm: {
     color: '#FFFFFF',
     fontSize: 16,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     paddingLeft: 20 ,
     paddingTop: 20,

  },

    textDate: {
     color: '#0F0F0F',
     fontSize: 13,
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
      marginBottom: -15
    },

    textSound: {
      color: '#014A5C',
      fontSize: 14,
      fontFamily: 'Quark',
      fontWeight: 'bold',
      paddingLeft: 50 ,
      paddingTop: 20,
      marginBottom: -1,
      marginTop: -34,
      
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

}
);

const mapStateToProps=(state,props)=>{
  return{
 
   userdata:state.Questions.userdata, 
 }
}

export default connect(mapStateToProps)(setAlarmScreen);
