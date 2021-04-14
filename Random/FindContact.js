const FindContact = (contacts, nums, input) => {
    let foundNums = []
    let foundNames = []
    if (!nums) return false
    nums.forEach((num) => {
        num.includes(input) && foundNums.push(num)
    })
    foundNums.forEach((num) => {
        let index = nums.indexOf(num)
        foundNames.push(contacts[index])
    })
    if (!foundNums || !input.length) return false
    return foundNames
}

let contacts = ['Pim', 'Pom']
let nums = ['999999999', '778788989']
let input = '89'

console.log(FindContact(contacts, nums, input))
