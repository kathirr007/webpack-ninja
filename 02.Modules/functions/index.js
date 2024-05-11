// CommonJs
/* 
const add = require('./add')
const subtract = require('./subtract')

module.exports = {
    add, subtract
} */

// ==============

// ES modules
import addFunctions from './add'
import subtract from './subtract'

export {
    addFunctions, subtract
}