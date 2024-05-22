let btSomatoria = document.querySelector("#btSubtração");
let h2Titulo = document.querySelector("h2titulo");
let sub1 = document.querySelector("#sub1");
let sub2 = document.querySelector("#sub2");
let resultado = document.querySelector("#resultado");

btSomatoria.onclick = function(){
    somarValores();
}

function somarValores(){
    resultado.value = Number(sub1.value) - Number(sub2.value);
}