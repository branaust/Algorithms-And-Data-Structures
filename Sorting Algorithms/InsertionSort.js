const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        while (arr[i] < arr[i - 1]) {
            let num = arr[i]
            arr.splice(i, 1)
            arr.splice(i - 1, 0, num)
            i = i - 1
            console.log(arr)
        }
    }
    return insertionSort
}

console.log(insertionSort([100, 82, 34, 1222, 41234, 2134, 12344536, 2323, 33421, 546, 456, 452452]))