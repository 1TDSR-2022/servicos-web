//console.log('estou no arquivo externo');
var nome = "Aristeu"
console.log("Meu nome é: " + nome)

let sobrenome = "José"
console.log("Meu nome completo é: " + nome + sobrenome)

const elementoLogo = document.querySelector("#logo")
elementoLogo.addEventListener("click", function() {
    elementoLogo.innerHTML = "Serviços especializados"
})