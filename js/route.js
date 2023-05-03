'use strict'

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

}

window.route = route