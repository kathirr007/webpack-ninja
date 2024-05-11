const {add: addFunctions, subtract} = require('./functions')

const addition = addFunctions.add(2,3)
const additionAndMultiplication = addFunctions.addAndMultiply(2,3)
const subtraction = subtract(5,3)

console.log('addition', addition)
console.log('additionAndMultiplication', additionAndMultiplication)
console.log('subtraction', subtraction)