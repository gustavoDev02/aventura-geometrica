

function calcularAreaCirulo(){
    let raioCirculo = document.getElementById('raioCirculo').value;
    let areaCirculo = 3.14 * (raioCirculo * raioCirculo);

    document.getElementById('area').value = areaCirculo;
}

document.getElementById('calcular').addEventListener('click', function(event){
    event.preventDefault();
    calcularAreaCirulo();
});

