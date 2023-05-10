import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native';
import { SearchFilterResults } from '../../components';
import { AntDesign } from '@expo/vector-icons';
import locations from '../../data/locations';
import styles from './styles';


const Search = ({ onSearch }) => {

  const [searchInput, setSearchInput] = useState("")

  return (
    
    <View style={styles.container}>

    <AntDesign name="search1" style={styles.searchIcon} />
    <TextInput
      style={styles.textInput}
      placeholder="Busca un país o una ciudad "
      onChangeText={ text => setSearchInput(text) }
      value={ searchInput }
    />

    { 
      searchInput.length 
      ? <AntDesign name="closecircleo" style={styles.closeIcon} onPress={() => setSearchInput("") } /> 
      : null 
    }

    <Text style={ styles.result }> Resultados </Text>

    <SearchFilterResults 
      data={ locations }
      searchInput={ searchInput }
      setSearchInput={ setSearchInput }
      onSearch= { onSearch }
    />
   
  </View>
  )
}

export default Search
