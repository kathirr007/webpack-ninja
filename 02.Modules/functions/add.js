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

export default {
    add, addAndMultiply
}

/* export {
    add, addAndMultiply
} */