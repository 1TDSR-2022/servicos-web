//console.log('Estou no arquivo externo')
//DECLARAÇÃO DE VARIAVEIS COM var
var nome = "Alê"
console.log("Meu nome é : " + nome )
//DECLARAÇÃO DE VARIAVEIS COM let
let sobrenome = "Carlos"
console.log("Meu nome completo é : " + (nome+ " " + sobrenome))
//DECLARAÇÃO DE VARIAVEIS COM const
//UTILIZAMOS OS CONSTANTE PARA ARMAZENAR GERALMENTE OS ELEMTNOS QUE VAMOS TRABALHAR
const elementoLogo = document.querySelector("#logo")

//ultlizando a função addEventolistenner para escutar possiveis 
//eventos que ocorram com o elemento
elementoLogo.addEventListener("click", function(){
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})


//Selecionando elementos com anotação css
const listaDeLi = document.querySelectorAll("li")
 for (const elementoLi of listaDeLi){
     console.log("Conteudo do LI: " + elementoLi.innerHTML)
 }



// VETORES / ARRAYS / LISTAS/ COLEÇÕES
//var frutas = ["maça","banana","laranja","uva","kiwi"]
//console.table(frutas)
//verificar o primeiro elemento do arrey
//console.log("Primeiro elemento: " + frutas[0])
//verificando o tamanho do arrey
//console.log("Tamanho do Arrey: " + frutas[4])
//Adicionando um item ao final do array
//frutas.push("melancia")
//console.table(frutas)
//Remover um item ao final do array
//frutas.pop()
//console.table(frutas)
//Remover um item do inicio do array
//frutas.shift()
//console.table(frutas)
//Remover um item através do indice do array com o idensOf()
//var posi = frutas.indexOf('banana')
//console.log("A ocorrencia foi encontrada no índice: " + posi)
//Remover um item no meio do arrey
//frutas.splice(posi,posi)

//Interando um arrey com loop FOR
//for(let x = 0; x < frutas.length ; x++){
 //   console.log("A fruta é: " + fruta[x])
 // }

//Interando um arrey com loop FOROF
//for(let indece of frutas){
//    console.log("A fruta é: " + fruta[indice])
//}
alert("Olá")