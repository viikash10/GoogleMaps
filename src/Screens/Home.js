import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Header'
import GoogleMapView from '../Components/GoogleMapView'
import CategoryList from '../Components/Home/CategoryList'

const Home = () => {
  return (
    <SafeAreaView>
      <Header/>
      <GoogleMapView/>
      <CategoryList/>
    </SafeAreaView>
  )
}

export default Home