// HASH TABLES - A data structure that is used to store keys/value pairs.
// It uses a hash function to compute an index into an array in which an element will be inserted

const hash = (key, arrayLen) => {
    let total = 0
    for (let char of key) {
        // map "a" to 1, "b" to 2
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen;
    }
    return total
}

console.log(hash("purp", 5))