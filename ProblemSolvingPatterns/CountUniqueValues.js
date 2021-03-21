const uniqueVals = (arr) => {
    // INPUT: sorted array
    // if i !==j i++, j++
    // if i === j i++, i=j
    i = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1

    // OUTPUT: number of unique values
}

let arr = [0, 1, 1, 2, 2, 3, 4, 4, 5, 6, 7]

console.log(uniqueVals(arr))