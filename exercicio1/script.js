function imprimirComidasFavoritas (){
    let nomeDoUsuario = prompt('Digite seu nome:')
    let comidaFavorita1 = prompt('Digite sua primeira comida favorita:')
    let comidaFavorita2 = prompt('Digite sua segunda comida favorita:')
    let comidaFavorita3 = prompt('Digite sua terceira comida favorita:')
    console.log(`Estas são as comidas favoritas de ${nomeDoUsuario}:\n${comidaFavorita1};\n${comidaFavorita2};\n${comidaFavorita3}.`)
}

imprimirComidasFavoritas()