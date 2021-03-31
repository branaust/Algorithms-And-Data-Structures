const mergeSort = (arr1, arr2) => {
    let sorted = []
    let i = 0
    let j = 0
    console.log(arr1.length)

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sorted.push(arr1[i])
            i++
        } else if (arr2[j] < arr1[i]) {
            sorted.push(arr2[j])
            j++
        }
    }

    if (i === arr1.length && j < arr2.length) {
        for (j; j < arr2.length; j++) {
            sorted.push(arr2[j])
        }
    }

    if (j === arr2.length && i < arr1.length) {
        for (i; i < arr1.length; i++) {
            sorted.push(arr1[i])
        }
    }

    return sorted
}

console.log(mergeSort([2, 4, 6, 8, 9, 10], [1, 3, 5, 7]))