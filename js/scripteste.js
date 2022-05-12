

 function ligaDesliga(idButton) {

    const elementoButton=document.querySelector("#" + idButton)

    if(elementoButton.innerHTML == "LIGUE" ){
        document.getElementById('lampada').src='./img/bulb-on.png';
        elementoButton.innerHTML = "DESLIGUE"
    }else{
        document.getElementById('lampada').src='./img/bulb-off.png';
        elementoButton.innerHTML = "LIGUE"
    }
}
