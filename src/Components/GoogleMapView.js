import { View, Text, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { userLocationContext } from '../context/userLocationContext';

const GoogleMapView = () => {

    const [mapRegion,setmapRegion] = useState([])

    const {location,setLocation} = useContext(userLocationContext);

    useEffect(()=>{
        if(location)
        {
            setmapRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0522,
                longitudeDelta: 0.0421
            })
        }
    },[location]) ;
    

  return (
    <View 
    style={{
        marginTop: 20,
        borderRadius: 20,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        
    }}
    >
    <Text style={{fontSize: 20,marginBottom: 10,fontWeight:"600" , fontFamily:"raleway-bold"}}> Top Nearby Places</Text>
    <MapView 
    style={{
        width: Dimensions.get('screen').width*0.89,
        height: Dimensions.get('screen').height*0.3,
       
    }}
    provider={PROVIDER_GOOGLE}
    showsUserLocation={true}
    region={mapRegion} 
    >
    
    </MapView>
    </View>
  )
}

export default GoogleMapView