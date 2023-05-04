'use strict'

import { carregarCardPersonagem } from './character.js'
import { carregarCardKara } from './kara.js'
import { carregarCardBijuus } from './bijuus.js'
import { carregarCardAkatsuki } from './akatsuki.js'

const routes = {
    '/characters' : '/pages/characters.html',
    '/kara' : '/pages/kara.html',
    '/bijuus' : '/pages/bijuus.html',
    '/akatsuki' : '/pages/akatsuki.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    if (window.location.pathname == '/characters') {
        carregarCardPersonagem()
    } else if (window.location.pathname == '/kara') {
        carregarCardKara()
    } else if (window.location.pathname == '/bijuus') {
        carregarCardBijuus()
    } else if (window.location.pathname == '/akatsuki') {
        carregarCardAkatsuki()
    }

}

window.route = route