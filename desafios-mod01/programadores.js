// Vetores e objetos

const programadores = {
    nome: 'Matheus',
    idade: 18,
    tecnologias: [
        {nome: 'C++', especialidade: 'Desktop'},
        {nome: 'Python', especialidade: 'Data Science'},
        {nome: 'JavaScript', especialidade: 'Web/Mobile'},
    
    ]
}

console.log(`O usuário ${programadores.nome} tem ${programadores.idade} anos e usa a tecnologia ${programadores.tecnologias[0].nome} com especialidade em ${programadores.tecnologias[0].especialidade}`)
