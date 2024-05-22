function informarvalor() {
    let valor = document.getElementById("valor")
    let resultado = document.getElementById("resultado")
    if(Number(valor.value) % 2 != 0){
        resultado.textContent = valor.value + "impar"
    }
}
