'use strict'

export const getAllCharacters = async () => {
    const url = `https://naruto-api.fly.dev/api/v1/characters`
    const response = await fetch(url)
    const data = await response.json()
    
    return data
}

export const getCharactersKara = async () => {
    const url = `https://api.narutodb.xyz/kara?limit=32`
    const response = await fetch(url)
    const data = await response.json()
    
    return data.kara
}

export const getCharactersAkatsuki = async () => {
    const url = `https://api.narutodb.xyz/akatsuki?limit=44`
    const response = await fetch(url)
    const data = await response.json()
    
    return data.akatsuki
}

export const getCharactersBijuus = async () => {
    const url = `https://api.narutodb.xyz/tailed-beast?limit=10`
    const response = await fetch(url)
    const data = await response.json()
    
    return data.tailedBeasts
}