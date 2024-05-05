function calcularAreaCuboide(){

    let comprimento = parseFloat(document.getElementById('comprimentoCuboide').value);
    let larguraLado = parseFloat(document.getElementById('larguraCuboide').value);
    let altura = parseFloat(document.getElementById('alturaCuboide').value);
    area = 2 * (comprimento* larguraLado + larguraLado * altura + altura * comprimento);

    document.getElementById('area').value = area.toFixed(2);
}

document.getElementById('calcular').addEventListener('click', function(event){
    event.preventDefault();
    calcularAreaCuboide();
})