const binarySearch = (arr, target) => {
    let left = 0
    let right = arr.length - 1
    let middle = Math.round((left + right) / 2)

    while (arr[middle] !== target && left <= right) {
        if (target < arr[middle]) {
            right = middle - 1
        }
        if (target > arr[middle]) {
            left = middle + 1
        }
        middle = Math.round((left + right) / 2)
    }
    if (arr[middle] === target) {
        return middle
    }
    else { return -1 }
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))