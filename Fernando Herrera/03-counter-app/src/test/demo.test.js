describe('Pruebas en el archivo demo.test.js', () => {
    test('Deben de ser iguales los strings', () => {
        //1. Inicializacion
        const msj = 'Hola Mundo!';
    
        //2. Estimulo
        const msj2 = "Hola Mundo!";
    
        //3. Observar el Comportamiento
        expect(msj).toBe(msj2);
    })
})


