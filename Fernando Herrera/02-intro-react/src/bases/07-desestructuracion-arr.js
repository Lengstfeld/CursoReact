// Desestructuracion Arr

const personajes = ["Goku", "Vegeta", "Gohan"];
const [p1,p2,p3] = personajes;
console.log(p1,p2,p3);

const traigoArr = () => {
    return["ABC", 123];
}
const [letras, numeros] = traigoArr();
console.log(letras,numeros);

const State = (valor) => {
    return [valor, ()=> {
        console.log("Hola Mundo");
    }];
}
const [nombre, dameNombre] = State("Goku"); 
//arr[1]();
console.log(nombre);
dameNombre();