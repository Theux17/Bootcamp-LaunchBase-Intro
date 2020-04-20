const classA = [
    {
        name: "Mayk",
        grade: 9.8
    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "Fulano",
        grade: 2
    },
    {
        name: "Mais um Aluno",
        grade: 10
    }
]


const classB = [
    {
        name: "Cleiton",
        grade: 10
    },
    {
        name: "Robson",
        grade: 10
    },
    {
        name: "Siclano",
        grade: 0
    },
    {
        name: 'Aluno Novo',
        grade: 5
    }

]

function calculateAverage(students) {
    let soma = 0

    for (let i = 0; i < students.length; i++) {
        soma = soma + students[i].grade
    }

    const averange = soma / students.length

    return averange
}


function sendMessage(averange, turma) {
    if (averange > 5) {
        console.log(` ${turma} average: ${averange}. Congrats!`)
    } else {
        console.log(` ${turma} average: ${averange}. Is not good.`)
    }

}

function markAsFlunked(student) {
    student.flunked = false; 

    if (student.grade < 5) {
        student.flunked = true 
    }
}


function sendMessageFlunked(student) {
    if (student.flunked) {
        console.log(`O student ${student.name} está flunked`)
    }
}

function studentsFlunked(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendMessageFlunked(student)
    }
}

const averange1 = calculateAverage(classA)
const averange2 = calculateAverage(classB)


sendMessage(averange1, 'Class A')
sendMessage(averange2, 'Class B')


studentsFlunked(classA)
studentsFlunked(classB)