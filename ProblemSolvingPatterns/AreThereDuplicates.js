const areThereDuplicates = (arr) => {
    // INPUT: array of variables
    // Check is arr is empty, if so return false
    // Create obj, map arr to object. For each variable if object already exists, return true. If loop finishes, return false
    // OUTPUT: True is any two variables are the same, False if all unique

    let counter = {}

    for (let i = 0; i < arr.length; i++) {
        let symb = arr[i]
        if (!counter[symb]) counter[symb] = 1
        else if (counter[symb] > 0) return true
    }
    return false

}

let arr = [0, 1, 2, 3, 4, 5, 6, 'a', 'b', 'c']

console.log(areThereDuplicates(arr))