import _ from 'lodash'
import * as style from './index.css'
import './clearButton'

console.log(style)

const buttonEl = document.getElementById('button1')
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
