'use strict'

import { getCharactersAkatsuki } from "./api.js"

const personagens = await getCharactersAkatsuki()

const criarCard = (personagem) => {

    const card = document.createElement('a')
    card.classList.add('card')
    card.setAttribute('href', '../pages/informacao.html')

    card.addEventListener('click', () => {
        localStorage.setItem('characterId', personagem.id)
        localStorage.setItem('characterImage', personagem.images[0]?.split('png')[0] + 'png')
        localStorage.setItem('characterName', personagem.name)
        localStorage.setItem('characterBirthDate', personagem.personal.birthdate)
        localStorage.setItem('characterOccupation', personagem.personal.occupation)
        localStorage.setItem('characterSex', personagem.personal.sex)
        localStorage.setItem('characterStatus', personagem.personal.status)
        localStorage.setItem('characterAffiliation', personagem.personal.affiliation[0])
    })

    const imgPersonagem = document.createElement('img')
    imgPersonagem.classList.add('personagem')

    if (personagem.images == '') {
        imgPersonagem.src = '../img/no-image.png'
    } else {
        imgPersonagem.src = personagem.images[0]?.split('png')[0] + 'png'
    }

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