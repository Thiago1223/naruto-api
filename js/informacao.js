'use strict'

import { getCharactersById } from "./api.js"

let idCharacter = localStorage.getItem('characterId')
let imageCharacter = localStorage.getItem('characterImage')
let nameCharacter = localStorage.getItem('characterName')
let birthDateCharacter = localStorage.getItem('characterBirthDate')
let occupationCharacter = localStorage.getItem('characterOccupation')
let sexCharacter = localStorage.getItem('characterSex')
let statusCharacter = localStorage.getItem('characterStatus')
let affiliationCharacter = localStorage.getItem('characterAffiliation')

const personagens = await getCharactersById(idCharacter)
let newArray = []
newArray.push(personagens)

const criarCard = () => {

    const containerMain = document.createElement('div')
    containerMain.classList.add('container-main')

    const imgPersonagem = document.createElement('img')
    imgPersonagem.classList.add('personagem')
    imgPersonagem.src = imageCharacter

    const containerInfo = document.createElement('div')
    containerInfo.classList.add('container-info')

    const nameInfo = document.createElement('p')
    nameInfo.textContent = `Name: ${nameCharacter}`

    const birthDateInfo = document.createElement('p')
    birthDateInfo.textContent = `Birthdate: ${birthDateCharacter}`

    const occupationInfo = document.createElement('p')
    occupationInfo.textContent = `Occupation: ${occupationCharacter}`

    const sexInfo = document.createElement('p')
    sexInfo.textContent = `Sex: ${sexCharacter}`

    const statusInfo = document.createElement('p')
    statusInfo.textContent = `Status: ${statusCharacter}`

    const affiliationInfo = document.createElement('p')
    affiliationInfo.textContent = `Affiliation: ${affiliationCharacter}`

    containerMain.append(imgPersonagem, containerInfo)
    containerInfo.append(nameInfo, birthDateInfo, occupationInfo, sexInfo, statusInfo, affiliationInfo)

    return containerMain
}

const carregarCard = () => {
    const container = document.getElementById('container-main')
    const cards = newArray.map(criarCard)

    container.replaceChildren(...cards)
}

carregarCard()