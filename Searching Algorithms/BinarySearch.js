const binarySearch = (arr, target) => {
    let left = 0
    let right = arr.length - 1
    let middle = (left + right) / 2

    if (!middle.isInteger) {
        middle = Math.round(middle)
    }
    if (target === middle) return middle
    if (target < middle) {
        right = middle - 1
    }
    if (target > middle) {
        left = middle + 1
    }
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7))