import * as React from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import thunk from 'redux-thunk';
 
import Choices from './Choices';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'


import resultHistory from './resultHistoryScreen';
import Sentence from './Sentence';
import EditTodoList from './EditTodoList';
import CustomHeader from './CustomHeader';
import HomeScreen from './HomeScreen';
import CalendarScreen from './CalendarScreen';
import MoodScreen from './MoodScreen';
import DiaryScreen from './DiaryScreen';
import CheckupScreen from './CheckupScreen';
import StartCheckupScreen from './StartCheckupScreen';
import setAlarmScreen from './setAlarmScreen';
import AlarmScreen from './AlarmScreen';
import ProfileScreen from './ProfileScreen';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen'; 
import HistoryScreen from './HistoryScreen'; 
import resultScreen from './resultScreen'; 
import GoodScreen from './GoodScreen'; 
import BadScreen from './BadScreen'; 
import WishScreen from './WishScreen'; 
import CalendarHistoryScreen from './CalendarHistoryScreen'; 
import DiaryHistoryScreen from './DiaryHistoryScreen'; 
import EditDiaryScreen from './EditDiaryScreen'; 
import Questions from './reducers/Questions';
import {Provider} from 'react-redux' ;
const store = createStore(
  combineReducers({ Questions
  }),
  {}, // initial state
  compose(
      applyMiddleware(thunk) 
  )
  );   
const navOptionHandler = () => ({
  headerShown: false
})

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName='Home'>
      <StackHome.Screen name='Home' component={HomeScreen} options={navOptionHandler} />
      <StackHome.Screen name='goodStory' component={GoodScreen} options={navOptionHandler}/>
      <StackHome.Screen name='badStory' component={BadScreen} options={navOptionHandler}/>
      <StackHome.Screen name='wish' component={WishScreen} options={navOptionHandler}/>
     </StackHome.Navigator>

  )
}

const StackDiary = createStackNavigator();

function DiaryStack() {
  return (
    <StackDiary.Navigator initialRouteName='Calendar'>
      <StackDiary.Screen name='Calendar' component={CalendarScreen} options={navOptionHandler}/>
      <StackDiary.Screen name='Diary' component={DiaryScreen} options={navOptionHandler}/>
      <StackDiary.Screen name='Mood' component={MoodScreen} options={navOptionHandler}/>
      <StackDiary.Screen name='CalendarHistory' component={CalendarHistoryScreen} options={navOptionHandler}/>
      <StackDiary.Screen name='DiaryHistory' component={DiaryHistoryScreen} options={navOptionHandler}/>
      <StackDiary.Screen name='EditDiary' component={EditDiaryScreen} options={navOptionHandler}/>
     </StackDiary.Navigator>

  )
}

const StackCheckup = createStackNavigator();

function CheckupStack() {
  return (
    <StackCheckup.Navigator initialRouteName='Checkup'>
      <StackCheckup.Screen name='Checkup' component={CheckupScreen} options={navOptionHandler}/>
      <StackCheckup.Screen name='StartCheckup' component={StartCheckupScreen} options={navOptionHandler}/>
      <StackCheckup.Screen name='History' component={HistoryScreen} options={navOptionHandler}/>  
      <StackCheckup.Screen name='Result' component={resultScreen} options={navOptionHandler}/>
      <StackCheckup.Screen name='Choices' component={Choices} options={navOptionHandler}/>
      <StackCheckup.Screen name='Sentence' component={Sentence} options={navOptionHandler}/>
      <StackCheckup.Screen name='resultHistory' component={resultHistory} options={navOptionHandler}/>
     </StackCheckup.Navigator>

  )
}

const StackBear = createStackNavigator();

function BearStack() {
  return (
    <StackBear.Navigator initialRouteName='Alarm'>
      <StackBear.Screen name='Alarm' component={AlarmScreen} options={navOptionHandler}/>
      <StackBear.Screen name='setAlarm' component={setAlarmScreen} options={navOptionHandler}/>
      <StackBear.Screen name='EditTodoList' component={EditTodoList} options={navOptionHandler}/>
     </StackBear.Navigator>

  )
}

const StackProfile = createStackNavigator();

function ProfileStack() {
  return (
    <StackProfile.Navigator initialRouteName='Profile'>
      <StackProfile.Screen name='Profile' component={ProfileScreen} options={navOptionHandler}/>
     </StackProfile.Navigator>

  )
}



const Tab = createBottomTabNavigator();

function TabNavigator() {
  return(
 <Tab.Navigator
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./assets/images/Home-Black.png') 
                : require('./assets/images/Home.png');
            } 
            else if (route.name === 'Diary') {
              iconName = focused 
               ? require('./assets/images/diary-black.png') 
               : require('./assets/images/diary.png');
            } 
            else if (route.name === 'Checkup') {
              iconName = focused 
               ? require('./assets/images/quiz.png')
               : require('./assets/images/quiz-pink.png') ;
            }
            else if (route.name === 'Todo-List') {
              iconName = focused 
               ? require('./assets/images/note-1.png')
               : require('./assets/images/note-2.png') ;
            }
             else if (route.name === 'Setting') {
              iconName = focused 
               ? require('./assets/images/Signout-black.png')
               : require('./assets/images/Signout-pink.png') ;
            }
            
            return <Image source={iconName} style={{width:28 , height: 28}} 
            resizeMode='contain'/>;
          },

         
        })}
       tabBarOptions={{
          showLabel : false,
        }}
     >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Diary" component={DiaryStack} />
        <Tab.Screen name="Checkup" component={CheckupStack} />
        <Tab.Screen name="Todo-List" component={BearStack} />
        <Tab.Screen name="Setting" component={ProfileStack} />
      </Tab.Navigator>
  )
}


const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return(
      <Drawer.Navigator initialRouteName='MenuTab'>
      <Drawer.Screen name='MenuTab' component={TabNavigator} options={navOptionHandler}/>
     </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator();



export default function App() {
  return (
    <Provider store={store} >
    <NavigationContainer>
      <StackApp.Navigator initialRouteName='Welcome'>
      <StackApp.Screen name='Welcome' component={WelcomeScreen} options={navOptionHandler}/>
      <StackApp.Screen name='Login' component={LoginScreen} options={navOptionHandler}/>
      <StackApp.Screen name='Register' component={RegisterScreen} options={navOptionHandler}/>
      <StackApp.Screen name='HomeApp' component={DrawerNavigator} options={navOptionHandler}/>
     </StackApp.Navigator>
    </NavigationContainer>
    </Provider>
  );
}