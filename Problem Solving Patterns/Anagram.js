const isAnagram = (anagram1, anagram2) => {
    // INPUT: 2 strings
    // LOGIC: Check to see if the two strings have the same letters (frequency matters)
    // TEST CASE: length of words are not the same // FALSE
    // OUTPUT: Boolean

    if (anagram1.length !== anagram2.length) {
        return false
    }

    let output = {}

    for (i = 0; i < anagram1.length; i++) {
        let letter = anagram1[i]
        output[letter] ? output[letter] += 1 : output[letter] = 1;
        console.log(output)
    }

    for (i = 0; i < anagram2.length; i++) {
        let letter = anagram2[i]
        if (!output[letter]) return false
        else {
            output[letter] -= 1
        }
    }
    return true

}

anagram1 = "anagram"
anagram2 = "margana"

console.log(isAnagram(anagram1, anagram2))