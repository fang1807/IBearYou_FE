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
                          password : ''
                          

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

  {  !this.state.last_name ?      
          <View style={{marginLeft: 10}}>
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
              
              </View>
  }
</View> 

<View style={{flex:1}}>
{ !this.state.password ?
          <View>
           <View>
            <Image source={require('./assets/images/Lock.png')}
              style ={{width: 19.61, height: 23,marginTop: -6,marginBottom: -30}}/>
          </View>

          
          <TextInput
          placeholder="Password"
          placeholderTextColor="#707070"
          defaultValue={this.state.password}
          onChangeText={password=>this.setState({password})}
          secureTextEntry={true}
          style = {styles.TextInput_true}
          autoCapitalize='none'
          value = {this.state.InputPassword}
         />
            
            </View>
              :
              <View>
            <View>
            <Image source={require('./assets/images/Lock-pink.png')}
              style ={{width: 19.61, height: 23,marginTop: -6,marginBottom: -30}}/>
            </View>
            
        <TextInput
          placeholder="Password"
          placeholderTextColor="#707070"
          defaultValue={this.state.password}
          onChangeText={password=>this.setState({password})}
          secureTextEntry={true}
          style = {styles.TextInput_fault}
          autoCapitalize='none'
          value = {this.state.InputPassword}
         />
              
              </View>
  }
</View> 

    <View style = {styles.button}>
   <TouchableOpacity onPress={() => this.handleSubmit()}>
    <View style = {styles.buttonRegister}>  
           <Text style = {styles.textRegister}>Sign up</Text>  
       </View>  
   </TouchableOpacity >
 
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
 <View style={{width: 170, height: 1, backgroundColor: '#EA8681',marginTop: 12}} />
   <View>
     <Text style = {styles.textOr}> or </Text>
   </View>
   <View style={{width: 170, height: 1 ,backgroundColor: '#EA8681',marginTop: 12}} />   
</View>
 
 <TouchableOpacity    onPress={() => this.props.navigation.navigate('Login')}>
   <View style = {styles.buttonLogin}>  
           <Text style = {styles.textLogin}>Login</Text>  
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

const TextInputStyle = {
paddingLeft: 40,
marginTop: 40,


}


const styles = StyleSheet.create({
    
   container: {   
       backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center', 
        width: '100%',
        height: '100%',
        
          
   },
    button: {
        marginBottom: 20,
        alignItems: 'center',
        
         
    },

    buttonLogin: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
         backgroundColor: '#FFFFFF',
        height: 35,
        width: 360,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  0.40,
      shadowRadius: 2,
      elevation: 5,
      marginTop: 14,
           
        
    },

      buttonRegister: {
        alignItems: 'center',
        justifyContent: 'center',
      
         backgroundColor: '#EA8681',
       height: 35,
        width: 360,
        borderRadius: 5,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  0.40,
      shadowRadius: 3,
      elevation: 5,
        

    
    },

    textLogin: {
        color: '#E79995',
        fontSize: 20,
    
    },

    textRegister: {
        color: '#FFFFFF',
        fontSize: 20,
    },


    textOr: {
      color: '#EA8681',
      fontSize: 12,
      marginTop: 10,
    },

 TextInput: {
      margin: 40,
      height:20,
      width: 360,
      padding: 18,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
  
    },

    Input: {
      marginBottom: 20,
    },


    TextInputName_true: {
      height: 40, 
      width: 170,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      color:'#707070',
      fontFamily: 'Philosopher',
      margin:10,
      marginTop: 0,
      
    },

      TextInputName_fault: {
      height: 40, 
      width: 170,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#E79995',
      color:'#E79995',
      fontFamily: 'Philosopher',
      margin:10,
      marginTop: 0,
      
    },

      TextInputLastname_true: {
      height: 40, 
      width: 170,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      color:'#707070',
      fontFamily: 'Philosopher',
      marginTop: -10,
    },

      TextInputLastname_fault: {
      height: 40, 
      width: 170,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#E79995',
      color:'#E79995',
      fontFamily: 'Philosopher',
      marginTop: -10
    },

      TextInput_true: {
      height: 40, 
      width: 360,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      color:'#707070',
      fontFamily: 'Philosopher',
      marginTop: -10
    },
   
     TextInput_fault: {
      height: 40,
      width: 360,
      paddingLeft: 40,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#E79995',
      color:'#E79995',
      fontFamily: 'Philosopher',
      marginTop: -10,
      
    },
   
      textName: {
      margin: 40,
      height:20,
      width: 171,
      padding: 18,
      paddingLeft: 42,
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
      marginLeft: -65,
      
      
      
    },

    
   

   });

   


export default RegisterScreen;
