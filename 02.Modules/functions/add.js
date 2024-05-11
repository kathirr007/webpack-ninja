function add(a,b) {
    return a + b;
}

function addAndMultiply(a,b) {
    return a + b * (a * b);
}

/* module.exports = {
    add,
    addAndMultiply
}; */

const addFunctions = {
    add, 
    addAndMultiply
}

// export default addFunctions

// OR

export default {
    add, addAndMultiply
}

// OR

/* export {
    add, addAndMultiply
} */