import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import CustomHeader from '../CustomHeader';

class BgQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={[styles.container, containerStyle]}>

   

    <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('../assets/images/Bg-Blue.png')}
    style={{width:620.93 ,height: 670.81,marginTop:135,marginRight: 60}} />     
 </View>
        <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('../assets/images/Vector-Pink.png')}
    style={{width:552.17 ,height: 323.61,marginTop: -260}} />     
 </View>


<View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('../assets/images/Sunflower.png')}
    style={{width:95.18, height: 95.18, marginTop:345,marginRight: 385}} />     
 </View>
 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('../assets/images/Sunflower.png')}
    style={{width:58.18, height: 58.18, marginTop: -330,marginRight: 185}} />     
 </View>
 <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('../assets/images/Sunflower.png')}
    style={{width:58.18, height: 58.18,marginTop: -220,marginLeft: 385}} />     
 </View>




 </View>
    );
  }
}

const containerStyle = {
       backgroundColor: '#4C6FAF',
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

  });

export default BgQuiz;
