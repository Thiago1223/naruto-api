'use strict'

import { getAllCharacters } from "./api.js"

const personagens = await getAllCharacters()

const criarCard = (personagem) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const imgPersonagem = document.createElement('img')
    imgPersonagem.classList.add('personagem')
    imgPersonagem.src = personagem.images[0]?.split('png')[0] + 'png'

    const textPersonagem = document.createElement('p')
    textPersonagem.textContent = personagem.name

    card.append(imgPersonagem, textPersonagem)

    return card

}

export const carregarCardPersonagem = () => {
    const container = document.getElementById('container')
    const cards = personagens.map(criarCard)

    container.replaceChildren(...cards)
}