// Arrrow Function

// Simples
const arr = [1, 3, 4, 5, 6];

const newArrExemplo1 = arr.map(item => {
  return item * 2;
});

console.log(newArrExemplo1);

//Função Anônima
const arr = [1, 3, 4, 5, 6];

const newArrExemplo2 = arr.map(item => item * 2);
console.log(newArrExemplo2);

//Função usando const
const teste = () => {
  return 'teste';
};

console.log(teste());

//Função retornando um Objeto
const teste4 = () => ({ nome: 'Shilton' });

console.log(teste4());
