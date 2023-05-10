import { StyleSheet } from "react-native";
import theme from "../../../constants/theme";


const styles = StyleSheet.create({

    cardContainer: {
        marginBottom: 40,
        marginHorizontal: 16,
        backgroundColor: theme.colors.gray
    },


    backgroundImage:{
        position: "relative",
        width: "100%",
        height: 180,
    },


    iconContainer: {
        position: "absolute",
        top: 14,
        right: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        backgroundColor: theme.colors.white,
        borderRadius: 40 / 2
    },


    heartIcon: {
        fontSize: 20,
        fontWeight: "500",
    },


    heartIconOutlined: {
        color: "#000000"
    },  


    heartIconFilled:{
        color: theme.colors.primary
    },


    contentContainer: {
        marginLeft: 10
    },


    cardTitle: {
        marginTop: 16,
        marginLeft: 10,
        fontFamily: 'NotoSans-SemiBold',
        fontSize: 22
    },


    ratingContainer: {
        flexDirection: "row",
        alignItems: "center"
    },


    starIcon: {
        marginLeft: 14,
        fontSize: 14,
        fontWeight: "500",
        color: theme.colors.secondary
    },


    cardTextRating:{
        fontFamily: 'NotoSans-Regular',
        fontSize: 14
    },

    cardDescription: {
        marginTop: 4,
        marginLeft: 14,
        marginBottom: 10,
        fontFamily: 'NotoSans-Regular',
        fontSize: 14
    },


    price: {    
        marginLeft: 8,
        fontFamily: 'NotoSans-SemiBold',
        fontSize: 30
    },


    priceSubtitle: {
        marginLeft: 18,
        marginBottom: 20,
        fontFamily: 'NotoSans-Regular',
        fontSize: 14
    }


});

export default styles;