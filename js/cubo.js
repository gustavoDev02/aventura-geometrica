function calcularAreaCubo(){
    let lado = document.getElementById('ladoQuadrado').value;
    let areaQuadrado = 6 * (lado * lado);

    document.getElementById('areaQuadrado').value = areaQuadrado;
}

document.getElementById('calcular').addEventListener('click', function(event){
    event.preventDefault();
    calcularAreaCubo();
});