function encontrarMaior() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    if(valor1>valor2){
        document.getElementById("resultado").textContent = valor1 + "maior"
    }
    else{
        document.getElementById("resultado").textContent = valor2 + "maior"
    }
}