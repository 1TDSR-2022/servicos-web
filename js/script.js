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

