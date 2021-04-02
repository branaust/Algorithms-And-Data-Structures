// const getDigit = (num, place) => {
//     num = (("" + num).split(""))
//     let index = (num.length - 1) - place
//     return (num[index] * 1)

// }

const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
}

const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

console.log(getDigit(41275, 4))