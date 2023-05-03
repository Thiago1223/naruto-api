'use strict'

class footer extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })  
        this.imagem_logo = null   
        this.text_copyright = 'Copyright © 2023 | Thiago Freitas'
    }

    static get observedAttributes(){
        return ['imagem_logo', 'text_copyright']
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
    .copyright{
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    .container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        font-family: 'Itim';
        font-size: 1.2rem;
    }
    /* MOBILE */
    @media (max-width:640px){
        .container{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    `
    return css
}

component(){

    const container = document.createElement('div')
    container.classList.add('container')
    
    const imgLogo = document.createElement('img')
    imgLogo.classList.add('rodape')
    imgLogo.src = '../img/footer.png'

    const textCopyright = document.createElement('p')
    textCopyright.classList.add('copyright')
    textCopyright.textContent = this.text_copyright

    container.append(imgLogo, textCopyright)

    return container

}

}

customElements.define('footer-naruto', footer)