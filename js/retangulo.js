function calcularAreaRetangulo(){
    let baseRetangulo = document.getElementById('baseRetangulo').value;
    let alturaRetangulo = document.getElementById('alturaRetangulo').value;
    let area = baseRetangulo * alturaRetangulo;

    document.getElementById('areaRetangulo').value = area;
}

document.getElementById('calcular').addEventListener('click', function(event){
    event.preventDefault();
    calcularAreaRetangulo();
});