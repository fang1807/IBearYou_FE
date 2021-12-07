import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions, TextInput,Separator,KeyboardAvoidingView
       , AsyncStorage} 
       from 'react-native';
import CustomHeader from './CustomHeader';
import axios from 'axios';  
import {API_URL} from './config'
import {connect} from 'react-redux'
import {setUserData} from './actions/User';

class LoginScreen extends Component {

   constructor(props) {
     super(props);
     this.state = { user_name : '',
                    password : '',
                    message: '',
                    nullMessage: '',
                    
     };
   }
   handleChange = (e) =>
        {
           this.setState({[e.target.name]: e.target.value })
          //  console.log(this.state.first_name)
        }
   logIn=()=>{
   console.log("this.state.user_name : ",this.state.user_name," this.state.password : ",this.state.password)
   this.props.navigation.navigate('HomeApp') 
 
 }

handleSubmit = async(event) => {
    //event.preventDefault();
     console.log("handleSubmit")
     console.log("this.state.user_name  : ", this.state.user_name)
      
    const userLogin ={} 
    userLogin.user_name=this.state.user_name 
    userLogin.password = String(this.state.password).trim()
    console.log("urlendpoint : ",  API_URL)

    //  if(this.state.user_name.length === 0  ){
    //   this.setState({nullmessage: "please input username and password"})

    // }

    //  if(this.state.password.length === 0 ){
    //   this.setState({nullMessage: "please input username and password"})

    // }
    
    axios.post(`${API_URL}/api/login`, userLogin)
      .then(res => { 
        console.log(res.data);
        if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
          this.setUserData(res.data.data)
         this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
          this.setState({message: "Username Or Password Is Wrong!!"})
         // console.log("DuplicateEmailOrUserName")
        }
      })
  }
  

 setUserData=async(userdata)=>{  
     await this.props.dispatch(setUserData(userdata)); 
 
 }
  render() {
    const {userdata}= this.props
return (
 
        <SafeAreaView style={[styles.container, containerStyle]}>
     


<View style={{flex: 1,marginTop: 0}}>
  <View style={{flex: 1, alignItems: 'center',}}> 
      <Image source={require('./assets/images/sea.png')}
   style={{width:390, height: 395, marginTop:20}} />    
  </View>
  
  <View style={{flex: 1}}>
     <Image source={require('./assets/images/shell-1.png')}
  style={{width:45, height: 36.73, marginTop: 260,marginRight: 385}} />   
  </View>
  
  <View style={{flex: 1}}>
     <Image source={require('./assets/images/shell-2.png')}
  style={{width:45, height: 36.73, marginTop: 330,marginLeft:385}} />   
  </View>
</View>

  <View style={{flex: 1, alignItems : 'flex-start',marginTop: 0}}>
 <CustomHeader title='Login'  navigation={this.props.navigation}/>
 </View> 



<View>
{ 
  !this.state.user_name ? 
  <View style={{flex:1,marginTop: 260,marginBottom:-40}}>

        <View>
        <Image source={require('./assets/images/People.png')}
             style ={{width: 19.61, height: 23 ,marginLeft:2,marginTop: 170}}/> 
        </View>

        <View style={{flex:1,marginTop: -25}}>
        <TextInput  
         placeholder="Username"
         placeholderTextColor="#707070"
         defaultValue={this.state.user_name}
         onChangeText={user_name=>this.setState({user_name})}
         style = {styles.TextInputUsername_fault}
         autoCapitalize='none'
        />
        </View>    

  </View>  
:
    <View style={{flex:1,marginTop: 260,marginBottom:-40}}>

        <View>
        <Image source={require('./assets/images/People-pink.png')}
             style ={{width: 19.61, height: 23 ,marginLeft:2,marginTop: 170}}/> 
        </View>

        <View style={{flex:1,marginTop: -25}}>
        <TextInput  
         placeholder="Username"
         placeholderTextColor="#E79995"
         defaultValue={this.state.user_name}
         onChangeText={user_name=>this.setState({user_name})}
         style = {styles.TextInputUsername_true}
         autoCapitalize='none'
        />
        </View>    

  </View>  
  }



  { 
  !this.state.password ? 
    <View style={{flex:1,marginTop: 30}}>

       <View>
       <Image source={require('./assets/images/Lock.png')}
            style ={{width: 19.61, height: 23 ,marginLeft:2}}/>
       </View>

        <View style={{flex:1,marginTop: -75}}>
        <TextInput
         placeholder="Password"
          placeholderTextColor="#707070"
          defaultValue={this.state.password}
          onChangeText={password=>this.setState({password})}
         secureTextEntry={true}
         style = {styles.TextInputPassword_true}
          autoCapitalize='none'
         />
        </View>    

        
  </View>  

  
:


 <View style={{flex:1,marginTop: 30}}>

       <View>
       <Image source={require('./assets/images/Lock-pink.png')}
            style ={{width: 19.61, height: 23 ,marginLeft:2}}/>
       </View>

        <View style={{flex:1,marginTop: -75}}>
        <TextInput
         placeholder="Password"
          placeholderTextColor="#707070"
          defaultValue={this.state.password}
          onChangeText={password=>this.setState({password})}
         secureTextEntry={true}
         style = {styles.TextInputPassword_fault}
          autoCapitalize='none'
         />
        </View>    

  </View>  
  }


  
</View> 


<View style = {{marginTop: -135}} >
  <Text style = {{color: "#E79995", marginBottom: 10, fontSize : 16 ,marginTop:-75,marginLeft:-60,fontFamily: 'Quark',fontWeight: 'bold'}}>  
  {this.state.message}
  </Text>

  
  {/* <View style = {{marginTop: -180}} >
  <Text style = {{color: "#E79995", marginBottom: 20, fontSize : 16 }}>  
  {this.state.nullMessage}
  </Text>
  */}

 </View>

<View style = {styles.button}>
   <TouchableOpacity onPress={() => this.handleSubmit()}>
       <View style = {styles.buttonLogin}>  
           <Text style = {styles.textLogin}>Login</Text>  
       </View>
   </TouchableOpacity>
 
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
 <View style={{width: 170, height: 1, backgroundColor: '#EA8681',marginTop: 12}} />
   <View>
     <Text style = {styles.textOr}> or </Text>
   </View>
   <View style={{width: 170, height: 1 ,backgroundColor: '#EA8681',marginTop: 12}} />   
</View>
 
 <TouchableOpacity  underlayColor='#FDF5F5' onPress={() => this.props.navigation.navigate('Register')}>
  <View style = {styles.buttonRegister}>  
           <Text style = {styles.textRegister}>Sign up</Text>  
       </View>
  </TouchableOpacity>
 
 </View>


    </SafeAreaView>   
      
   
  );
  }
}

