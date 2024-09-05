// Challenge
console.log('\r\n <<<<<<      CHALLENGE AREA        >>>>>>>')

// Student score, total possible score
// 15 / 20  --> you got a C (75%)
// A 90-100, B 80-89, C 70-79, D 6- 69, F 0-59

let gradeCalc = function (score, totalScore) {
    let percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)!`
}

let result = gradeCalc(19, 20)
let result1 = gradeCalc(18, 20)
let result2 = gradeCalc(17, 20)
let result3 = gradeCalc(16, 20)
let result4 = gradeCalc(13, 20)


console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)


//----------------------------------------------------------------------------------------
console.log('\r\n Example 2')

let Shayaan = gradeCalc(19, 20)
let Zayn = gradeCalc(17, 20)
let Azaya = gradeCalc(18, 20)
let Wahid = gradeCalc(16, 20)
let Abir = gradeCalc(15, 20)
let Samir = gradeCalc(13, 20)
let Yousuf = gradeCalc(14, 20)
let Rubal = gradeCalc(10, 20)

console.log('Shayaan: ' + Shayaan)
console.log('Zayn: ' + Zayn)
console.log('Azaya: ' + Azaya)
console.log('Wahid: ' + Wahid)
console.log('Abir: ' + Abir)
console.log('Samir: ' + Samir)
console.log('Yousuf: ' + Yousuf)
console.log('Rubal: ' + Rubal)