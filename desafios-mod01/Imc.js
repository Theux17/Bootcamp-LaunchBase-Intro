const nome = 'Aparecido'
const peso = 90.4
const altura = 1.77
const sexo = 'F'

const imc = peso / (altura * altura)

if (imc >= 30 ) {
    console.log(`${nome}, O seu IMC é ${imc}, você está acima do peso.`)
}
else {
    console.log(`${nome}, o seu IMC é ${imc} você não está acima do peso!`)
}
