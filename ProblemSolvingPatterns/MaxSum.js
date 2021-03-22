const maxSum = (arr, num) => {
    // INPUT single array, number
    // LOGIC find the max sum of 'num' consecutive digits in the array 
    // OUTPUT single number : max sum
    // EDGE CASE if arr is empty,  return null
    // EDGE CASE if num > arr.length return null

    if (num > arr.length) return null

    let maxSum = 0
    let tempSum = 0

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum

}

console.log(maxSum([5, 2, 2, 3, 12], 3))