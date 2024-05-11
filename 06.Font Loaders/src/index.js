import _ from 'lodash'
import './fonts'
import * as style from './index.scss'
import './clearButton'
import webpackLogo from './assets/awesome_webpack_branding.png'
// import avifLogo from './assets/avif-logo.webp'


console.log(style)

const buttonEl = document.getElementById('button1')
const logoEl = document.getElementById('webpackLogo')
// const avifLogoEl = document.getElementById('avifLogo')
const pageTitleEl = document.getElementById('pageTitle')

console.log(pageTitleEl)

// pageTitleEl.classList.add(['roboto-logo'])
pageTitleEl.classList.add([style['roboto-thin']])

logoEl.src = webpackLogo
// // avifLogoEl.src = avifLogo

buttonEl.addEventListener('click', function() {
    const h1El = document.getElementById('pageTitle')
    const featuresListEl = document.getElementById('featuresList')

    const listItems = ['bundling', 'tree shaking', 'compile', 'transpile']

    h1El.innerHTML = 'Updated page title'

    _.forEach(listItems, function(item) {
        const liEl = document.createElement('li')

        liEl.textContent = item;

        featuresListEl.appendChild(liEl)
    })

})

buttonEl.classList.add(['button'])
