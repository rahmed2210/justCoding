//============================== BUILD A GRADE CALCULATOR ========================================

// student score, total possible score

// 15/20 --> You got a C (75%!)

// A 90-100,  B 80-89,   C 70-79,  D 69-60,  F 0-59


// Use The Funcation, The Arguments, The If Statement, The Return keyword


const gradeCalc = function (score, totalScore) {
    const percent = (score / totalScore) * 100
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
  
  const result = gradeCalc(17, 20)
  console.log(result)
  
