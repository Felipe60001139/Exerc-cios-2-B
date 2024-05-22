function encontrarMenor() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let valor3 = parseFloat(document.getElementById("valor3").value);
    let valor4 = parseFloat(document.getElementById("valor4").value);
    let menorvalor = valor1
    if(menorvalor>valor2){
        menorvalor = valor2
    }
    if(menorvalor>valor3){
        menorvalor = valor3
    }
    if(menorvalor>valor4){
        menorvalor = valor4
    }
    document.getElementById("resultado").textContent = "O menor valor é: " + menorvalor;
}