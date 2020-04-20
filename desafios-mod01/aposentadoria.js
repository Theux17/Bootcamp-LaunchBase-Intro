// Verificação de validez de aposentadoria

const nome = "Joceline"
const sexo = "F"
const idade = 42
const contribuicao = 30

const calculoDeContribuição = idade + contribuicao

const mulherPodeContribuir = sexo == 'F' && contribuicao >= 30 && calculoDeContribuição >= 85 
const homemPodeContribuir = sexo == 'M' && contribuicao >= 35 && calculoDeContribuição >= 95

if (mulherPodeContribuir || homemPodeContribuir ){
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}



