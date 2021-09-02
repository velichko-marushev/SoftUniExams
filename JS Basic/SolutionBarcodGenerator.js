function SolutionBarcodGenerator(arr) {
    let index1 = arr[0]
    let index2 = arr[1]
    let sum = ""

    for (let i = index1[0]; i <= index2[0]; i++) {
        for (let j = index1[1]; j <= index2[1]; j++) {
            for (let k = index1[2]; k <= index2[2]; k++) {
                for (let l = index1[3]; l <= index2[3]; l++) {

                    if ((i % 2 !== 0) && (j % 2 !== 0) && (k % 2 !== 0) && (l % 2 !== 0)) {
                        sum = sum + i + j + k + l + ' '
                    }
                }

            }

        }
    }
    console.log(sum)
}   
SolutionBarcodGenerator
    ([
        "3256",
        "6579"
    ])

