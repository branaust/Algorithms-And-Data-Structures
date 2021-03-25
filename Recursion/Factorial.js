const factorial = (num) => {
    let total = 1
    if (num === 1) return total
    return (num * factorial(num - 1))
}

console.log(factorial(4))