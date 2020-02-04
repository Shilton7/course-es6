// Arrrow Function

const arr = [1, 3, 4, 5, 6];

// Exemplo 1
const newArrExemplo1 = arr.map(item => {
  return item * 2;
});

console.log(newArrExemplo1);

//Exemplo 2 - anónima
const newArrExemplo2 = arr.map(item => item * 2);
console.log(newArrExemplo2);

//Exemplo 3
const teste = () => {
  return 'teste';
};

console.log(teste());

//Exemplo 4 - retornado Objeto
const teste4 = () => ({ nome: 'Shilton' });

console.log(teste4());
