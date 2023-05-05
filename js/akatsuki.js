'use strict'

import { getCharactersAkatsuki } from "./api.js"

const personagens = await getCharactersAkatsuki()

const criarCard = (personagem) => {

    const card = document.createElement('a')
    card.classList.add('card')
    card.setAttribute('href', '../pages/informacao.html')

    const imgPersonagem = document.createElement('img')
    imgPersonagem.classList.add('personagem')
    imgPersonagem.src = personagem.images[0]?.split('png')[0] + 'png'

    const textPersonagem = document.createElement('p')
    textPersonagem.textContent = personagem.name

    card.append(imgPersonagem, textPersonagem)

    return card

}

export const carregarCardAkatsuki = () => {
    const container = document.getElementById('container')
    const cards = personagens.map(criarCard)

    container.replaceChildren(...cards)
}