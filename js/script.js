const elementoLigar=document.querySelector("#ligarId")
const elementoDesligar=document.querySelector("#desligarId")

elementoLigar.addEventListener("click", ()=>{
    document.querySelector("#imgDesligarId").src="./img/bulb-on.png"
})

elementoDesligar.addEventListener("click", ()=>{
    document.querySelector("#imgDesligarId").src="./img/bulb-off.png"
})


/* console.log('Estou no arquivo externo!')
 */
//comentário de linha 
/*
comentário de bloco
*/

//declaração de variáveis com var
/* var nome = "Alê"
 *///concatenação: utilizar o sinal de + 
/* console.log("Meu nome é: " + nome)
 */
//declaração de variáveis com let
/* let sobrenome = "Carlos"
console.log("Meu nome completo é: " + (nome + " " + sobrenome))
 */
//declaração de constantes com const
//utilizamos as constantes para armazenar geralmente os elementos que vamos trabalhar
/* const elementoLogo = document.querySelector("#logo")
 */
//utilizando a função AddEventListenner para escutar possíveis eventos que ocorram com o elemento
/* elementoLogo.addEventListener("click", function(){
    elementoLogo.innerHTML = "Serviços especializados"
}) */