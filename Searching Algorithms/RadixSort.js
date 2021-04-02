const getDigit = (num, place) => {
    num = (("" + num).split(""))
    let index = (num.length - 1) - place
    return num[index]

}

console.log(getDigit(41275, 4))