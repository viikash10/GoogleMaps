import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>

      {/* Logo */}
      <Image source={require('../../assets/logo.png')} style={styles.img}/>

         {/* Text Input */}
       <View>
        <TextInput  placeholder='Search' style={styles.SearchBar}/>
        </View>

          {/* User Input */}
      <Image source={require('../../assets/placeholder.jpg')} style={styles.userimg}/>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    img:{
        width: 50,
        height: 50
    },
    SearchBar:{
       borderWidth: 1,
       borderColor: 'black',
       padding: 4,
       borderRadius:50,
       paddingLeft: 10,
       width: 250
    },
    userimg:{
        width: 50,
        height: 50,
        borderRadius: 100
    },
    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }


})