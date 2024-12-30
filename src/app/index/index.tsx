import { 
    View, 
    Image, 
    TouchableOpacity, 
    FlatList, 
    Modal, 
    Text 
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { Categories } from "@/components/categories";

export default function Index(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />

                <TouchableOpacity activeOpacity={0.8}>
                    <MaterialIcons name="add" size={32} color={colors.purple.Indigo} />
                </TouchableOpacity>  
            </View>

            <Categories />

            <FlatList
                data={["1", "2", "3"]}
                keyExtractor={item => item}
                renderItem={() => (
                <Link 
                    name="Rocketseat" 
                    url="https://rocketseat.com.br" 
                    onDetails={() => console.log("Morgana, eu te amo.")}
                />
            )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />

            <Modal transparent visible={true}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Curso</Text>

                            <TouchableOpacity>
                                <MaterialIcons 
                                    name="close" 
                                    size={20} 
                                    color={colors.gray.Silver}
                                />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalLinkName}>Rocketseat</Text>
                        <Text style={styles.modalUrl}>https://rocketseat.com.br</Text>

                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secondary" />
                            <Option name="Abrir" icon="language" />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

