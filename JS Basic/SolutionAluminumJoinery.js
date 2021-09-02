function SolutionAluminumJoinery(arr) {
    let index = 0
    let quantity = Number(arr[index])
    index++
    let size = arr[index]
    index++
    let delivery = arr[index]
    let sum = 0

    if (quantity > 10) {




        if (size === "90X130") {
            sum = quantity * 110
            if (quantity > 30 && quantity < 60) {
                sum = sum * 0.95
            } else if (quantity > 60) {
                sum = sum * 0.92
            }

        } else if (size === "100X150") {
            sum = quantity * 140
            if (quantity > 40 && quantity < 80) {
                sum = sum * 0.94
            } else if (quantity > 80) {
                sum = sum * 0.90
            }
        } else if (size === "130X180") {
            sum = quantity * 190
            if (quantity > 20 && quantity < 50) {
                sum = sum * 0.93
            } else if (quantity > 50) {
                sum = sum * 0.88
            }
        } else if (size === "200X300") {
            sum = quantity * 250
            if (quantity > 25 && quantity < 50) {
                sum = sum * 0.91
            } else if (quantity > 50) {
                sum = sum * 0.86
            }

        }

        if (delivery === "With delivery") {
            sum = sum + 60
        } else {

        }

        if (quantity > 99) {
            sum = sum * 0.96
        }
        console.log(`${sum.toFixed(2)} BGN`)
    } else {
        console.log(`Invalid order`)
    }
}
SolutionAluminumJoinery
    ([
        "105",
        "100X150",
        "With delivery"
    ])
