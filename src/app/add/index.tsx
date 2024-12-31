import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { linkStorage } from "@/storage/link-storage";

import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import Button from "@/components/button";

export default function Add() {
    //Estados: useState inicia-se vazio pois é o estado inicial da nossa constante
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    //Função handle para identificar uma interação do usuário na aplicação
    async function handleAdd(){
        try {
        if(!category){
            return Alert.alert("Categoria", "Selecione a categoria")
        }

        if(!name.trim()){
            return Alert.alert("Nome", "Informe o nome")
        }

        if(!url.trim()){
            return Alert.alert("URL", "Informe a URL")
        }

        await linkStorage.save({
            id: new Date().getTime().toString(),
            name,
            url,
            category,
        })

        Alert.alert("Sucesso", "Novo link adicionado", [
        { 
            text: "Ok", 
            onPress: () => router.back() 
        },
        ])
    }   catch (error) {
        Alert.alert("Erro", "Não foi possível salvar o link")
        console.log(error)
    }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.purple.BlueViolet}/>
                </TouchableOpacity>

                <Text style={styles.title}>Novo</Text>
            </View>
            
            <Text style={styles.label}>Selecione uma categoria</Text>
            <Categories onChange={setCategory} selected={category}/>

            <View style={styles.form}>
                <Input placeholder="Nome" onChangeText={setName}/>
                <Input placeholder="URL" onChangeText={setUrl} autoCapitalize="none"/>
                <Button title="Adicionar" onPress={handleAdd}/>
            </View>         
        </View>
    )
}