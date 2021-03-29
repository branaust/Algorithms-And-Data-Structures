const isMatch = (str1, str2) => {
    let counter = 0
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            console.log(str1[i], str2[j])
            if (str2[j] !== str1[i]) {
                break
            } else if (j === str2.length - 1) {
                counter++
            } else {
                i++
            }
        }
    }
    return counter
}

let str1 = 'kikiannakiki'
let str2 = 'ki'

console.log(isMatch(str1, str2))