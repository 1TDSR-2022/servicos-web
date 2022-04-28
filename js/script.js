//console.log('ESTOU NO ARQUIVO EXTERNO!')

//Declareção de variaveis com VAR

var nome = "Iago";
//Concatenação
console.log("Meu nome é " + nome);

//Declareção de variavel com LET
let sobrenome = "dos Santos"
console.log("Meu nome completo é: " + (nome + " " + sobrenome));

//Declaração de constante com CONST
const elementoLogo = document.querySelector("#logo")

//utilizando a função AddEventListenner para escutar possiveis
//eventos que ocorram com o elemento 
elementoLogo.addEventListener("click", function(){
    elementoLogo.innerHTML = "SERVIÇÕS ESPECIALIZADOS"
})