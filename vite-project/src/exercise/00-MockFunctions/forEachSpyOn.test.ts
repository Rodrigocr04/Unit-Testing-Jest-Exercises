/* Exercise 0: Test the function by using a spyOn function */

/* Mock the function using spyOn
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
describe('Pruebas para mock function con spyOn', () => {
  const originalFunction = (num: number) => num + 6;
  let mockedFunction: jest.SpyInstance;

  beforeEach(() => {
    // se crea el spy sobre un objeto con la funcion
    mockedFunction = jest.spyOn({ originalFunction }, 'originalFunction');
    
    // argumentos para las pruebas
    [0, 1, 4].forEach(num => mockedFunction(num));
  });

  afterEach(() => {
    mockedFunction.mockRestore();
  });

  // primera prueba: verificar numero de llamadas
  test('debe ser llamada 3 veces', () => {
    expect(mockedFunction).toHaveBeenCalledTimes(3);
  });

  // segunda prueba: verificar argumentos de llamadas
  test('debe ser llamada con los argumentos correctos', () => {
    expect(mockedFunction).toHaveBeenNthCalledWith(1, 0);
    expect(mockedFunction).toHaveBeenNthCalledWith(2, 1);
    expect(mockedFunction).toHaveBeenNthCalledWith(3, 4);
  });

  // tercera prueba: verificar resultados de las primeras llamadas
  test('debe retornar resultados correctos para las primeras llamadas', () => {
    expect(mockedFunction).toHaveBeenNthCalledWith(1, 0);
    expect(mockedFunction.mock.results[0].value).toBe(6);
    
    expect(mockedFunction).toHaveBeenNthCalledWith(2, 1);
    expect(mockedFunction.mock.results[1].value).toBe(7);
  });

  // cuarta prueba: verificar tercera llamada
  test('la tercera llamada debe tener argumento 4 y resultado diferente de 9', () => {
    expect(mockedFunction).toHaveBeenNthCalledWith(3, 4);
    expect(mockedFunction.mock.results[2].value).not.toBe(9);
    expect(mockedFunction.mock.results[2].value).toBe(10);
  });
});