function SolutionAgencyProfit(arr) {
    let index = Number(0)
    let name = arr[index]
    index++
    let countBigTikets = Number(arr[index])
    index++
    let countSmallTiket = Number(arr[index])
    index++
    let priseBig = Number(arr[index])
    index++
    let priseService = Number(arr[index])

    let priseSmall = priseBig * 0.30
    let endBigPrise = priseBig + priseService
    let endSmallPrise = priseSmall + priseService

    let profit = ((endBigPrise * countBigTikets) + (endSmallPrise * countSmallTiket)) * 0.2


    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`)


}
SolutionAgencyProfit
    ([
        "WizzAir",
        "15",
        "5",
        "120",
        "40"
    ])
