const nombre = "leandro";
const apellido = "engstfeld";

const nombreCompleto = `
${nombre} 
${apellido}
${1+1}`;

console.log(nombreCompleto); 

function getSaludo(heroe){
    return `Hola ${heroe}`;
}

console.log(`Este es un string: ${getSaludo(nombreCompleto)}`);