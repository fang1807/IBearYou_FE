import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions, TextInput,Separator}
       from 'react-native';
import CustomHeader from './CustomHeader';

class welcomeFirst extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     
       <SafeAreaView style={[styles.container, containerStyle]}>
      <View style={{flex: 1,alignItems: 'center',marginTop: 245}}>
        <Text style={styles.textWelcome}> Welcome </Text>
        <Text style={styles.textWelcome}> 'Username' !  </Text>
        <Text style={styles.textUsername}> It was lovely meeting you.  </Text>
      </View>

<View style={{flex: 1,alignItems: 'center'}}>
<Image source={require('./assets/images/floor-green.png')} 
style={{width:400,height: 400, marginTop: 355}}
/>
</View>

<View style={{flex: 1,alignItems: 'center'}}>
<Image source={require('./assets/images/floor-grey.png')} 
style={{width:400,height: 400, marginTop: 326}}
/>
</View>

<View style={{flex: 1}}>
<Image source={require('./assets/images/Bear-Glad.png')}
style={{width: 148.29 ,height: 246.21,marginRight: 230,marginTop: -5}} />
</View>

<View style={{flex: 1}}>
<Image source={require('./assets/images/fireworks-1.png')}
style={{width: 317.21,height: 317.21,marginLeft:195,marginTop: -660}} />
</View>
<View style={{flex: 1}}>
<Image source={require('./assets/images/fireworks-2.png')}
style={{width: 407,height: 407,marginRight:450,marginTop: -778}} />
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
       backgroundColor: '#F4DAD0',
        alignItems: 'center',
        justifyContent: 'center', 
        width: '100%',
        height: '100%',
        
          
      },

      textWelcome: {
          fontSize: 60,
          color: '#000000',
      },

      textUsername: {
          fontSize: 22,
          color: '#000000',
          marginTop: 30,
      }
   

});

export default welcomeFirst ;
