// HASH TABLES - A data structure that is used to store keys/value pairs.
// It uses a hash function to compute an index into an array in which an element will be inserted

const hash = (key, arrayLen) => {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        // map "a" to 1, "b" to 2
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total
}

console.log(hash("purples", 49))