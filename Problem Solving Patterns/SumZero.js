const sumZero = (nums) => {
    let i = 0
    let j = nums.length - 1


    while (i < j) {
        let sum = nums[i] + nums[j]
        if (sum === 0) {
            return [nums[i], nums[j]]
        }
        else if (sum < 0) {
            i++
        }
        else {
            j--
        }
    }
}

let nums = [-3, -2, -2, 0, 1, 2, 3]

console.log(sumZero(nums))