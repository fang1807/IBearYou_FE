import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';

import CustomHeader from './CustomHeader';



class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
   return (
    <View style={[styles.container, containerStyle]}>

  <View style={{flex: 1, alignItems: 'center',}}>   
              <Image source={require('./assets/images/bg-welcome.png')}
     style={{width:400, height: 862,marginRight: 8,marginTop: -18}} />  
  </View>

   
          <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Bear.png')}
    style={{width: 219, height: 211, marginTop: 325 }} />     
 </View>
          <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/mouse-big.png')}
    style={{width: 95, height: 72, marginTop: 375 }} />     
 </View>
          <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/mouse-small.png')}
    style={{width: 40, height: 32, marginTop: 340 }} />     
 </View>

   <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Bear-body.png')}
    style={{width: 143, height: 85.68, marginTop: 355 }} />     
 </View>


   <View style={{flex: 1, alignItems: 'center',}}>  
             <Image source={require('./assets/images/sky-3.png')}
    style={{width: 400, height: 270, marginTop : -165 }} /> 
 </View>
   <View style={{flex: 1, alignItems: 'center',}}>  
             <Image source={require('./assets/images/sky-2.png')}
    style={{width: 400, height: 270, marginTop : -215 }} /> 
 </View>
    <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/sky-1.png')}
    style={{width: 400, height: 350, marginTop: -310 }} />     
 </View>


<View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Sunflower.png')}
    style={{width:70, height: 70, marginTop: 45,marginRight: 370}} />     
 </View>
 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Sunflower.png')}
    style={{width:45.18, height: 45.18, marginTop: 405,marginRight: 355}} />     
 </View>
 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/Sunflower.png')}
    style={{width:45.18, height: 45.18, marginTop: 150,marginRight: -370}} />     
 </View>
       
   <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/cloud1+2.png')}
    style={{width:178.22, height: 72, marginTop: -448,marginRight: 195,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity:  0.30,
      shadowRadius: 2,
      elevation: 5,
      }} />     
 </View>         

  

    <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/cloud-3.png')}
    style={{width:136, height: 72, marginTop: -440,marginRight: -348,
     shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity:  0.30,
      shadowRadius: 2,
      elevation: 5,
    }} />     
 </View>      

    <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/cloud-4.png')}
    style={{width:84, height: 54.47, marginTop: -430,marginRight: 340,
       shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity:  0.30,
      shadowRadius: 2,
      elevation: 5,
    }} />     
 </View>      

<View>
<Text style={{fontSize: 36 ,color: '#000000',marginBottom: 50}}>I Bear You</Text>
</View>
    
      
    <View style={styles.button}>
           <TouchableOpacity
        style={{marginTop: 20}}
         onPress={() => this.props.navigation.navigate('Login')}
        >
           <View style = {styles.buttonLogin}>  
         <Text style = {styles.textLogin}>Login</Text>  
           </View>
      </TouchableOpacity>

           <TouchableOpacity
        style={{marginTop: 20}}
         onPress={() => this.props.navigation.navigate('Register')}
        >
       <View style = {styles.buttonRegister}>  
           <Text style = {styles.textRegister}>Sign up</Text>  
       </View>
      </TouchableOpacity>
    </View>
     </View>
  );
  }
}


const containerStyle = {
       backgroundColor: '#E79995',
       width: '100%',
       height: '100%',
       flex:1 ,
       flexDirection: 'column' ,
          
}
 
const styles = StyleSheet.create({
  
  container: {  
     
       alignItems: 'center',
       justifyContent: 'center' 
        
  },
   button: {
       marginBottom: 90,
       flex: 1, 
       justifyContent: 'center', 
       alignItems: 'center' ,
   },
 
   buttonLogin: {
       borderRadius: 5,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#FFFFFF',
       height: 39,
       width: 327,
        shadowColor: '#000000',
      shadowOffset: { width: 1, height: 4 },
      shadowOpacity:  0.20,
      shadowRadius:3,
      elevation: 2,
      
   },
 
     buttonRegister: {
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#EA8681',
       height: 39,
       width: 327,
       borderRadius: 5,
       marginTop: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 1, height: 4 },
      shadowOpacity:  0.20,
      shadowRadius:3,
      elevation: 2,
       
 
  
   },
 
   textLogin: {
       color: '#000000',
       fontSize: 20,
   },
 
   textRegister: {
       color: '#FFFFFF',
       fontSize: 20,
   }
 
 
 
});

export default WelcomeScreen;
