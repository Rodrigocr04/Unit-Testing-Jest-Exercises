/* Mock Modules */

/* Mock the function using jest.mock() and jest.fn().
Write four tests inside a describe block. Do not forget to use the beforeEach function to clear the mock function.
Mock the functions in the utils files, they are being used in the convertCase function.
Set up the mock functions before each test.

1. Test cases for the reverseString function
2. Test cases for the toLowerCase function
3. Test cases for the toUpperCase function
4. Test cases for the default case when it is unknown
5. Test cases for the empty string
*/

import { convertCase } from './convertCase';
import { reverseString, toUpperCase, toLowerCase } from './utils';

// mockear las funciones de utils
jest.mock('./utils', () => ({
  reverseString: jest.fn((str: string) => [...str].reverse().join('')),
  toUpperCase: jest.fn((str: string) => str.toUpperCase()),
  toLowerCase: jest.fn((str: string) => str.toLowerCase())
}));

// bloque de pruebas
describe('Pruebas para la funcion convertCase', () => {
  // limpiar los mocks
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // primera prueba para el caso reverse
  describe('Caso reverse', () => {
    test('deberia llamar a reverseString con el argumento correcto', () => {
      const result = convertCase('hola', 'reverse');
      expect(reverseString).toHaveBeenCalledWith('hola');
      expect(result).toBe('aloh');
    });
  });

  // segunda prueba para el caso lower
  describe('Caso lower', () => {
    test('deberia llamar a toLowerCase con el argumento correcto', () => {
      const result = convertCase('HOLA', 'lower');
      expect(toLowerCase).toHaveBeenCalledWith('HOLA');
      expect(result).toBe('hola');
    });
  });

  // tercera prueba para el caso upper
  describe('Caso upper', () => {
    test('deberia llamar a toUpperCase con el argumento correcto', () => {
      const result = convertCase('hola', 'upper');
      expect(toUpperCase).toHaveBeenCalledWith('hola');
      expect(result).toBe('HOLA');
    });
  });

  // cuarta prueba para caso desconocido
  describe('Caso desconocido', () => {
    test('deberia retornar la cadena original para caso desconocido', () => {
      const result = convertCase('hola', 'unknown');
      expect(result).toBe('hola');
      expect(reverseString).not.toHaveBeenCalled();
      expect(toLowerCase).not.toHaveBeenCalled();
      expect(toUpperCase).not.toHaveBeenCalled();
    });
  });

  // quinta prueba para cadenas vacias
  describe('Manejo de cadenas vacias', () => {
    test('deberia retornar cadena vacia para todos los tipos de caso', () => {
      expect(convertCase('', 'upper')).toBe('');
      expect(convertCase('', 'lower')).toBe('');
      expect(convertCase('', 'reverse')).toBe('');
      expect(convertCase('', 'unknown')).toBe('');
    });

    test('no deberia llamar a funciones de conversion para cadena vacia', () => {
      convertCase('', 'upper');
      convertCase('', 'lower');
      convertCase('', 'reverse');
      
      expect(toUpperCase).not.toHaveBeenCalled();
      expect(toLowerCase).not.toHaveBeenCalled();
      expect(reverseString).not.toHaveBeenCalled();
    });
  });
});