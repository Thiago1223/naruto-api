'use strict'

class main extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })  
        this.imagem_logo = null   
        this.imagem_meet = null
        this.imagem_naruto = null
        this.container_button = null
    }

    static get observedAttributes(){
        return ['imagem_logo', 'imagem_meet', 'imagem_naruto', 'container_button']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())

}

styles(){
    const css = document.createElement('style')
    css.textContent = `
    .container-main{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
    }
    .container-conteudo{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 18px;
    }
    .naruto{
        position: absolute;
        right: 32px;
        top: 62px;
    }
    .container-button{
        width: 380px;
        height: 100px;
        background-color: #000;
        border-radius: 10px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        font-family: 'Itim';
        cursor: pointer;
        text-decoration: none;
    }
    /* MOBILE */
    @media (max-width:640px){
        .logo{
            width: 320px;
        }
        .meet{
            width: 320px;
        }
        .naruto{
            display: none;
        }
        .container-conteudo{
            gap: 24px;
        }
        .container-button{
            width: 320px;
        }
    }
    `
    return css
}

component(){

    const container = document.createElement('div')
    container.classList.add('container-main')

    const imgTitle = document.createElement('img')
    imgTitle.classList.add('logo')
    imgTitle.src = this.imagem_logo

    const containerConteudo = document.createElement('div')
    containerConteudo.classList.add('container-conteudo')

    const imgMeet = document.createElement('img')
    imgMeet.classList.add('meet')
    imgMeet.src = this.imagem_meet
    
    const imgNaruto = document.createElement('img')
    imgNaruto.classList.add('naruto')
    imgNaruto.src = this.imagem_naruto

    const containerButton = document.createElement('a')
    containerButton.classList.add('container-button')
    containerButton.textContent = this.container_button
    containerButton.setAttribute('href', '../../pages/home.html')

    container.append(imgTitle, containerConteudo, imgNaruto)
    containerConteudo.append(imgMeet, containerButton)

    return container

}

}

customElements.define('main-naruto', main)