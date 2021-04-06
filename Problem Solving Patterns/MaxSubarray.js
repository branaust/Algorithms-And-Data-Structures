const MaxSubarray = (arr) => {
    let maxSum = 0
    let currentSum = 0

    for (let i = 0; i < arr.length; i++) {
        currentSum = Math.max((arr[i] + currentSum), 0)
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
}

console.log(MaxSubarray([-1, 4, -3, 1, 2, 3]))