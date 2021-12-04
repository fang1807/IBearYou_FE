import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import moment from 'moment';
import axios from 'axios';
import CustomHeader from './CustomHeader';
import {API_URL} from './config'
import {connect} from 'react-redux';
import {setCurrentFeelID} from './actions/Diary'

class MoodScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
                    feel : true,
                    next : true,
                    listFeelData : [],
                    checked: 0,
    };
  }

 componentDidMount(){
  console.log("componentDidmount MoodScreen this.props.userdata : ",this.props.userdata);
  this.loadMoodScreen();
}
 setCurrentFeelID = async(feelID)=>{
   await this.props.dispatch(setCurrentFeelID(feelID))
 }
 loadMoodScreen=async()=>{
   
   console.log("MoodScreen");
    const userData ={} 
    const data =  {"user_id": this.props.userdata.user_id};;
    const endpoint = `${API_URL}/api/list-allfeel`;
     console.log('endpoint : ',endpoint)
    const res = await axios.get(endpoint,{params:data}) 
       if(res.data.message==="Success"){
          console.log("Success")
          console.log("user_data: ",res.data.data)
          this.setState({"listFeelData":res.data.data})
          console.log("this.state.listFeelData ",this.state.listFeelData)
         //this.props.navigation.navigate('HomeApp') 
        }
        else  if(res.data.message==="Fail") {
        } 

}
 



  selectedFeel = (feelID) => {
    console.log("feelID ",feelID)
   this.setCurrentFeelID(feelID)
     this.setState({
       feel: !this.state.feel,
       next: !this.state.next,
     })
      console.log ('selected seccess!')
  }



  render() {
    
    const {userdata}= this.props

    const veryGood = this.state.veryGood ;
    const good = this.state.good ;

 return (
<SafeAreaView style={{ flex: 1 ,backgroundColor: '#EAD6A4'}}>
     
 <View style={{ flex: 1,flexDirection: 'column',justifyContent: 'center', alignItems: 'center' }}> 
      
    <View style={{flex: 1, alignItems: 'center',}}>  
       <Image source={require('./assets/images/rainy.png')}
        style={{width:392 ,height:294,marginTop: -47}} />  
    </View>


    <View style={{flex: 1, alignItems : 'center',marginTop:-165}}>   
      <CustomHeader title='Mood'  navigation={this.props.navigation}/>
    </View>
</View>
    
  <View style={{flex: 1}}>
    <View style={styles.boxContent}>
        <Text style={styles.textContent}>วันนี้เธอรู้สึกอย่างไร</Text>
    </View>
    

  </View>

    {this.all_feel_List()}

<View>
<Image source={require('./assets/images/bear-rain.png')}
       style={{width:100.56,height:104.02,marginTop: 10,marginLeft:130,marginBottom: -65}}
       />
 
<Image source={require('./assets/images/polygon2.png')}
       style={{width:201.655,height:118.87,marginTop: 0,marginLeft: -55,marginBottom: -90}}
       />
 
<Image source={require('./assets/images/footprint.png')}
       style={{width:48,height:18.78,marginTop: 10,marginLeft: 110,marginBottom: 0}}
       />
</View>
     
<View>
{ this.state.next
        ?
        <TouchableOpacity 
        onPress = {() => this.props.navigation.navigate('Diary')}
        style={styles.buttonNext_before} activeOpacity={0.75} disabled={true} >
        <Text style={styles.textNext}>ถัดไป</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity 
        onPress = {() => this.props.navigation.navigate('Diary')}
        style={styles.buttonNext_after} activeOpacity={0.75}>
        <Text style={styles.textNext}>ถัดไป</Text>
        </TouchableOpacity>
}
</View>

     </SafeAreaView>
  );
  }

  all_feel_List(){

   return this.state.listFeelData.map((data,key) => {
      return (
<View style={{flex: 1,marginBottom: -110}}>
   {this.state.feel
    ? 
    <TouchableOpacity style={styles.buttonVeryGood} activeOpacity={0.50}
     onPress ={() => this.selectedFeel(data.feel_id)}>
     <View>
     <Text style={styles.textMood}>{data.feel_name}</Text>
      <Image source={require('./assets/images/bear-verygood.png')}
     style={{width:57.24 ,height:57.37,marginTop: -38,marginLeft: -50}}
     />
     </View>
     </TouchableOpacity>
     :
     <View>
     <View></View>
     <TouchableOpacity style={styles.buttonVeryGood} activeOpacity={1}
     onPress ={() => this.selectedFeel(data.feel_id)}>
     <Text style={styles.textMood}>{data.feel_name}</Text>
      <Image source={require('./assets/images/bear-verygood.png')}
     style={{width:57.24 ,height:57.37,marginTop: -38,marginLeft: -50}}
     />
     </TouchableOpacity>
     </View>
}
  
</View>
 


      )
    })

}


}


