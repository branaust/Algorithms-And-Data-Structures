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
            }
        }
    }
    return arr
}

console.log(selectionSort([5, 7, 10, 2, 5, 2, 44, 2222, 43423, 345645, 634523]))