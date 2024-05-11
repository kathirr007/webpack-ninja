import _ from 'lodash'

document.getElementById('button1').addEventListener('click', function() {
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