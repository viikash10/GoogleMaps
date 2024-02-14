import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';
import Fav from '../Screens/Fav';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const BottomTabNavigator = () => {


    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>

    {/* Home */}
      <Tab.Screen name="Home" component={Home}
        options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color,size}) => {
           return (<Ionicons name="home" size={size} color={color} />) ;
        }}}
       />

      {/* Search */}
      <Tab.Screen name="Search" component={Search} 
         options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({color,size}) => {
           return (<Ionicons name="search" size={size} color={color} />) ;
        }}}
       />

      {/* Favourite */}
      <Tab.Screen name="Fav" component={Fav} 
       options={{
        tabBarLabel: 'Favourite',
        tabBarIcon: ({color,size}) => {
           return (<AntDesign name="heart" size={size} color={color} />) ;
        }}}
       />

      {/* Profile */}
      <Tab.Screen name="Profile" component={Profile} 
        options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color,size}) => {
           return (<AntDesign name="user" size={size} color={color} />) ;
        }}}
       />

      

    </Tab.Navigator>
  )
}

export default BottomTabNavigator