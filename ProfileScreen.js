import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Button
       , TouchableHighlight,TouchableOpacity, Dementions}
       from 'react-native';
import Bg1 from './components/Bg1';
import Bg2 from './components/Bg2';

import CustomHeader from './CustomHeader';


class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
     return (
     <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Profile' isHome={true} navigation={this.props.navigation}/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
           <TouchableOpacity
        style={{marginTop: 20}}
         onPress={() => this.props.navigation.navigate('Welcome')}
        >
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView>
  );
  }
}

export default ProfileScreen;
