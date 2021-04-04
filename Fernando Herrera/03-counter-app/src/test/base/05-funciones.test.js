import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(userTest);
    })    
    // getUsuarioActivo debe retornar un obj
    test('getUsuarioActivo debe retornar un obj ', () => {
        const nombre = 'Leandro'
        const userTest2 = {
            uid: 'ABC567',
            username: nombre
        }
        const user = getUsuarioActivo(nombre);
        expect(user).toEqual(userTest2); 
    })
    
})
