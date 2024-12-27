import { View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";

import { Category } from "@/components/category";

export default function Index(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />

                <TouchableOpacity activeOpacity={0.8}>
                    <MaterialIcons name="add" size={32} color={colors.purple.Indigo} />
                </TouchableOpacity>  
            </View>

            <Category 
            name={categories[0].name} 
            icon={categories[0].icon} 
            isSelected
            />
            <Category name="Site" icon="code" isSelected={false}/>
            <Category name="Video" icon="code" isSelected={false}/>
        </View>
    )
}

