function SolutionBalls(arr) {
    let num = Number(arr[0])
    let sum = 0
    let couterElse = 0
    let couterRed = 0
    let couterOrange = 0
    let couterYellow = 0
    let couterWhite = 0
    let couterBlack = 0

    for (let index = 1; index <= num; index++) {

        if (arr[index] === "red") {
            sum = sum + 5
            couterRed++
        } else if (arr[index] === "orange") {
            sum = sum + 10
            couterOrange++
        } else if (arr[index] === "yellow") {
            sum = sum + 15
            couterYellow++
        } else if (arr[index] === "white") {
            sum = sum + 20
            couterWhite++
        } else if (arr[index] == "black") {
            sum = sum / 2
            couterBlack++
        } else {
            sum = sum + 0
            couterElse++
        }
    }

    console.log(`Total points: ${Math.floor(sum)}`)
    console.log(`Points from red balls: ${couterRed}`)
    console.log(`Points from orange balls: ${couterOrange}`)
    console.log(`Points from yellow balls: ${couterYellow}`)
    console.log(`Points from white balls: ${couterWhite}`)
    console.log(`Other colors picked: ${couterElse}`)
    console.log(`Divides from black balls: ${couterBlack}`)

}
SolutionBalls
    ([
        "5",
        "red",
        "red",
        "ddd",
        "ddd",
        "ddd"
    ])
