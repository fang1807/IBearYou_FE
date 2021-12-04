import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
      , TouchableHighlight,TouchableOpacity, Dementions
      , TextInput}
      from 'react-native';
import moment from 'moment';
import axios from 'axios';
import CustomHeader from './CustomHeader';
import {API_URL} from './config'
import {connect} from 'react-redux';
 
class DiaryScreen extends Component {
 
  constructor(props) {
    super(props);
    this.state = { good : '',
                   bad : '',
                   wish : '',
                   title : '',
    };
   
  }
 
  componentDidMount(){
  console.log("componentDidmount DiaryScreen this.props.userdata : ",this.props.userdata);
}


 handleSubmit = async(event) => {
    //event.preventDefault();
     console.log("handleSubmit")
     console.log("this.props.currentFeelID", this.props.currentFeelID)
     console.log("this.state.first_name  : ", this.state.first_name)
      this.setState ({
      title : this.state.title,
      good : this.state.good,
      bad : this.state.bad,
      wish : this.state.wish,
    }); 
    const createDiary = {}
    createDiary.user_id= this.props.userdata.user_id
    createDiary.title =this.state.title
    createDiary.good =this.state.good
    createDiary.bad =this.state.bad
    createDiary.wish =this.state.wish
    createDiary.feel_id = this.props.currentFeelID

    axios.post(API_URL+'/api/create_diary', createDiary)
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



  InputTitle = () => {
     this.setState({
       title : !this.state.title
     })
      console.log ('selected seccess!')
  }

    InputGood = () => {
     this.setState({
       good: !this.state.good
     })
      console.log ('selected seccess!')
  }

    InputBad= () => {
     this.setState({
       bad: !this.state.bad
     })
      console.log ('selected seccess!')
  }

   InputWish= () => {
     this.setState({
       wish: !this.state.wish
     })
      console.log ('selected seccess!')
  }

 
 render() {
    const {userdata,currentFeelID}= this.props
return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor: '#EAD6A4'}}>
     
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

<View style={{flex: 1, marginTop : -610}}>
 <View style={{flex: 1, alignItems: 'center',}}> 
      <Image source={require('./assets/images/rainy.png')}
   style={{width:392 ,height:294,marginTop: 540}} /> 
</View>


<View style={{flex: 1, alignItems : 'center',marginTop:610}}>  
   <CustomHeader title='Diary'  navigation={this.props.navigation}/>
</View>


<View style={{marginTop: -10}}>
  <View style={styles.buttonFeel}>
    <Text style={styles.textFeel}>วันนี้เป็นยังไงบ้าง</Text>
  </View>
</View>

</View>

<View style={{marginTop: 320}}>
 

</View>



<View >


<View style={{flex: 1}}>

  <View style={styles.page}></View>

  <View style={styles.spine}></View>

</View>


<View style={{marginTop: 270}}>
 <View style={{flex: 1}} >
 <Image source={require('./assets/images/line.png')}
   style={{width: 290,height:256,marginTop: 220,marginLeft: 35}}
   resizeMode='contain' />  
 </View>

<View style={{marginTop: 5}}>
 <View>
<Text style={styles.textDate}>{moment().format('YYYY-MM-DD')}</Text>
 </View>
<View>
      <Image source={require('./assets/images/pencil.png')}
   style={{width: 10.32,height:10.32,marginTop: -15,marginLeft:310}}
   resizeMode='contain'
    />
  </View>
</View>

 <TextInput placeholder="ชื่อเรื่องราวของเธอ"
            placeholderTextColor="#707070"
            defaultValue={this.state.title}
            onChangeText={title=> this.setState({title}) }
            style={styles.textTitle}
            autoCapitalize='none'
            value = {this.state.InputTitle}
 />


<View style={{flex: 1,marginTop: 10}}>

<View style={{flex: 1,marginTop: -11}}>
  <Text style={styles.textType}>เรื่องราวที่ดี</Text>
   <TextInput placeholder="เขียนบันทึกเรื่องราวที่ดี"
            placeholderTextColor="#707070"
            autoCapitalize='none'
            defaultValue={this.state.good}
            onChangeText={good=> this.setState({good}) }
            style={styles.textContent}
            value = {this.state.InputGood}
 />
 </View>


 <View style={{flex: 1,marginTop: 18.5}}>
  <Text style={styles.textType}>เรื่องราวที่ไม่ดี</Text>
   <TextInput placeholder="เขียนบันทึกเรื่องราวที่ไม่ดี"
            placeholderTextColor="#707070"
            autoCapitalize='none'
            defaultValue={this.state.bad}
            onChangeText={bad=> this.setState({bad}) }
            style={styles.textContent}
            value = {this.state.InputBad}


 />
  </View>


<View style={{flex: 1,marginTop: 20.5}}>
  <Text style={styles.textType}>ความคาดหวัง</Text>
   <TextInput placeholder="เขียนบันทึกความคาดหวัง"
            placeholderTextColor="#707070"
            autoCapitalize='none'
            defaultValue={this.state.wish}
            onChangeText={wish=> this.setState({wish}) }
            style={styles.textContent}
            value = {this.state.InputWish}
 />
</View>



</View>
</View>
</View>

<View style={{flex: 1,marginTop: 135}}>
 <Image source={require('./assets/images/rain-doll.png')}
   style={{width: 91,height:95.71,marginLeft: 10}}
   resizeMode='contain' />  
 </View>
 
<View style={{flex: 1,flexDirection: 'row' , justifyContent: 'space-between',alignItems: 'flex-end',marginBottom: 30}}>
  <TouchableOpacity style={styles.button} activeOpacity ={0.75}
     onPress = {() => this.props.navigation.navigate('Mood')}
   >
       <Text style={styles.textButton}>ย้อนกลับ</Text>
  </TouchableOpacity>
 
     <TouchableOpacity style={styles.button} activeOpacity ={0.75}
       onPress={() =>  this.handleSubmit()}
     >
       <Text style={styles.textButton}>บันทึก</Text>
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
      marginLeft: -190
},

textTitle: {
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
   currentFeelID:state.Questions.currentFeelID,
 }
}

export default connect(mapStateToProps)(DiaryScreen);
