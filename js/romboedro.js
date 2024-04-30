function calcularAreaRomboedro(){
    let diagonalMaior = parseFloat(document.getElementById('diagonalMaior').value);
    let diagonalMenor = parseFloat(document.getElementById('diagonaMenor').value);
    let areaLosango = (diagonalMaior * diagonalMenor) / 2;
    let area = areaLosango * 6;

    document.getElementById('area').value = area.toFixed(2);
}

document.getElementById('calcular').addEventListener('click', function(event){
    event.preventDefault();
    calcularAreaRomboedro();
})