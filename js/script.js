/* const elementoLigar=document.querySelector("#ligarId")
const elementoDesligar=document.querySelector("#desligarId")

elementoLigar.addEventListener("click", ()=>{
    document.querySelector("#imgDesligarId").src="./img/bulb-on.png"
})

elementoDesligar.addEventListener("click", ()=>{
    document.querySelector("#imgDesligarId").src="./img/bulb-off.png"
})
 */
/* function ligaDesliga(idButton) {

    //const elementoButton=document.querySelector("#" + idButton)
    const elementoButton = document.getElementById(idButton)
    let valorDeInner = elementoButton.innerHTML
    if(valorDeInner == "LIGUE" ){
        document.getElementById('lampada').src='./img/bulb-on.png';
        elementoButton.innerHTML = "DESLIGUE"
    }else{
        document.getElementById('lampada').src='./img/bulb-off.png';
        elementoButton.innerHTML = "LIGUE"
    }
} */



// Funções MATEMÁTICAS
// EXPONENCIAÇÃO 
// console.log("Math.POW: " + Math.pow(10, 2))

//Número Randômico - retornar um número entre 0 e 1, porém o número assume uma dízima
// console.log("Math.random: " + Math.random())

//Função de Arredondamento para cima
// console.log("Math.ceil: " + Math.ceil(Math.random()))

//Função de Arredondamento para cima e para baixo
// console.log("Math.floor: " + Math.floor(Math.random()))

// rgb( 0, 0 , 255);

const elementoDiv = document.querySelector('.box')
// elementoDiv.style.backgroundcolor = "rgb(10, 44 ,25)"
var r = Math.round(Math.random()*255)
var g = Math.round(Math.random()*255)
var b = Math.round(Math.random()*255)
// CONCATENAÇÃO
// elementoDiv.style.backgroundcolor = "rgb(" + r + "," + g + "," + b+ ")"

// INTERPOLAÇÃO
elementoDiv.style.backgroundcolor = `rgb(${r} , ${g} , ${b})`

/* Aperfeiçoamento da caixa de cores vivas !
Automatizar !
As cores devem se alterar automaticamente sem dar refresh na página  */


