const averagePair = (arr, target) => {
    // INPUT: array of numbers, target value
    // OBJECTIVE: search for the sum of two numbers that equals the target value
    // OUTPUT: BOOLEAN, if pair exists - true, else false

    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let avg = (arr[left] + arr[right] / 2)

        if (avg === target) {
            return true
        } else if (avg > target) {
            right--
        } else {
            left++

        }
    }
    return false

}

console.log(averagePair([-5, -3, -2, -1, 0, 2, 3, 4, 6, 12], 4))