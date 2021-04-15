const ReformatNumber = (num) => {
    // INPUT: 22 - 333 - 1-5- 99
    // EDGE CASE: After 1, if num.length <= 3 return num
    // EDGE CASE: If num.length === 0 return null
    if (!num) return null

    // 1) Remove all " " & "-" from string and join nums together 
    num = num.split(" ").join("")
    num = num.split("-").join("")
    num = num.split("")

    if (num.length <= 3) return num

    let counter = 1
    // 2) Every 3 nums, split nums and add "-"
    while (counter < num.length) {
        if (counter % 3 === 0) {
            num.splice(counter, 0, "-")
            counter++
        }
        counter++
    }
    // 3) Return num
    return num

    // OUTPUT: 223-331-599
}

console.log(ReformatNumber("22 - 333 - 1-5- 99"))