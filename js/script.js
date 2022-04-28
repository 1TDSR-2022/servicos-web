//console.log('Estou no arquivo externo!')

//Declaração de varieáveis com var

var nome = "Alefe"
//Concatenação utiliza o sinal de +
console.log("Meu nome é: " + nome)

//Concatenação utiliza o sinal de +
let sobrenome = "Rocha"
console.log("Meu nome completo é: " + (nome + " " + sobrenome))

//Declaração de constantes com const
//Utilizamos as constantes para armazenar gerlamente os elementos que vamos trabalhar.
const elementoLogo = document.querySelector("#logo")

//Utilizando a função AddventListenner para escutar possíveis eventos que ocorram com o elemento.
elementoLogo.addEventListener("click",function(){
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})