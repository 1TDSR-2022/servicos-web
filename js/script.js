let logo = document.querySelector("#logo");

let nome = "Henrique"

console.log(`Meu nome é ${nome}`)

let sobrenome = "Prado"

console.log(`Meu nome completo é ${nome} ${sobrenome}`)


logo.addEventListener("click", () => {
    if (logo.innerHTML == "Serviços") {
        logo.innerHTML = "AI AI PAPAI"
    }
    else if (logo.innerHTML == "AI AI PAPAI") {
        logo.innerHTML = "Serviços"
    }
})