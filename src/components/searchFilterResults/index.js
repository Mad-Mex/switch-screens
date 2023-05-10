import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const SearchFilterResults = ({ data, onSearch,  searchInput }) => {

  return (

    
    <FlatList 
        data={ data }
        nestedScrollEnabled = { true }
        renderItem={({item}) => {

            if( searchInput === "" ) return
           
            if( item.city.toLowerCase().includes( searchInput.toLowerCase()) || item.country.toLowerCase().includes( searchInput.toLowerCase())  ){

              return(

                <TouchableOpacity style={ styles.cardContainer } onPress={() => onSearch(item) }  >
                  <Text style={ styles.cardName } > { item.city } </Text>
  
                  <View style={ styles.iconContainer } >
                    <AntDesign name="enviromento" style={styles.cardIcon} />
                    <Text style={ styles.cardLocation } > { item.country } </Text>
                  </View> 
                </TouchableOpacity>
              )
           }
           
        }}
    />
  )
}

export default SearchFilterResults;
