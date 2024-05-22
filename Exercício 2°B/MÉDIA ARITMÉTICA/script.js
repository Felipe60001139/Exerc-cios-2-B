function calcularMedia() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {

    }
    else{
        const media = (num1 + num2 + num3) / 3;
        const mediaPonderada = ((num1 * 3) + (num2 * 2) + (num3 * 5)) / 10
        const somadasmedias = media + mediaPonderada 
        const somamediamedia = (media + mediaPonderada + somadasmedias) / 3;
        document.getElementById("resultadomedia").textContent = "Média aritmética" + media.toFixed(2)
        document.getElementById("resultadoponderada").textContent = "Média ponderada" + mediaPonderada.toFixed(2)
        document.getElementById("resultadosomadasmedia").textContent = "Soma das Médias" + somadasmedias.toFixed(2)
        document.getElementById("resultadomediamedia").textContent = "Média Média" + somamediamedia.toFixed(2)

}

}