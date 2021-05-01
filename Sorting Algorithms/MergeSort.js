const merge = (arr1, arr2) => {
    let sorted = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sorted.push(arr1[i])
            i++
        } else if (arr2[j] < arr1[i]) {
            sorted.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        sorted.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        sorted.push(arr2[j])
        j++
    }

    return sorted
}



const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([1000, 444, 555, 222, 666, 111, 8888, 333, 22, 55]))