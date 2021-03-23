const minSubArray = (arr, target) => {
    // INPUT: array of numbers, target val
    // Logic: find the minLength within the array that is greater than or equal to the target val
    // Store minLength
    // Store tempSum
    // Math.min(minLength, tempSum)
    // METHOD: Sliding Window


    // OUTPUT: Number (minLen)

    if (!arr || !arr.length || !target) return 0;

    let left = 0;
    let right = 1;

    let sum = arr[left];
    let minLen = Infinity;

    while (right <= arr.length) {
        if (sum < target) {
            sum += arr[right++];
        } else {
            if (minLen > right - left) minLen = right - left;
            sum -= arr[left++];
        }
    }
    return minLen < Infinity ? minLen : 0;
}




let arr = [34, 21, 11, 45, 22, 12, 2, 6, 77, 20, 1]
let target = 106

console.log(minSubArray(arr, target))