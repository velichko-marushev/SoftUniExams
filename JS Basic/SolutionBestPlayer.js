function SolutionBestPlayer(arr) {
    let index = 0
    let bestPlayer = arr[index]
    index++
    let goals = Number(arr[index])



    for (let index = 0; index < arr.length; index++) {
        let curentPlayr = arr[index]
        index++
        let curentGoals = arr[index]
        if (arr[index] === "END") {
            break
        }
        if (curentGoals >= 10) {
            break
        }

        if (curentGoals > goals) {
            bestPlayer = curentPlayr
            goals = curentGoals

        }



    }
    if (goals >= 3) {
        console.log(`${bestPlayer} is the best player!`)
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`)
    } else {
        console.log(`${bestPlayer} is the best player!`)
        console.log(`He has scored ${goals} goals.`)

    }
}
SolutionBestPlayer
    ([
        "Neymar", "2",
        "Ronaldo",
        "1",
        "Messi",
        "3",
        "END"
    ])
