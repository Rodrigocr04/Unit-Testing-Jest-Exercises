/* Exercise 2: Test using snapshots */

/* Mock the function using jest.fn().
Write three tests inside a describe block. You should use import the superHeros[] and getFlyingSuperHeros function.

1. First Test: 
Test should return an empty array if no superheros have the 'Fly' power"
2. Second Test:
Test should return an array of superHeros that have the 'Fly' power"
3. Third Test:
Test should match the snapshot of flying superheros.
The snapshot file should contain the expected output of the test.
The snapshot should be saved in a __snapshots__ directory next to the test file.
The snapshot file should be named SuperHeros.test.ts.snap.
*/

import { superHeros } from './superHeros';
import { getFlyingSuperHeros } from './getFlyingSuperHeros';

// mock para la funcion getFlyingSuperHeros
jest.mock('./getFlyingSuperHeros', () => {
  return {
    getFlyingSuperHeros: jest.fn((heros: Array<{name: string, power: string[]}>) => {
      return heros.filter(hero => hero.power.includes('Fly'));
    })
  };
});

describe('getFlyingSuperHeros con jest.fn()', () => {
  // limpiar mocks
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // primer test: array vacio
  it('debería retornar array vacío cuando no hay héroes con poder Fly', () => {
    const nonFlyingHeros = [
      { name: 'Hulk', power: ['Super Strength'] },
      { name: 'Batman', power: ['Intelligence'] }
    ];
    
    const result = getFlyingSuperHeros(nonFlyingHeros);
    
    expect(getFlyingSuperHeros).toHaveBeenCalledWith(nonFlyingHeros);
    expect(result).toEqual([]);
  });

  // segundo test: heroes que vuelan
  it('debería retornar solo héroes que vuelan', () => {
    const result = getFlyingSuperHeros(superHeros);
    
    expect(result).toEqual([
      { name: 'Superman', power: ['Fly', 'Super Strength'] },
      { name: 'IronMan', power: ['Intelligence', 'Technology', 'Fly', 'Billionaire'] },
      { name: 'GreenLantern', power: ['Energy Manipulation', 'Fly'] }
    ]);
  });

  // tercer test: snapshot
  it('debería coincidir con el snapshot de héroes voladores', () => {
    const result = getFlyingSuperHeros(superHeros);
    expect(result).toMatchSnapshot();
  });
});