import * as style from './clearButton.css'

console.log(style)

const buttonEl = document.createElement('button')
buttonEl.innerText = 'Clear'
buttonEl.classList.add('button')
// buttonEl.classList.add(style.button)

buttonEl.onclick = function() {
  alert('Clicked clear button')
}

document.body.appendChild(buttonEl)
