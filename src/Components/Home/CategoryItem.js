import { View, Text, Image } from 'react-native'
import React from 'react'


export default function CategoryItem({category}) {


  return (
    <View style={{padding:5,alignItems:'center',
    margin:5,width:110,height:100,justifyContent:'center',
    borderRadius:15,backgroundColor:'white',elevation:5}}>
        <Image source={category.icon}
            style={{width:40,height:30}}
        />
      <Text style={{fontSize:13,fontFamily:'raleway'}}>
        {category.name}</Text>
    </View>
  )
}