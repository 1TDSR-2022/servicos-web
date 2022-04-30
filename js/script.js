console.log('Estou no arquivo Externo!')

//COMENTARIO DE LINHA
            /* 
                COMENTARIO DE BLOCO
            */
    
// DECLARAÇÃO DE VARIÁVEL COM var
var nome = "Abner"
//CONTACATENAÇÃO UTILIZAR O SINAL DE (+)
console.log("Meu nome é : " + nome)

//DECLARAÇÃO DE VARIÁVEL COM let
let sobrenome = "Ferreira"
console.log("Meu nome completo é : " + (nome + " " + sobrenome))



//VETORES / ARRAYS / LISTA / COLEÇÕES 
var frutas = ["maçã", "banana", "laranja","uva", "kiwi"]
//Imprimindo o conteúdo do array console.table(frutas)

//Verificando o primeiro elemento do array
// console.log("Primeiro elemento: " + frutas[0])

//Verificando o tamanho do array
console.log("Tamanho do array: " + frutas.length)

//Verificando o último elemento do array
// console.log("Ultimo elemento: " + frutas[frutas.length - 1])

//Adicionando um item ao final do array
// frutas.push("melancia")
// console.table(frutas)

//Remover um item do final do array
// frutas.pop()
// console.table(frutas)

//Remover um item do inicio do array
// frutas.shift()
// console.table(frutas)

//Adicionar um item ao inicio do array
// frutas.unshift("acerola")
// console.table(frutas)

//Removendo um item através do indice do array com indexOf()
// var posicao = frutas.indexOf('banana')
// console.log("A ocorrencia foi encontrada no indice : " + posicao)
// frutas.splice(posicao, posicao)
// console.table(frutas)

//Interando um array com looping FOR
// for(let x = 0; x < frutas.length ; x++){
//     console.log("A FRUTA É : " + frutas[x])
// }

//Interando um array com looping FOROF
// for (let fruta of frutas){
//     console.log("A FRUTA É : " + fruta)
// }


//Interando um array com looping FORIN
// for (let indice in frutas){
//     console.log("A FRUTA É : " + frutas[indice])
// }


//Escreva um programa em JavaScript que apresente uma caixa de alerta para o usuario com uma informação qualquer
// alert("Olá Mundo")


//Faça um programa JavaScript que contenha informará 3 números e o programa calculará a média aritmetica desses numeros
// let x = 2
// let y = 10
// let z = 21
// let media = (x + y + z) /3
// console.log("A média é : " + media)

//Faça um programa JavaScript em que você informará sua altura e peso e o programa calculará o seu IMC. Apresente o resultado em um console.log
// let altura = 1.83
// let peso = 70.5
// let imc = peso / (altura * altura)
// console.log("Meu IMC é " + imc)

//DECLARAÇÃO DE CONSTANTE
//utilizar as constante para armazenar geralmente os 
// elementos que vamos trabalhar.
const elementoLogo = document.querySelector("#logo")

//Utilizando a função AddEventListenner oara escutar possiveis 
//eventos que ocorram com o elemento 
elementoLogo.addEventListener("click", function(){
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})


//Selecionando elementos com NOTAÇÃO CSS 
//Ex : listaDeLi = ['li', 'li']
const listaDeLi = document.querySelectorAll("li")

for (const elementoLi of listaDeLi) {
    console.log("Conteúdo do <li> : " + elementoLi.innerHTML)
}

console.log("O segundo li é : " + listaDeLi[1].innerHTML)



