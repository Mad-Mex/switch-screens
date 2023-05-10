import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './styles';
import theme from './constants/theme';

export default function App() {

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
    <View style={styles.container}>
      <Text style={ styles.title } >Travel Mate </Text>
    </View>
  );
}
