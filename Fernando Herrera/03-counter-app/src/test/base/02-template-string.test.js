import { getSaludo } from "../../base-pruebas/02-template-string";
import '@testing-library/jest-dom'

describe('Pruebas en 02-template-string.js', () => {
  test('Prueba en el metodo getSaludo', () => {
      const nombre = 'Fernando';
      const saludo = getSaludo(nombre);
      expect(saludo).toBe('Hola ' + nombre);
  })
  //getSaludo debe retornar Hola Carlos si no hay un argumento en nombre
  test('Probando a Carlos', () => {
      const saludo = getSaludo();
      expect(saludo).toBe('Hola Carlos');      
  })
  
      
})
