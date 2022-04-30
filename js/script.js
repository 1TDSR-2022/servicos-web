//console.log('Estou no arquivo Externo!')

            //COMENTÁRIO DE LINHA
            /*
                    COMENTÁRIO DE BLOCO
            */

//DECLARAÇÃO DE VARIÁVEIS COM var
var nome = "Alê"
//CONCATENAÇÃO UTILIZAR O SINAL DE ( + )
console.log("Meu nome é : " + nome)

//DECLARAÇÃO DE VARIÁVEIS COM let
let sobrenome = "Carlos"
console.log("Meu nome completo é : " + (nome + " " + sobrenome) )

//VETORES / ARRAYS / LISTAS / COLEÇÕES
var frutas = ["maçã","banana","laranja","uva","kiwi"]
//Imprimindo o conteúdo do array console.table(frutas)

//Verificando o primeiro elemento do array.
// console.log("Primeiro elemento : " + frutas[0])

//Verificando o tamanho do array
 //console.log("Tamnho do array : " + frutas.length)

//Verificando o último elemento do array.
//console.log("Primeiro elemento : " + frutas[frutas.length - 1])

//Adicionando um item ao final do array
// frutas.push("melancia")
// console.table(frutas)

//Remover um item ao final do array
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
// console.log("A ocorrência foi encontrada no índice : " + posicao)
// frutas.splice(posicao,posicao)
// console.table(frutas)

//Iterando um array com loop FOR
// for(let x = 0; x < frutas.length ; x++){
//     console.log("A FRUTA É : " + frutas[x])
// }

//Iterando um array com loop FOROF
// for (let fruta of frutas) {
//     console.log("A FRUTA É : " + fruta)
// }


//Iterando um array com loop FORIN
// for (let indice in frutas) {
//     console.log("A FRUTA É : " + frutas[indice])
// }


//Escreva um programa em JavaScript que apresente 
//uma caixa de alerta para o usuário com uma informação qualquer. VALENTINA
//alert("oi prof")

//Faça um programa JavaScript que contenha 3 números e o programa calculará a média aritmética desses números.
// let numA = 5
// let numB = 10
// let numC = 7
// let media = (numA + numB + numC) / 3
// console.log("A média é: " + media)

//Faça um programa JavaScript em que você informará sua altura e peso e o programa calculará o seu IMC.
//Apresente o resultado em um console.log
// let altura = 1.80 
// let peso=80
// let imc = peso/(altura*altura)
// console.log("O seu imc é: "+ imc)

//DECLARAÇÃO DE CONSTANTES com const
//utilizamos as contantes para armazenar geralmente os
// elementos que vamos trabalhar.
const elementoLogo = document.querySelector("#logo")

//Utilizando a função AddEventListenner para escutar possíveis
//eventos que ocorram com o elemento.
elementoLogo.addEventListener("click",function(){
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})

//Selecionando elementos com NOTAÇÃO CSS
//Ex: listaDeLi = ['li', 'li']
const listaDeLi = document.querySelectorAll("li")

for (const elementoLi of listaDeLi) {
    console.log("Conteudo do <li>: " + elementoLi.innerHTML )
}