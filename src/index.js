import React, { useState } from 'react';
import {  ActivityIndicator, View, Text,  } from 'react-native';
import { useFonts } from 'expo-font';
import theme from './constants/theme';
import { PreviewResults, Search } from './screens';
import { Header } from './components';



export default function App() {
  
  const [searchLocation, setSearchLocation] = useState(null)

  const onSearch = searchLocation => {
    setSearchLocation(searchLocation)
  }

  const [ loaded] = useFonts({
    'NotoSans-Light' : require("../assets/fonts/NotoSans-Light.ttf"),
    'NotoSans-Regular': require("../assets/fonts/NotoSans-Regular.ttf"),
    'NotoSans-Medium': require("../assets/fonts/NotoSans-Regular.ttf"),
    'NotoSans-SemiBold': require("../assets/fonts/NotoSans-SemiBold.ttf"),
    'NotoSans-Bold': require("../assets/fonts/NotoSans-Bold.ttf")
  })  

  if(!loaded){
    return(
        <ActivityIndicator size='large' color={ theme.colors.primary } />
    )
  }

  
  return (

    <View>
      <Header 
        title={ searchLocation ? "Resultados" : "Búsqueda" }
      />

      { 
        searchLocation 
        ?  <PreviewResults searchLocation={ searchLocation } /> 
        :  <Search  onSearch= { onSearch } /> 
      }

    </View>
    
  );
}
