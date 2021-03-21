const uniqueVals = (arr) => {
    if (arr.length === 0) { return 0 }

    i = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

let arr = [0, 1, 1, 2, 2, 3, 4, 4, 5, 6, 7]

console.log(uniqueVals([]))