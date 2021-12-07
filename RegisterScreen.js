import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button, Modal
       , TouchableHighlight,TouchableOpacity, Dementions, TextInput,Separator}
       from 'react-native';

import moment from 'moment';
import axios from 'axios';
import CustomHeader from './CustomHeader';
import {API_URL} from './config'
import {connect} from 'react-redux';


class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {        first_name : '',
                          last_name : '',
                          email : '',
                          user_name : '',
                          password : '',
                          FirstnameMessage: '',
                          LastnameMessage: '',
                          EmailMessage: '',
                          UsernameMessage: '',
                          PasswordMessage: ''
                          

     };
  }

    componentDidMount(){
  console.log("componentDidmount GoodScreen this.props.userdata : ",this.props.userdata);
}


     InputFirstname = () => {
     this.setState({
       first_name: !this.state.first_name
     })
      console.log ('selected seccess!')
  }

    InputLastname = () => {
     this.setState({
       last_name: !this.state.last_name
     })
      console.log ('selected seccess!')
  }

    InputDate= () => {
     this.setState({
       date: !this.state.date
     })
      console.log ('selected seccess!')
  }

   InputEmail= () => {
     this.setState({
       email: !this.state.email
     })
      console.log ('selected seccess!')
  }

  InputUsername = () => {
     this.setState({
       user_name: !this.state.user_name
     })
      console.log ('selected seccess!')
  }

