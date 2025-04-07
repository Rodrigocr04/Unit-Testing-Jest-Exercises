/* Exercise 0: Test the function by using a mock function */

/* Mock the function using jest.fn().
Write four tests inside a describe block. Do not forget to use the beforeEach function to clear the mock function.
The mock function receives a prop of type number. The mocked function adds a 6 to the number.
1. First Test: 
The forEach function should be called 3 times
2. Second Test:
The forEach function should be called with the correct arguments.
3. Third Test:
Test the first argument of the first call to the function was 0 and the result is 6.
Test the first argument of the second call to the function was 1  and the result is 7.
4. Forth Test:
Test the first argument of the third call to the function was 4 and the result is not 9.
*/

// bloque con los 4 tests
describe('Pruebas para mock function con jest.fn()', () => {
  let mockFunction;
  
  beforeEach(() => {
    // limpiar el mock antes de cada prueba
    // crear una funcion mock que suma 6 al primer argumento
    mockFunction = jest.fn((num) => num + 6);
    
    // llamar a la funcion mock usando forEach con los argumentos 0, 1 y 4
    [0, 1, 4].forEach(mockFunction);
  });

  // primera prueba: debe ser llamada 3 veces
  test('debe ser llamada 3 veces', () => {
    expect(mockFunction).toHaveBeenCalledTimes(3);
  });

  // segunda prueba: debe ser llamada con los argumentos correctos
  test('debe ser llamada con los argumentos correctos', () => {
    expect(mockFunction.mock.calls[0][0]).toBe(0);
    expect(mockFunction.mock.calls[1][0]).toBe(1);
    expect(mockFunction.mock.calls[2][0]).toBe(4);
  });

  // tercera prueba: verificar llamadas y resultados
  test('debe retornar resultados correctos para las primeras dos llamadas', () => {
    // primera llamada
    expect(mockFunction.mock.calls[0][0]).toBe(0); // argumento
    expect(mockFunction.mock.results[0].value).toBe(6); // resultado (0+6)
    
    // segunda llamada
    expect(mockFunction.mock.calls[1][0]).toBe(1); // argumento
    expect(mockFunction.mock.results[1].value).toBe(7); // resultado (1+6)
  });

  // cuarta prueba: verificar la tercera llamada
  test('la tercera llamada debe tener argumento 4 y resultado diferente de 9', () => {
    expect(mockFunction.mock.calls[2][0]).toBe(4); // argumento debe ser 4
    expect(mockFunction.mock.results[2].value).not.toBe(9); // resultado no debe ser 9
    // el resultado correcto es 10
  });
});