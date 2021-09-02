function SolutionAddBags(arr) {
    let index = 0
    let priceBag = Number(arr[index])
    index++
    let kiloBag = Number(arr[index])
    index++
    let leftDays = Number(arr[index])
    index++
    let quantityBags = Number(arr[index])
    let sum = 0

    if (kiloBag < 10) {
        sum = priceBag * 0.2

    } else if (kiloBag >= 10 && kiloBag <= 20) {
        sum = priceBag * 0.5
    } else {
        sum = priceBag
    }

    if (leftDays > 30) {
        sum = sum * 1.10
    } else if (leftDays >= 7 && leftDays <= 30) {
        sum = sum * 1.15
    } else {
        sum = sum * 1.4
    }

    let totalPrice = (sum * quantityBags).toFixed(2)


    console.log(`The total price of bags is: ${totalPrice} lv.`)

}
SolutionAddBags
    ([
        "25.50",
        "5",
        "36",
        "6"
    ])
