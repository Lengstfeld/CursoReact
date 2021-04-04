// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: "tony",
    edad: 45,
    clave: "ironman",
};

const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const contexto = ({nombre, edad, clave}) => {
    //console.log(nombre, edad, clave);
    return {
        nombreClave: clave,
        anios: edad,
        latLong: {
            lat: 12.23213,
            long: 21.3232,
        }
    }
}
console.log();
const {nombreClave, anios, latLong:{lat, long}} = contexto(persona)
//const {nombreClave, anios, latLong} = useContext(persona)
//const {lat, long} = latLong;
console.log(nombreClave);
console.log(anios);
console.log(lat);
console.log(long);

// Desestructurar es esto
// const { ESTO ES DESESTRUCTURAR } = asd(asdas);