const sameFrequency = (num1, num2) => {
    // INPUT : 2 poitive numbers
    // LOGIC : First, convert numbers to string and split into array
    // create empty object, create two seperate for-each statements
    // 1) Loop through num1, insert frequncy of each num to obj
    // 2) Loop through num2, check if the num exists in object, if so --
    // OUTPUT: BOOLEAN
    // CHECK if nums are equal in length

    let newNum1 = num1.toString().split('')
    let newNum2 = num2.toString().split('')

    if (newNum1.length !== newNum2.length) return false

    let checker = {}


    for (let i = 0; i < newNum1.length; i++) {
        let num = newNum1[i]
        checker[num] ? checker[num] + 1 : checker[num] = 1
        console.log(checker)
    }

    for (let j = 0; j < newNum2.length; j++) {
        let num = newNum2[j]
        if (!checker[num]) return false
        else checker[num] -= 1
        console.log(checker)
    }

    return true
}

const num1 = 12356
const num2 = 4321

console.log(sameFrequency(num1, num2))