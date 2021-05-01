const swap = (arr, i, j) => {
    let temp = arr[j]
    arr[i] = arr[j]
    arr[j] = temp
}

const pivot = (arr, start = 0, end = arr.length + 1) => {
    let pivot = arr[start]
    let swapIdx = start

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
}