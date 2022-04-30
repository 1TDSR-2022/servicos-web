console.log('Estou no arquivo Externo')

//DECLARAÇÃO DE VARIÁVEIS COM var

var nome = "Alan"
//CONCATENAÇÃO UTILIZAR O SINAL DE (+)
console.log("Meu nome é : " + nome)

//DECLARAÇÃO DE VARIÁRVEIS COM let
let sobrenome = "Araujo"
console.log("Meu nome completo é : " + (nome + " " + sobrenome) )

//DECLARAÇÃO DE CONSTANTES COM const
//UTILIZAMOS AS CONSTANTES PARA ARMAZENAR GERALMENTE OS ELEMENTOS QUE VAMOS TRABALHAR.
const elementoLogo = document.querySelector("#logo")

//UTILIZAMOS A FUNÇÃO AddEventListenner PARA ESCUTAR POSSIVEIS
//EVENTOS QUE OCORRAM COM O ELEMENTO
elementoLogo.addEventListener("click", function(){
    elementoLogo.innerHTML = "Serviços Especializados"
})

//SELECIONANDO ELEMENTOS EM CONTAÇÃO CSS
//ex. listaDeLi - ['li', 'li']
const listaDeLi = document.querySelector("li")

for(const elementoli of listaDeLi) {
    console.log("Conteúdo do <li> : " + elementoli.innerHTML)
}


//VETORES / ARRAYS / LISTAS / COLEÇÕES

var frutas = ["maça", "banana", "laranja", "uva", "kiwi"]
//IMPRIMINDO O CONTEÚDO DO ARRAY console.table(frutas)

//VERIFICANDO O PRIMEIRO ELEMENTO DO ARRAY.
//console.log("Primeiro elemento: "+ frutas[0])

//VERIFICANDO O TAMANHO DO ARRAY.
//console.log("Tamanho do array: "+ frutas.length)

//VERIFICANDO O ULTIMO ELEMENTO DO ARRAY.
//console.log("Ultimo elemento: "+ frutas[frutas.length - 1])

//ADICIONA UM ITEM AO FINAL DO ARRAY
//frutas.push("melancia")
//console.table(frutas)

//REMOVER UM ITEM AO FINAL DO ARRAY
//frutas.pop()
//console.table(frutas)

//REMOVER UM ITEM DO INICIO DO ARRAY
//frutas.shift()
//console.table(frutas)

//ADICIONAR UM ITEM AO INICIO DO ARRAY
//frutas.unshift()
//console.table(frutas)

//REMOVENDO UM ITEM ATRAVÉS DO INDICE DO ARRAY COM indexOf()
// var posicao = frutas.indexOf('banana')
// console.log("A ocorrência foi encontrada no indice: " + posicao)
// frutas.splice(posicao,posicao)
// console.table(frutas)

//ITERANDO UM ARRAY COM LOOP FOR
// for(let x = 0; x < frutas.length; x++){
//     console.log("VALOR DE X: " + x)
// }

//ITERANDO UM ARRAY COM LOOP FOROF
// for (let fruta of frutas) {
//     console.log("A FRUTA É: " + fruta)
// }

//ITERANDO UM ARRAY COM LOOP FORIN
// for (let indice in frutas) {
//     console.log("A FRUTA É: " + fruta[indice])
// }
