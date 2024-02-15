import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Header'
import GoogleMapView from '../Components/GoogleMapView'
import CategoryList from '../Components/Home/CategoryList'
import GlobalApi from '../Services/GlobalApi'

const Home = () => {
 
  useEffect(()=>{
     getNearByPlaces() ;
  },[]) ;


 const getNearByPlaces=()=>{
  GlobalApi.nearByPlace().then(res=>{
    console.log(res.data);
  })
 }


  return (
    <SafeAreaView>
      <Header/>
      <GoogleMapView/>
      <CategoryList/>
    </SafeAreaView>
  )
}

export default Home