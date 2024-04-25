function calcularAreaTrapezio(){
    let baseMaior = parseFloat(document.getElementById('baseMaiorTrap').value);
    let baseMenor = parseFloat(document.getElementById('baseMenorTrap').value);
    let altura = parseFloat(document.getElementById('alturaTrap').value);
    let area = ((baseMaior + baseMenor) * altura) / 2;

    document.getElementById('areaTrap').value = area;


}

document.getElementById('calcular').addEventListener('click', function(event){
    event.preventDefault();
    calcularAreaTrapezio();
});