const containerStyle = {

        flex: 1 ,
        flexDirection: 'column' ,  
}


const styles = StyleSheet.create({
    
   container: {   
       backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center', 
        width: '100%',
        height: '100%',
        
          
   },

    messageError: {
        alignItems: 'center',
        marginTop: -180,
      
         
    },
 
    button: {
        alignItems: 'center',

        marginBottom: 15,
         
    },

    buttonLogin: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EA8681',
        height: 35,
        width: 360,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  0.40,
      shadowRadius: 3,
      elevation: 5,
           
        
    },

      buttonRegister: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      height: 35,
      width: 360,
      borderRadius: 5,
      marginTop: 14,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  0.40,
      shadowRadius: 2,
      elevation: 5,
        

    
    },

    textLogin: {
        color: '#FFFFFF',
        fontSize: 20,
    
    },

    textRegister: {
        color: '#E79995',
        fontSize: 20,
    },


    textOr: {
      color: '#EA8681',
      fontSize: 12,
      marginTop: 10,
    },

    textForget: {
      color:'#E79995',
      fontSize: 16,
      
    
    },

    forget: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      paddingLeft: 227,
      marginTop: 3,
      marginBottom: 30,
      

    },

    TextInputUsername_true: {

      height: 40,
      width: 360,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#E79995',
      color:'#E79995',
      fontFamily: 'Philosopher',
      
    },

      TextInputUsername_fault: {

      height: 40,
      width: 360,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      color:'#E79995',
      fontFamily: 'Philosopher',
      
    },

      TextInputPassword_true: {
      
      marginTop: 50,
      height: 40,
      width: 360,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      color:'#E79995',
      fontFamily: 'Philosopher',
      
    },

     TextInputPassword_fault: {
      
      marginTop: 50,
      height: 40,
      width: 360,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#E79995',
      color:'#E79995',
      fontFamily: 'Philosopher',
      
    },

    image: {
      alignItems: 'flex-start',
      marginTop: 0 ,
      
      
    },

    keyboard: {
       fontSize: 20,
       color: 'black',
    },
   

    input:{
    height: 200,
    width : 300,
    margin: 30,
    borderWidth: 1,
    paddingLeft : 15,
    paddingBottom: 145,
    fontSize : 18,
    },

});

const mapStateToProps=(state,props)=>{
  return{
 
   userdata:state.Quest
  }
}

export default connect(mapStateToProps)(LoginScreen);


