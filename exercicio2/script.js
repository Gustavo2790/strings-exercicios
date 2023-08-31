const minhaString = "Eu não sou supersticioso, mas sou um pouco __________.       "
console.log(minhaString)
let textoSemEspaco = minhaString.trim();
console.log(textoSemEspaco)

let tamanhoMinhaString = minhaString.length
console.log('A quantidade de letras da string com espaços é:' , tamanhoMinhaString)
let tamanhoTextoSemEspaco = textoSemEspaco.length
console.log('A quantidade de letras da string sem espaços é:' , tamanhoTextoSemEspaco)

let textoSubstituido = textoSemEspaco.replace("__________", "sticioso")
console.log(textoSubstituido)