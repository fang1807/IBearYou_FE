import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions
       ,TextInput,KeyboardAvoidingView, Linking}
       from 'react-native';
import {connect} from 'react-redux'
import CustomHeader from './CustomHeader';



class HomeScreen extends Component {
    constructor(props) {
       super(props);
   }

componentDidMount(){
  console.log("componentDidmount HomeScreen this.props.userdata : ",this.props.userdata);
}




  render() {
      const {userdata}= this.props
    return (

  
    <SafeAreaView style={{ flex: 1,backgroundColor: '#EAD6A4' }}>
       <CustomHeader title='Home' isHome={true} navigation={this.props.navigation}/>
   <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center'}}>
   
   <View style = {styles.banner}>

      <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/banner.png')}
    style={{width:342 ,height:245,marginTop:8}} />    
      
       <Text style={styles.banner_sentence}>หากรู้สึกแย่จนทนไม่ไหว สายด่วนสุขภาพจิตพร้อมรับฟังเธอเสมอ</Text> 
        <View style={{flex: 1,marginRight: 180,marginTop: 10}}>
        <TouchableOpacity  activeOpacity={0.75} onPress={()=>{Linking.openURL('tel:1323');} }>
        <Text style={styles.banner_tel}>1323</Text>
            <View style={{flex: 1, alignItems: 'center',}}>  
            <Image source={require('./assets/images/call_white.png')}
            style={{width:33 ,height:33,marginTop: -45,marginRight: 85}} />     
            </View>
       </TouchableOpacity >
          </View>
    </View>
      
   </View>

<TouchableOpacity  activeOpacity={0.75}   
onPress={() => this.props.navigation.navigate('goodStory')}>
  <View style = {styles.buttonGood}>  
           <Text style = {styles.textType}>เรี่องราวที่ดี</Text> 

            <View style={{flex: 1, alignItems: 'center',}}>  
            <Image source={require('./assets/images/Arrow-green.png')}
            style={{width:31 ,height:15,marginTop: -20,marginLeft: 240}} />     
            </View>

  </View>
  </TouchableOpacity >

  <TouchableOpacity   activeOpacity={0.75} 
  onPress={() => this.props.navigation.navigate('badStory')} >
  <View style = {styles.buttonBad}>  
           <Text style = {styles.textType}>เรื่องราวที่ไม่ดี</Text>  
  
            <View style={{flex: 1, alignItems: 'center',}}>  
            <Image source={require('./assets/images/Arrow-red.png')}
            style={{width:31 ,height:15,marginTop: -20,marginLeft: 240}} />     
            </View>

  </View>
  </TouchableOpacity>

  <TouchableOpacity  activeOpacity={0.75} 
  onPress={() => this.props.navigation.navigate('wish')}>
  <View style = {styles.buttonHome}>  
           <Text style = {styles.textType}>ความคาดหวัง</Text>  

            <View style={{flex: 1, alignItems: 'center',}}>  
            <Image source={require('./assets/images/Arrow-orange.png')}
            style={{width:31 ,height:15,marginTop: -20,marginLeft: 240}} />     
            </View>

  </View>
  </TouchableOpacity>

   <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/shell-2.png')}
    style={{width:35 ,height:29,marginTop:-78,marginLeft:375}} />     
 </View>

  <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/crab.png')}
    style={{width:43 ,height:25,marginTop:-196,marginRight:380}} />     
 </View>

    <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/shoe.png')}
    style={{width:22.33,height:22.99,marginTop:-10,marginLeft:-120}} />     
 </View>

  <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/bear-sun.png')}
    style={{width:113.89,height:106.56,marginTop:-75,marginRight:250}} />     
 </View>

   <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/umbrella-red.png')}
    style={{width:127 ,height:125.35,marginTop: -110,marginRight: -260}} />     
 </View>

 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Polygon.png')}
    style={{width:436 ,height:109,marginTop: -70,marginRight: 10}} />     
 </View>
      </View>
  
    </SafeAreaView>


    );
  }
}


const TextInputStyle = {
paddingLeft: 40,
marginTop: 40,


}
const styles = StyleSheet.create({

      TextInput: {
      margin: 0,
      height: 40,
      width: 360,
      padding: 0,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      
    },

    Input: {
      marginBottom: 20,
    },

    keyboard: {
       fontSize: 20,
       color: 'red',
    },

    banner: {
      width: 354,
      height: 245,
      backgroundColor: '#014A5C',
      borderRadius: 10,
      shadowColor: '#0D2367',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
      marginBottom: 25,
      marginTop: 20,
    },
   
    buttonGood:{
      width: 354,
      height: 47,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      borderLeftColor: '#61A768',
      borderLeftWidth: 42,
      shadowColor: '#61A768',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
      marginBottom: 30,
    },

      buttonBad:{
      width: 354,
      height: 47,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      borderLeftColor: '#FF4135',
      borderLeftWidth: 42,
      shadowColor: '#FF4135',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,  
      marginBottom: 30,
    },

      buttonWish:{
      width: 354,
      height: 47,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      borderLeftColor: '#FF9E45',
      borderLeftWidth: 42,
      shadowColor: '#FF9E45',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,  
    },

    textType: {
      fontSize: 20,
      color:'#000000',
      fontFamily: 'Quark',
      fontWeight: 'bold',
      marginLeft: 20,
      marginTop: 11,
    },

    buttonHome: {
       width: 354,
      height: 47,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      borderLeftColor: '#FF9E45',
      borderLeftWidth: 42,
      shadowColor: '#FF9E45',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,  
      marginBottom: 30,
    },

    banner_sentence: {
    color: '#FFFFFF',
    fontFamily: 'Quark',
    fontSize: 24,
    flexWrap: 'wrap',
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 0,
    marginTop: -190,
  },

    banner_tel: {
    color: '#FFFFFF',
    fontFamily: 'Quark',
    fontSize: 36,
    fontWeight: 'bold',
    marginLeft: 0,
    marginLeft: 50,
  },



});

const mapStateToProps=(state,props)=>{
  return{
 
   userdata:state.Questions.userdata, 
 }
}

export default connect (mapStateToProps)(HomeScreen);

