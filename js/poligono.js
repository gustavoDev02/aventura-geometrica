function calcularAreaPoligonos(){
    let lados = parseFloat(document.getElementById('escolhaForma').value);
    let comprimento = parseFloat(document.getElementById('comprimentoLado').value);
    let area = (lados * Math.pow(comprimento, 2)) / (4 * Math.tan(Math.PI / lados));
    document.getElementById('area').value = area.toFixed(2);
}

document.getElementById('calcular').addEventListener('click', function(event){
    event.preventDefault();
    calcularAreaPoligonos();
})