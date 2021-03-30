const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
            if (j === arr.length - 1) {
                let temp = arr[i]
                arr[i] = arr[min]
                arr[min] = temp
                console.log(arr)
            }
        }
    }
    return arr
}

console.log(selectionSort([20,4,44,23,6,33,26,1,2,777,3]))