function isSubsequence(str1, str2) {
    let i = 0
    let j = 0

    if (!str1) return false

    while (j < str2.length) {
        if (str2[j] === str1[i]) i++
        if (i === str1.length) return true
        j++
    }
    return false

}

let string1 = 'hey all'
let string2 = 'hey allsssss'

console.log(isSubsequence(string1, string2))