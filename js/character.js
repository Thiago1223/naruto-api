'use strict'

import { getAllCharacters } from "./api.js"
console.log(getAllCharacters)

const personagens = await getAllCharacters()
const a = document.getElementById('card')

a.addEventListener('click', () => {
    console.log('a')
})

