const sameFrequency = (num1, num2) => {
    // INPUT : 2 poitive numbers
    // LOGIC : First, convert numbers to string and split into array
    // create empty object, create two seperate for-each statements
    // 1) Loop through num1, insert frequncy of each num to obj
    // 2) Loop through num2, check if the num exists in object, if so --
    // OUTPUT: BOOLEAN
    // CHECK if nums are equal in length


    let newNum1 = num1.toString()
    let newNum2 = num2.toString()

    if (newNum1.length !== newNum2.length) return false;

    for (let i = 0; i < newNum1.length; i++) {
        if (newNum1.indexOf(newNum2[i]) <= -1) return false
    }

    return true;
}


const num1 = 1234
const num2 = 4321

console.log(sameFrequency(num1, num2))