// Funciones JS
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}
console.log(saludar("goku"));

// Funciones flecha o lamba
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
console.log(saludar2("vegata"));

// Funcion lamba resumida
const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar3("piccoro"));

// Flecha que no recibe ningun argumento
const saludar4 = () => `Hola mundo`;
console.log(saludar4());

// Retornar Objetos
const getUser = () => ({
    id: "01",
    username: "lean",
})
console.log(getUser())

// Extra
// 1.Transformar a flecha
// 2.Que retorne obj implicito
function userActivo(nombre) {
    return{
        uid: "abc",
        username: nombre,
    }
}
const usuarioActivo = userActivo("Lean");
console.log(usuarioActivo);

const userActive = (nombre) => ({
    uid: "abc2",
    username: nombre,
})
const usuarioActivo2 = userActive("PAJARO");
console.log(usuarioActivo2);