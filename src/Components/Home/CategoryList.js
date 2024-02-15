import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'

const CategoryList = () => {

  const categoryList=[
    {
        id:1,
        name:'Gas Station',
        value:'gas_station',
        icon:require('./../../../assets/gas.png')
    },
    {
        id:2,
        name:'Restaurants',
        value:'restaurant',
        icon:require('./../../../assets/food.png')
    },
    {
        id:3,
        name:'Cafe',
        value:'cafe',
        icon:require('./../../../assets/cafe.png')
    },
]
  return (
    <View style={{marginTop:15,marginHorizontal:10}}>
      <Text style={{fontSize:20,fontFamily:'raleway'}}>Select Top Category</Text>
      <FlatList
        data={categoryList}
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=>console.log(item.name)}>
                <CategoryItem category = {item}/>
            </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}  
      />
    </View>
  )
}

export default CategoryList