const maxSubarraySum = (arr, target) => {
    // INPUT: array of numbers, single number
    // LOGIC: find subarray with TARGET nums within array that makes for the highest sum
    // OUTPUT: largest number
    // NOTE: Solve using sliding window method

    if (num > arr.length) return null

    let maxSum = 0

    for (let i = 0; i < target; i++) {
        maxSum += arr[i]
    }
    let tempSum = maxSum
    for (let i = target; i < arr.length; i++) {
        tempSum = tempSum - arr[i - target] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

let arr = [22, 44, 1, 17, 23, 55, 2, 44, 5, 16, 27]
let target = 3

console.log(maxSubarraySum(arr, target))