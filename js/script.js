const elementoLigar=document.querySelector("#ligarId")
const elementoDesligar=document.querySelector("#desligarId")

elementoLigar.addEventListener("click", ()=>{
    document.querySelector("#imgDesligarId").src="./img/bulb-on.png"
})

elementoDesligar.addEventListener("click", ()=>{
    document.querySelector("#imgDesligarId").src="./img/bulb-off.png"
})
