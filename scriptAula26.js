const celulas = document.querySelectorAll('.celula');

let vezDoX = true;

document.getElementById("botaoReiniciar").addEventListener('click', iniciarjogo);

function iniciarjogo(){
    celulas.forEach(celula =>{
        celula.textContent = "";
        celula.addEventListener('click', tratarClick, {once: true});
    } )
}

function tratarClick(evento){
    evento.target.textContent = vezDoX ? "X" : "O";
    vezDoX = !vezDoX;
}

iniciarjogo();