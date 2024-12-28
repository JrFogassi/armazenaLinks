import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 14,
    },

    title: {
        color: colors.purple.Indigo,
        fontSize: 22,
    },

    header: {
        paddingHorizontal: 12,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32,
    },

    logo: {
        height: 32,
        width: 38,
    },
    links: {
       borderTopWidth: 1,
       borderTopColor: colors.purple.BlueViolet
    },
    linksContent: {
        gap: 20,
        padding: 24,
        paddingBottom: 100
    }
})