function calcularReajuste() {
    var saldo = parseFloat(document.getElementById("saldo").value);
    var saldoReajustado = saldo * 1.01;
    document.getElementById("resultado").textContent = "Saldo com reajuste: R$ ${saldoReajustado.toFixed(2)}";
  }