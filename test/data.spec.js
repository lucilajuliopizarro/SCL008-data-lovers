global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('filtereggs', () => {//aqui a quien quiero testear
  
  it('debería ser una función', () => {//que voy a testear
    assert.equal(typeof filtereggs, 'function');
  });
});
  describe('filterPokemon', () => {
  it('debería ser una funcion', () => {
   assert.equal(typeof filterPokemon, 'function');//assert comprueba lo que quiero testear//equal es un metodo que se saca de chai,existen muchos metodos 
  });
  });
describe('sortPokemon',() => {
  it('deberia ser una funcion',() => {
    assert.equal(typeof sortPokemon, 'function');
  });
});
describe('computeStats',() => {
  it('deberia ser una funcion',()=> {
    assert.equal(typeof computeStats, 'function');
  });
});

