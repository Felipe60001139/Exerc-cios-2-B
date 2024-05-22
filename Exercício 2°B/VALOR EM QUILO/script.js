let btSomatoria = document.querySelector("#btSomatoria");
let h2Titulo = document.querySelector("h2");  
let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let resultado = document.querySelector("#resultado");

btSomatoria.onclick = function(){
    somarValores();
}

function somarValores(){
    resultado.value = Number(div1.value) * Number(div2.value); 
}