InputPassword = () => {
     this.setState({
       password: !this.state.password
     })
      console.log ('selected seccess!')
  }

   handleSubmit = async(event) => {
    //event.preventDefault();
    if(this.state.first_name.length === 0 ){
      this.setState({FirstnameMessage: "please in put firstname"})

    }

   if(this.state.last_name.length === 0 ){
      this.setState({LastnameMessage: "please input lastname"})

    }

    if(this.state.email.length === 0 ){
      this.setState({EmailMessage: "please input email"})

    }

    if(this.state.user_name.length === 0 ){
      this.setState({UsernameMessage: "please input username"})

    }

    if(this.state.password.length === 0 ){
      this.setState({PasswordMessage: "please input password"})

    }

     console.log("handleSubmit")
     console.log("this.state.first_name  : ", this.state.first_name)
      this.setState ({
      first_name : this.state.first_name,
      last_name : this.state.last_name,
      email : this.state.email,
      user_name : this.state.user_name,
      password : this.state.password,
    
    }); 
    /*const pass256 = crypto
                    .createHmac('sha256',process.env.SHA256_SALT)
                    .update(String(this.state.password).trim())
                    .digest('hex') */
    /*  const pass256 =()=>{
        return new Promise((resolve,reject)=>{
          sha256(this.state.password+process.env.SHA256_SALT).then(hash=>{
            console.log('hash : ',hash)
            resolve(hash)
          })
        })
      }*/
     //let pass256 =""
    /*await sha256("Test").then( hash => {
    console.log(hash);
})*/
    const userData ={}
    userData.first_name =this.state.first_name
    userData.last_name =this.state.last_name
    userData.user_name=this.state.user_name
    userData.email =this.state.email
    userData.password = String(this.state.password).trim() 

    axios.post(API_URL+'/api/register', userData)
      .then(res => { 
       // console.log(res.data);
        if(res.data.message==="Success"){
          console.log("Success")
          this.props.navigation.navigate('Login') 
        }
        else  if(res.data.message==="DuplicateEmailOrUserName or Email") {
         console.log("DuplicateEmailOrUserName or Email")
        }
      })
  }


  render() {
      const {userdata}= this.props
  return (
      <SafeAreaView style={[styles.container, containerStyle]}>
     
<View style={{flex: 1, alignItems : 'flex-start'}}>
 <CustomHeader title='Register'  navigation={this.props.navigation}/>
 </View>


<View style={{flex: 1, alignItems: 'center'}}>
<Image source={require('./assets/images/snow-3.png')} 
style={{width:390, height: 240, marginTop: -55}}
/>
</View>


<View style={{flex:1,marginLeft: -20,marginTop: 130}}>
      <View style={{ flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',marginBottom: 20}}>
          
          <View>
          { !this.state.first_name ?
          <View style={{marginLeft: 10}}>
          <View>
            <Image source={require('./assets/images/Name.png')}
              style ={{width: 20, height: 25,marginTop: 0,marginBottom: -30,marginLeft:10}}/>
          </View>


            <TextInput
              placeholder="Firstname"
              placeholderTextColor="#707070"
              defaultValue={this.state.first_name}
              onChangeText={first_name=>this.setState({first_name})} 
              style = {styles.TextInputName_true}
              autoCapitalize='none'
              value = {this.state.InputFirstname}

              />
            </View>
            
            
            :
            <View style={{marginLeft: 10}}>
           <View>
            <Image source={require('./assets/images/Name-pink.png')}
              style ={{width: 20, height: 25,marginTop: 0,marginBottom: -30,marginLeft:10}}/>
          </View>

            <TextInput
              placeholder="Firstname"
              placeholderTextColor="#707070"
              defaultValue={this.state.first_name}
              onChangeText={first_name=>this.setState({first_name})} 
              style = {styles.TextInputName_fault}
              autoCapitalize='none'
              value = {this.state.InputFirstname}
              />
              </View>
  }
<Text style = {{marginTop: -4,color: "#E79995", fontSize : 16 }}>     {this.state.FirstnameMessage} </Text>
</View>
  

<View style = {{marginBottom: -7}}>
  {  !this.state.last_name ?      
          <View style={{marginLeft: 10, marginTop: 4}}>
            <TextInput
              placeholder="Lastname"
              placeholderTextColor="#707070"
              defaultValue={this.state.last_name}
              onChangeText={last_name=>this.setState({last_name})} 
              style = {styles.TextInputLastname_true}
              autoCapitalize='none'
              value = {this.state.InputLastname}
              />
           </View> 
           :
            <View style={{marginLeft: 10}}>
            <TextInput
              placeholder="Lastname"
              placeholderTextColor="#707070"
              defaultValue={this.state.last_name}
              onChangeText={last_name=>this.setState({last_name})} 
              style = {styles.TextInputLastname_fault}
              autoCapitalize='none'
              value = {this.state.InputLastname}
              />
           </View> 
       
  }
  <Text style = {{marginTop: 6,color: "#E79995", fontSize : 16 }}>   {this.state.LastnameMessage} </Text>
  </View>
         </View>
</View>


<View style={{flex:1}}>
{ !this.state.email ?
          <View>
           <View>
            <Image source={require('./assets/images/email.png')}
              style ={{width: 30, height: 23,marginTop: -6,marginBottom: -30}}/>
          </View>

          
            <TextInput
              placeholder="Email"
              placeholderTextColor="#707070"
              defaultValue={this.state.email}
              onChangeText={email=>this.setState({email})} 
              style = {styles.TextInput_true}
              autoCapitalize='none'
              value = {this.state.InputEmail}
              />
            
            </View>
              :
              <View>
            <View>
            <Image source={require('./assets/images/email-pink.png')}
              style ={{width: 30, height: 23,marginTop: -6,marginBottom: -30}}/>
            </View>

            
            <TextInput
              placeholder="Email"
              placeholderTextColor="#707070"
              defaultValue={this.state.email}
              onChangeText={email=>this.setState({email})} 
              style = {styles.TextInput_fault}
              autoCapitalize='none'
              value = {this.state.InputEmail}
              />
              
              </View>
  }
   <Text style = {{color: "#E79995", fontSize : 16 }}>{this.state.EmailMessage} </Text>
</View> 

<View style={{flex:1}}>
{ !this.state.user_name ?
          <View>
           <View>
            <Image source={require('./assets/images/People.png')}
              style ={{width: 19.61, height: 23,marginTop: -6,marginBottom: -30}}/>
          </View>

          
            <TextInput
              placeholder="Username"
              placeholderTextColor="#707070"
              defaultValue={this.state.user_name}
              onChangeText={user_name=>this.setState({user_name})} 
              style = {styles.TextInput_true}
              autoCapitalize='none'
              value = {this.state.InputUsername}
              />
            
            </View>
              :
              <View>
            <View>
            <Image source={require('./assets/images/People-pink.png')}
              style ={{width: 19.61, height: 23,marginTop: -6,marginBottom: -30}}/>
            </View>

            
            <TextInput
              placeholder="Username"
              placeholderTextColor="#707070"
              defaultValue={this.state.user_name}
              onChangeText={user_name=>this.setState({user_name})} 
              style = {styles.TextInput_fault}
              autoCapitalize='none'
              value = {this.state.InputUsername}
              />
              
              </View