import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions
       ,TextInput}
       from 'react-native';
import axios from 'axios';
import CustomHeader from './CustomHeader';
import {API_URL} from './config'
import moment from 'moment';
import {connect} from 'react-redux';
import {setSelectedDiaryData} from './actions/Diary'
import {setCurrentDiaryID,setCurrentDate} from './actions/Diary'


import {Calendar, LocaleConfig} from 'react-native-calendars';
  /*LocaleConfig.locales['th'] = {
    monthNames: ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'],
    monthNamesShort: ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
    dayNames: ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'],
    dayNamesShort: ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.']
  }
  LocaleConfig.defaultLocale = 'th';*/

class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
                    user_name: [],
                    date: moment().format("YYYY-MM-DD"),
                    selected_date: '',
                    selectedData:{},
    };
  }
componentDidMount(){
  console.log("componentDidmount CalendarScreen this.props.userdata : ",this.props.userdata);
  //this.loadCalendarScreen();
  this.loadUsername(); 
}

 setCurrentDiaryID = async(diaryID)=>{
   await this.props.dispatch(setCurrentDiaryID(diaryID))
 }

  setCurrentDate = async(currentdate)=>{
   await this.props.dispatch(setCurrentDate(currentdate))
 }


loadCalendarScreen=async()=>{
   console.log("CalendarScreen");
    const userData ={} 
    const data =  {"user_id": this.props.userdata.user_id};
    const endpoint = `${API_URL}/api/list-diary`;
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

//selectedDiaryData


 loadUsername=async()=>{
   console.log("list_username");
    const userData ={} 
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

  
 selectCalendar=async(selected_date)=>{
    console.log(selected_date);
   this.setState({selected_date})
   console.log("selectCalendar");
   const userData ={}
   const clientData =  {"user_id": this.props.userdata.user_id,"create_date": selected_date};
   const endpoint = `${API_URL}/api/select-diary`;
    console.log('endpoint : ',endpoint)
   const res = await axios.get(endpoint,{params:clientData})
   const {data,message}=res.data // Destructuring
   console.log("res.data ",data)
   console.log("message ",message)
  
      if(message==="Success"&& data.title){
         console.log("data.title: ",data.title)
         this.setState({"selectedData":data})
        //this.props.navigation.navigate('HomeApp')
        this.props.dispatch(setSelectedDiaryData(data))
       }
      else if(!data){
         console.log("res.data.data.length==0")
         console.log("res.data.data: ",res.data.data)
         this.setState({"selectedData":{}})
        //this.props.navigation.navigate('HomeApp')
       }
       else  if(message==="Fail") {
         this.setState({"selectedData":{}})
         console.log("Fail")
       }
 }



  setSelectedDiaryData=async(selectedDiaryData)=>{  
     await this.props.dispatch(setSelectedDiaryData(selectedDiaryData)); 
  }

 
  selectedEdit = (selectCalendar) => {
  this.props.navigation.navigate('DiaryHistory')
  }





  render() {
    const {userdata}= this.props

    
   return (
     <SafeAreaView style={{ flex: 1,backgroundColor: '#EAD6A4' }}>
     


{this.username()}
  
{this.state.selectedData.date ?
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 
<TouchableOpacity activeOpacity={0.75} 
 onPress ={() => this.selectedEdit()}>
 
<View >
 
<View style={{flex: 1}}>
 
 <View style={styles.page}></View>
 
 <View style={styles.spine}></View>
 
</View>
 
 
<View style={{marginTop: -30}}>
<View style={{flex: 1}} >
<Image source={require('./assets/images/line.png')}
  style={{width: 290,height:256,marginTop: -232,marginLeft: 35}}
  resizeMode='contain' /> 
</View>
 
<View style={{marginTop: -450}}>
<View>
<Text style={styles.textDate}>{this.state.selectedData.date}</Text>
</View>
<View style={styles.buttonEmoji}>
<TouchableOpacity activeOpacity={0.75} disabled={true} >
    <Text style={styles.textEmoji}>{this.state.selectedData.title}</Text>
     <Image source={require('./assets/images/pencil.png')}
  style={{width: 10.32,height:10.32,marginTop: 0,marginLeft:310}}
  resizeMode='contain'
    />
 </TouchableOpacity>
 </View>
</View>
 
 
<View style={{flex: 1,marginTop: -0}}>
 
<View style={{flex: 1,marginTop: -11}}>
 <Text style={styles.textType}>เรื่องราวที่ดี</Text>
  <Text style={styles.textContent}>{this.state.selectedData.good}</Text>
</View>
 
 
<View style={{flex: 1,marginTop: 18.5}}>
 <Text style={styles.textType}>เรื่องราวที่ไม่ดี</Text>
  <Text style={styles.textContent}>{this.state.selectedData.bad}</Text>
 </View>
 
 
<View style={{flex: 1,marginTop: 20.5}}>
 <Text style={styles.textType}>ความคาดหวัง</Text>
  <Text style={styles.textContent}>{this.state.selectedData.wish}</Text>
</View>
 
 
 
</View>
</View>
</View>
 
</TouchableOpacity>
 
</View>
  :
<View>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <View style={{marginTop:25}}>
   

     <View style={styles.boxContent}>
     <Text style={styles.content}>ในหนึ่งวันต้องพบเจอเรื่องราวมากมาย หลากหลายความรู้สึก สมุดเล่มนี้จะเก็บบันทึกเรื่องราวต่าง ๆ
     ความรู้สึกที่อยากบันทึกไว้ หรือจะเขียนตั้งเป้าหมายก้ได้ ถ้าพร้อมแล้วไปเขียนบันทึกในแบบฉบับของตัวเองกันเลย</Text>
     </View>
 
 
 
     <View style={{flex: 1, alignItems: 'center',}}> 
      <Image source={require('./assets/images/boots.png')}
   style={{width:50.91,height:41.96,marginTop:-20,marginRight:-320}} />    
</View>
 

 
<View style={{flex: 1, alignItems: 'center',}}> 
      <Image source={require('./assets/images/raincoat.png')}
   style={{width:98.08 ,height:107.17,marginTop: -75,marginLeft: -280}} />    
</View>
    </View>
   </View>
 
<View style = {styles.button}>
         <TouchableOpacity
       style={{marginTop: 590}}
       onPress={() => this.props.navigation.navigate('Mood')  }
      activeOpacity={0.75} >
       <View style = {styles.buttonStart}>
       <Text style = {styles.textStart}> Let's Get Started </Text>
       </View>
     </TouchableOpacity>
   </View>
  </View>




  }
   
     </SafeAreaView>
    );
  }

 

  username() {
    return this.state.user_name.map((data) => {
      return (
         <View style={{marginTop:-20,marginBottom:-100}}>
          <Text style={styles.textName}>ยินดีต้อนรับ {data.user_name}</Text>
          </View>
       )
    })

}

}
const styles = StyleSheet.create({
    content: {
     
      fontSize: 18,
      fontFamily: 'Quark',
      textAlign: 'center',
      marginTop: 20,
      paddingLeft: 30,
      paddingRight: 30,
    },

    boxContent:{
      width: 318,
      height: 160,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#E79995',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
      marginTop: 95,
    },

       button: {
       flex: 1,
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
       overflow: "hidden",
      
      
   },
 
   textStart: {
     color: '#FFFFFF',
     fontSize: 20,
     fontFamily: 'Quark',
     fontWeight: 'bold',
   },

   textName: {
    color: '#000000',
     fontSize: 36,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     marginTop: 30,
     marginLeft: 40
   },

    calendar: {
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 3,
      shadowOpacity: 0.4,
      elevation: 3,
      paddingLeft: 25,
      paddingRight: 25,
    },

    textDate: {
     color: '#000000',
     fontSize: 14,
     fontFamily: 'Quark',
     textAlign: 'center',   
     marginLeft: -185,
},

textEmoji: {
     color: '#000000',
     fontSize: 14,
     fontFamily: 'Quark',
     textAlign: 'center',   
     marginTop: -20,
     marginLeft: 165,
     
},

textButton:{
     color: '#FFFFFF',
     fontSize: 20,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     textAlign: 'center',
     
        
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
      marginTop: 85,
    },

    textContent:{
    color: '#000000',
     fontSize: 14,
     fontFamily: 'Quark',
     textAlign: 'center',
     marginTop: 10,
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
      marginLeft: -24,
    },

    textType: {
     color: '#000000',
     fontSize: 13,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     marginLeft: 45,
    },

    Type: {
      flex: 1,
      marginTop: -30,
    
    },


  });

function username_Box (props){
  return <View style={{flex: 1}}>
          <Text style={styles.textName}>{props.userdata.user_name}!</Text>
          </View>
}

const mapStateToProps=(state,props)=>{
  return{
 
   userdata:state.Questions.userdata, 
 }
}

export default connect(mapStateToProps)(CalendarScreen);