const styles = StyleSheet.create({

    boxContent:{
      width: 255,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      marginLeft: 80,
      marginTop: -50,
      borderRadius: 10,
      shadowColor: '#87D6E8',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity:  1,
      shadowRadius:0,
      elevation: 2,
    },

    textContent: {
     color: '#000000',
     fontSize: 24,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     textAlign: 'center',
     marginTop: 10,
    },

    
      buttonGood: {
      width: 332.11,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#FFF96E',
      borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 2,
      marginBottom: 0,
      marginLeft: 32,
      marginTop: 7,
    },

      buttonIndifferent: {
      width: 332.11,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#FFAD8A',
      borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 2,
      marginBottom: 15,
      marginTop: 22,
      marginLeft: 32,
    },

      buttonBad: {
      width: 332.11,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#87D6E8',
      borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 2,
      marginBottom: 15,
      marginLeft: 32,
      marginTop: 7,
    },

      buttonVeryBad: {
      width: 332.11,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#00576A',
      borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 2,
      marginLeft: 32,
      marginTop:7,
    },

    textMood: {
     color: '#000000',
     fontSize: 18,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     marginLeft: 15,
     marginTop: 12,
    
    },

buttonVeryGood: {
      width: 332.11,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#70BA97',
      borderLeftWidth: 42,
      borderRightWidth: 3,
      borderBottomWidth: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 1,
      marginTop: -60,
      marginBottom: 20,
      marginLeft: 32,
    },


    clickVeryGood: {
      flex: 1,  
      width: 414,
      backgroundColor: '#70BA97',
      marginBottom: 5,
      marginLeft: -20,
      marginTop: -85,
     
    },

    clickGood: {
      flex: 1,
      width: 414,
      backgroundColor: '#FFF96E',
      marginBottom: -60,
      marginLeft: -20,
      marginTop: -10,
      paddingBottom: 70,
      paddingTop: -72,
    },

    clickIndifferent: {
      height: 70,
      width: 414,
      backgroundColor: '#FFAD8A',
      marginBottom: -80,
      marginLeft: -20,
      marginTop: 10,
      paddingBottom: 6,
      paddingTop: 3,
    },

    clickBad: {
      height: 65,
      width: 414,
      backgroundColor: '#87D6E8',
      marginBottom: -60,
      marginLeft: -20,
      marginTop: -5,
      paddingBottom: 6,
      paddingTop: 3,
    },

    clickVeryBad: {
      height: 70,
      width: 414,
      backgroundColor: '#00576A',
      marginBottom: -63,
      marginLeft: -20,
      marginTop: -7,

    },

buttonNext_before: {
       borderRadius: 5,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#A6A6A6',
       height: 41,
       width: 102,
       marginTop: -55,
       marginBottom: 30,
       marginLeft: 260,
       shadowColor: '#000000',
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity:  0.4,
       shadowRadius: 3,
       elevation: 2,
},

buttonNext_after: {
       borderRadius: 5,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#E79995',
       height: 41,
       width: 102,
       marginTop: -55,
       marginBottom: 30,
       marginLeft: 260,
       shadowColor: '#000000',
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity:  0.4,
       shadowRadius: 3,
       elevation: 2,
},

textNext: {
     color: '#FFFFFF',
     fontSize: 20,
     fontFamily: 'Quark',
     fontWeight: 'bold',
     textAlign: 'center',
     
}

    });

function Feel_Box_True (props){
  return <View style={{flex: 1}}>
      <View>
      <Text style={styles.textDate}>{props.date}</Text>
      </View>
      <View style={styles.boxContent}>
        <Text style ={styles.textContent}>{props.text}</Text>
      </View>
</View>
}

function Feel_Box_False (props){
  return <View style={{flex: 1}}>
      <View>
      <Text style={styles.textDate}>{props.date}</Text>
      </View>
      <View style={styles.boxContent}>
        <Text style ={styles.textContent}>{props.text}</Text>
      </View>
</View>
}

const mapStateToProps=(state,props)=>{
  return{
 
   userdata:state.Questions.userdata, 
 }
}

export default connect(mapStateToProps)(MoodScreen);
