import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
        marginBottom: 30,
        height: 70,
        backgroundColor: theme.colors.primary
    },

    title: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 18,
        color: theme.colors.white
    }
});

export default styles;