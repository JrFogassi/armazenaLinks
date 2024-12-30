import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 62,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        marginBottom: 24,
    },
    title: {
        color: colors.purple.Indigo,
        fontSize: 24,
        fontWeight: "600",
    },
    label: {
        color: colors.gray.Silver,
        fontSize: 14,
        paddingHorizontal: 24,
    }
})