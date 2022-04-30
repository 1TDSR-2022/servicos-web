console.log('Estou no arquivo Externo!')

            //COMENTÁRIO DE LINHA
            /*
            COMENTÁRIO DE BLOCO
            */

//DECLARAÇÃO DE VARIÁVEIS COM var
var nome = "Guilherme"
//CONCATENAÇÃO UTILIZAR SINAL DE "+"
console.log("Meu nome é : " + nome)

//DECLARAÇÃO DE VARIÁVEIS COM let
let sobrenome = "Nascimento"
console.log("Meu nome completo é: " + (nome + " " + sobrenome))

//DECLARAÇÃO DE CONSTANTES COM const
//Utilizamos as constantes para armazenar geralmente
//os elementos que vamos trabalhar.
//const elementoLogo = document.querySelector("#logo")

//Utilizando a função AddEventListener para escutar possíveis
//eventos que ocorram com o elemento.
//elementoLogo.addEventListener("click",function(){
//    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
// })

//VETORES / ARRAYS / LISTAS / COLEÇÕES
//console.table para arrays 
var frutas = ["maçã", "banana", "laranja", "uva", "kiwi"]
//console.table(frutas)
//Imprimindo o conteúdo do array console.table(frutas)

//Verificando o primeiro elemento do array.
//console.log("primeiro elemento : " + frutas[0])

//Verificando o tamanho do array
//console.log("Tamanho do array: " + frutas.length)

//Verificando o último elemento do array.
//console.log("primeiro elemento : " + frutas[frutas.length - 1])

//Adicionando um item ao final do array.
//frutas.push("melância")
//console.table(frutas)

//Remover um item ao final do array
//frutas.pop()
//console.table(frutas)

//Remover um item do meio do array
//frutas.splice("posição no array","posição no array")

//Remover um item do início do array
//frutas.shift()
//console.table(frutas)

//Adicionar ao início do array.
//frutas.unshift("acerola")
//console.table(frutas)

//Removendo um item através do índice do array com indexOf()
//var posicao = frutas.indexOf('banana')
//console.log("A ocorrência foi encontrada no índice: " + posicao)
//frutas.splice(posicao,posicao)
//console.table(frutas)

//Iterando um array com loop FOR
//for(let x = 0; x < frutas.length; x++){
//    console.log("A fruta é: " + frutas[x])
// }

//Iterando um array com loop FOR...OF
//for (let fruta of frutas) {
//    console.log("A fruta é: " + fruta)
// }

//Iterando um array com loop FOR...IN
//for (let indice in frutas) {
//        console.log("A fruta é: " + frutas[indice])
// }

//alert("mensagem")

//var n1 = 2
//var n2 = 3
//var n3 = 4
//var media = (n1+n2+n3) / 3
//console.log("A média é: "+ media)

//let altura = 1.86
//let peso = 83
//let imc = peso / (altura*altura)
//console.log("O imc é de: "+ imc)


//DECLARAÇÃO DE CONSTANTES COM const
//Utilizamos as constantes para armazenar geralmente
//os elementos que vamos trabalhar.
const elementoLogo = document.querySelector("#logo")

//Utilizando a função AddEventListener para escutar possíveis
//eventos que ocorram com o elemento.
elementoLogo.addEventListener("click",function(){
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})

//Selecionando elementos com NOTAÇÂO CSS
//Ex: listaDeLi == ['li', 'li']
const listaDeLi = document.querySelectorAll("li")

//Selecionando por pelo FOR...EACH
//for (const elementoLi of listaDeLi) {
//    console.log("Conteúdo do li: "+ elementoLi.innerHTML) 
// }

//Selecionando por console.log
console.log(listaDeLi[1].innerHTML)
