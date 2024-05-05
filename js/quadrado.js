function calcularAreQuadrado(){
    let lado = document.getElementById('ladoQuadrado').value;
    let area = lado * lado;

    document.getElementById('area').value = area;
}

document.getElementById('calcular').addEventListener('click', function(event){
    event.preventDefault();
    calcularAreQuadrado();
})