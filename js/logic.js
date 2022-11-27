document.querySelector("#calcularPet").addEventListener('click', calcular);

function calcular() {
    var idPet = 0,
        nombre = document.querySelector('#name').value, 
        peso = document.querySelector('#weight').value, 
        edad = document.querySelector('#ageList').value;
    
    addPet(idPet++, nombre, peso, edad);
}