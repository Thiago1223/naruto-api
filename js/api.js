'use strict'

export const getAllCharacters = async () => {
    const url = `https://api.narutodb.xyz/character`
    const response = await fetch(url)
    const data = await response.json()
    
    return data
}

getAllCharacters()