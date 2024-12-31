import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "links-storage"

export type LinkStorage = {
    id: string,
    name: string,
    url: string,
    category: string,
}

//Utilizamos funções assíncronas quando estamos lidando com dados que não dependem apenas de nossa aplicação.

async function get(): Promise<LinkStorage[]> {
    const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY)
    //Se tiver conteúdo dentro da variável storage, retorna isso em JSON, se não, traz um objeto vazio
    const response = storage ? JSON.parse(storage) : []

    return response
}

async function save(newLink : LinkStorage) {
    try {
        const storage = await get()
        //JSON.stringfy faz a conversão de array para string.
        const updated = JSON.stringify([...storage, newLink])

        await AsyncStorage.setItem(LINKS_STORAGE_KEY, updated)

    } catch (error) {
        throw error
    }
}

async function remove(id: string){
    try {
        const storage = await get()

        const updated = storage.filter((link) => link.id !== id)

        await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(updated))

    } catch (error) {
        throw error
    }
}

export const linkStorage = {get, save, remove}