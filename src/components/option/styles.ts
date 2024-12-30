import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    primaryTitle: {
        color: colors.purple.Indigo,
        fontSize: 16,
        fontWeight: "600",
    },
    secondaryTitle: {
        color: colors.purple.Indigo,
        fontSize: 16,
    }
})