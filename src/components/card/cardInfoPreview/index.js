import React, { useState } from 'react'
import { Text,View, ImageBackground, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const CardInfoPreview = ({ item }) => {

    const [like, setLike] = useState(false)

    return(

        <View style={ styles.cardContainer }>

            <ImageBackground source={ item.image } style={ styles.backgroundImage }  >
                <Pressable style={ styles.iconContainer }  onPress={ () => setLike(!like)  }  >
                    <AntDesign 
                        name={ like ? "heart" : "hearto" } 
                        style={[ styles.heartIcon, like ? styles.heartIconFilled : styles.heartIconOutlined ]}  />
                </Pressable>
            </ImageBackground>

            <View>
                <Text style={ styles.cardTitle } > { item.hotelName } </Text>
                <View style={ styles.ratingContainer }  >
                    <AntDesign name='star'  style={ styles.starIcon }  />
                    <Text style={ styles.cardTextRating } >  { `- ${item.rating } en promedio ` }  </Text>
                </View>
                <Text style={ styles.cardDescription } > { item.description } </Text>
                <Text style={ styles.price } > { `${item.price} usd ` } </Text>
                <Text style={ styles.priceSubtitle } > por noche </Text>
            </View> 
        </View>
    )
}

export default CardInfoPreview;