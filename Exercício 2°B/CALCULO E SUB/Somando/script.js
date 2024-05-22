let btSomatoria = document.querySelector("#btSomatoria");
let h2Titulo = document.querySelector("h2titulo");
let soma1 = document.querySelector("#soma1");
let soma2 = document.querySelector("#soma2");
let resultado = document.querySelector("#resultado");

btSomatoria.onclick = function(){
    somarValores();
}

function somarValores(){
    resultado.value = Number(soma1.value) + Number(soma2.value);
}