//console.log('Estou no arquivo Externo')

//declaração da variável
var nome ="Emerson"

//concatenção com (+)
console.log('meu nome é: ' + nome)

//declaração de variáveis com let
let sobrenome = "Silva"
console.log("Meu sobrenome é: " + sobrenome)

//Declaração de constantes com const utilizamos as cpmtantes para armazenar geralmente os elementos que vamos utiliza
const elementoLogo = document.querySelector("#logo")

//Utilizando a função addEventListener oara executar possíveis eventos que ocorram com os elementos.
elementoLogo.addEventListener("click" ,function(){
    elementoLogo.innerHTML = "SERVIÇOS ESPECIALIZADOS"
})
