var petList = [];

function addPet(idPet, nombre, peso, edad) {
    
    var newPet = {
        id: idPet,
        nombre: nombre,
        peso: peso,
        edad: edad,
    };
    console.log(newPet);
    petList.push(newPet);
    
};