const usuarios = [
    {nome: 'José', tecnologias: ['HTML',  'CSS'] },
    {nome: 'Carla', tecnologias: ['JavaScript', 'CSS'] },
    {nome: 'Bruna', tecnologias: ['HTML', 'Node.js'] }
]

// Busca por tecnologia
function checarDadosDoUsuario (usuario) {
    for (let i = 0; i < usuario.tecnologias.length; i++){
        if(usuario.tecnologias[i] == 'CSS')
        return true
    }    
        return false
}

for (let i = 0; i < usuarios.length; i++){
    const usuarioTrabalhaComCSS = checarDadosDoUsuario(usuarios[i])

    if (usuarioTrabalhaComCSS){
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}