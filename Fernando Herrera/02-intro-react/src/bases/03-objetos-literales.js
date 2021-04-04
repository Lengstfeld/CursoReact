const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 4421312,
        lat: 13.12312,
        long: 21.2323,
    },
};
console.log(persona)

//Mismo resultado con o sin :
console.log({
    persona:persona
});

console.log({
    persona
});

// Crear un nuevo objeto de persona
const persona2 = {...persona};
persona2.nombre = 'Peter'

console.log(persona.nombre);
console.log(persona2.nombre);