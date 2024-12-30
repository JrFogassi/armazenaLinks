import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        height: 52,
        width: "100%",
        backgroundColor: colors.purple.Purple,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: colors.gray.Silver,
        fontSize: 16,
        fontWeight: "600",
    },
})