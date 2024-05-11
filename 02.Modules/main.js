// const {add: addFunctions, subtract} = require('./functions') // CommonJs import

/* // individual functions import
import {addFunctions, subtract} from './functions' 

const addition = addFunctions.add(2,3)
const additionAndMultiplication = addFunctions.addAndMultiply(2,3)
const subtraction = subtract(5,3) */

// import all exported values as one single value
import * as $ from './functions'

const addition = $.addFunctions.add(2,3)
const additionAndMultiplication = $.addFunctions.addAndMultiply(2,3)
const subtraction = $.subtract(5,3)

console.log('addition', addition)
console.log('additionAndMultiplication', additionAndMultiplication)
console.log('subtraction', subtraction)