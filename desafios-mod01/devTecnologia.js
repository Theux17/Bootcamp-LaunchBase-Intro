const usuarios = [
    {nome: "José", tecnologias: ["HTML", " CSS"] },
    {nome: "Carla", tecnologias: ["JavaScript", " CSS"]},
    {nome: "Bruna", tecnologias: ["HTML", " Node.js"] },
]

for(let i = 0; i < usuarios.length; i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias} `)
      
}