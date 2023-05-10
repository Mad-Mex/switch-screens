import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },


    searchIcon: {
        position: "absolute",
        top: 12,
        left: 16,
        zIndex: 10,
        marginRight: 16,
        fontSize: 22,
        color: theme.colors.black
    },


    closeIcon: {
        position: "absolute",
        top: 12,
        right: 20,
        fontSize: 20,
        color: theme.colors.black
    },
    

    textInput: {
        position: "relative",
        paddingLeft: 54,
        height: 44,
        backgroundColor: theme.colors.gray,
        borderRadius: 44 / 2,
    },


    result: {
        marginTop: 36,
        marginBottom: 20,
        fontFamily: 'NotoSans-Regular',
        fontSize: 22    
    }
});

export default styles;