function pesquisarproduto() {
let codigo = String(document.getElementById("codigo").value);
if (codigo=="001"){
    document.getElementById("resultado").textContent="001 - Parafuso"
}
else if (codigo=="002"){
    document.getElementById("resultado").textContent="002 - Porca"
}
else if (codigo=="003"){
    document.getElementById("resultado").textContent="003 - Prego"
}
else {
    document.getElementById("resultado").textContent="diversos"
}


}