import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({

    container : {
        flex: 1
    },

    header : {
        width: "100%",
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        // getStatusBarHeight serve para modelos de iphone a partir do X, pois a parte util da tela começa logo a partir do topo da tela
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42
    }

})