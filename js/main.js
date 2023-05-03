// 'use strict'

// class main extends HTMLElement {
//     constructor() {
//         super()
//         this.shadow = this.attachShadow({ mode: 'open' })  
//         this.imagem_logo = null   
//         this.imagem_meet = null
//         this.imagem_naruto = null
//     }

//     static get observedAttributes(){
//         return ['imagem_logo', 'imagem_meet', 'imagem_naruto']
//     }

//     attributeChangedCallback(nameAttr, oldValue, newValue){
//         this[nameAttr] = newValue
//     }

//     connectedCallback() {
//         this.shadow.appendChild(this.component())
//         this.shadow.appendChild(this.styles())

// }

// styles(){
//     const css = document.createElement('style')
//     css.textContent = `
//     .container-main{
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         gap: 24px;
//     }
//     .container-conteudo{
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         gap: 18px;
//     }
//     .naruto{
//         position: absolute;
//         right: 32px;
//         top: 62px;
//     }
//     /* MOBILE */
//     @media (max-width:640px){
//         .logo{
//             width: 360px;
//         }
//         .naruto{
//             display: none;
//         }
//         .container-conteudo{
//             gap: 24px;
//         }
//     }
//     `
//     return css
// }

// component(){

//     const container = document.createElement('div')
//     container.classList.add('container-main')

//     const imgTitle = document.createElement('img')
//     imgTitle.classList.add('logo')

//     const containerConteudo = document.createElement('div')
//     containerConteudo.classList.add('container-conteudo')

//     const imgMeet = document.createElement('img')
    
//     // const imgNaruto = document.createElement('img')
//     // imgNaruto.classList.add('naruto')

//     container.append(imgTitle, containerConteudo)
//     containerConteudo.append(imgMeet)

//     return container

// }

// }

// customElements.define('container-main', main)