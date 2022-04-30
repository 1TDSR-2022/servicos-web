//console.log('Estou no arquivo Externo!')

            //COMENTÁRIO DE LINHA
            /*
            //COMENTÁRIO DE BLOCO
            */

//DECLARAÇÃO DE VARIÁVEIS COM var
var nome = "Alê"
//CONCATENAÇÃO UTILIZAR O SINAL DE ( + )
console.log("Meu nome é: " + nome)

//DECLARAÇÃO DE VARIÁVEIS COM let
let sobrenome = "Carlos"
console.log("Meu nome completo é:" + (nome + " " + sobrenome))

//DECLARAÇÃO DE CONSTANTES com const
//utilizamos as constantes para armazenar eralmente os 
//elementos que vamos trabalhar.
const elementoLogo = document.querySelector("#logo")

//Utilizando a função AddEventListenner para esctar possíveis
//eventos que ocorram com o elemento
elementoLogo.addEventListener("click", function(){
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})

//VETORES / ARRAYS / LISTAS / COLEÇÕES
var frutas = ["maçã", "banana", "laranja", "uva", "kiwi"]
console.table(frutas)
//Imprimindo o conteúdo do array console.table(frutas)

//Verificando o primeiro elemento do array
// console.log("Primeiro elemento: " + frutas[0])

//Verificando o tamanho do array
//console.log("Tamanho do array: " + frutas.length)

//Verificando o último elemento do array
//console.log("Último elemento: " + frutas[frutas.lenght - 1])

//Adicionando um item ao final do array
//frutas.push("melancia")
//console.table(frutas)

//Remover um item do final do array
//frutas.pop()
//console.table(frutas)

//Remover um item do início do array
//frutas.shift()
//console.table(frutas)

//Adicionar um item do início do array
//frutas.unshift("acerola")
//console.table(frutas)

//Removendo um item através do índice do array com indexOf()
//var posicao = frutas.indexOf('banana')
//console.log("A ocorrência foi encontrada no índice: " + posicao)
//frutas.splice(posicao,posicao)
//console.table(frutas)

//Interando um array com loop FOR
//for(let x = 0; x < 10; x++){
//   console.log("A FRUTA É: " + frutas[x])
//}

//Interando um array com loop FOROF
//for (let fruta of frutas) {
//    console.log("A FRUTA É: " + fruta) 
//}

//Interando um array com loop FORIN
//for (let indice of frutas) {
//    console.log("A FRUTA É: " + fruta[indice]) 
//}

//Selecionando elementos com NOTAÇÃO CSS
//listaDeLi = ['li', 'li']
const listaDeLi = document.querySelectorAll("li")

for (const elementoLi of listaDeLi){
    console.log("Conteúdo do <li>: " + elementoLi.innerHTML)
}