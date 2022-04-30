// // //console.log('estou no arquivo externo');
// // var nome = "Aristeu"
// // console.log("Meu nome é: " + nome)

// // let sobrenome = "José"
// // console.log("Meu nome completo é: " + nome + sobrenome)

// const elementoLogo = document.querySelector("#logo")
// elementoLogo.addEventListener("click", function() {
//     elementoLogo.innerHTML = "Serviços especializados"
//  })

// let frutas = ["maça", "banana", "laranja", "uva", "kiwi"]
// console.log("primeiro elemento: " + frutas[0])
// console.log(frutas.length)
// console.log(frutas[frutas.length - 1])
// frutas.push("Pera")
// console.log(frutas)
// frutas.pop()
// console.log(frutas)
// frutas.shift()
// console.log(frutas)
// frutas.unshift("Maçã")
// console.log(frutas)

// let index = frutas.indexOf('laranja')
// console.log("A ocorrencia foi encontrada no indice " + index)
// frutas.splice(index, 1)
// console.log(frutas)

// console.log("Interando um array em FOR JS =====")
// for(let i = 0; i < frutas.length; i++) {
//     console.log("Fruta: " + frutas[i])
// }

// for(let fruta of frutas) {
//     console.log("A fruta é: " + fruta)
// }

// for(index in frutas) {
//     console.log("A fruta é: " + frutas[index])
// }

// // alert("Mensagem qualquer")

// let a = 6
// let b = 9
// let c = 7

// media = (a + b + c) / 3
// console.log("A média é: " + media.toFixed(2))

// let h = 1.75
// let peso = 85
// imc = peso / (h * h)
// console.log("IMC: " + imc.toFixed(1))

// //Vetor de li's
const listaLi = document.querySelectorAll("li")

for (const inte of listaLi) {
    console.log("Conteudo do li: " + listaLi[1].innerHTML)
}
