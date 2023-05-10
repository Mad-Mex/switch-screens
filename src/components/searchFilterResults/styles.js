import { StyleSheet } from "react-native";
import theme from "../../constants/theme";


const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 20,
        paddingTop: 4,
        paddingLeft: 10,
        height: 80,
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: theme.colors.gray
    },


    cardName: {
        fontFamily: 'NotoSans-SemiBold',
        fontSize: 20
    },


    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },


    cardIcon: {
        fontSize: 20,
        marginRight: 8
    },


    cardLocation: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 16
    }

})

export default styles;