function BonusScoringSystem(arr) {
    let input = arr.map(Number)
    let students = input.shift()
    let lections = input.shift()
    let bonus = input.shift()
    let theBest = input.sort((a, b) => b - a).shift()
    let total = (theBest / lections) * (5 + bonus)
    let total2 = Math.ceil(total)

    console.log(`Max Bonus: ${total2}.`);
    console.log(`The student has attended ${theBest} lectures.`);
}
BonusScoringSystem(
    [
        '10', '30', '14', '8',
        '23', '27', '28', '15',
        '17', '25', '26', '5',
        '18'
    ]
)