const elementoLigar = document.querySelector("#ligarId")
const elementoDesligar = document.querySelector("#desligarId")


elementoLigar.addEventListener("click", ()=>{
    document.querySelector("#imgDesligarId").src="./img/lampada-on.png"
})

elementoLigar.addEventListener("click", ()=>{
    document.querySelector("#imgDesligarId").src="./img/lampada-off.png"
})