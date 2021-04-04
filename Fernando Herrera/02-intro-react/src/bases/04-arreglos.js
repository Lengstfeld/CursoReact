// Arreglos JS
// Array vacion con 100 posiciones
const arreglo = new Array(100);
// Anañadir otro espacion en el arreglo
arreglo.push(1)
console.log(arreglo);
console.log(" ")
// Arreglo normal
// Armo una array vacio
// y cada push agrege una nueva posicion
// y agrega el valor que le ingreso en los ()
// no es recomendable usar el push, ya que mod el obj original
const arr = []
arr.push(1)
arr.push(2)
arr.push(1)
arr.push(2)
arr.push("leandro")
console.log(arr);
console.log(" ")

// ej de como modifica el original
const arr2 = [1,2,3,4];
let newArr2 = arr2;
newArr2.push(5);
console.log(arr2);
console.log(newArr2);
console.log(" ")

//ej de como se deberia hacer
const newArray = [1,2,3,4];
let newArray2 = [...newArray, 5]
console.log(newArray);
console.log(newArray2);
console.log(" ")

// map
const doble = newArray2.map( function(numero) {
    return numero*2;
});
console.log(doble)