const countDownNum = (num) => {
    if (num <= 0) {
        console.log('All Done')
        return
    }
    console.log(num)
    num--
    countDownNum(num)
}

countDownNum(5)