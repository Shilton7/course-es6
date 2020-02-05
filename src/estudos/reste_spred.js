// Rest and Spread
//Rest = Recuperar valores restantes de uma propriedade

// Exmplo 1

const usuario = {
  nome: 'Shilton',
  idade: 27,
  empresa: 'Google'
};

const { nome, ...restanteDados } = usuario;
console.log(nome);
console.log(restanteDados);

// Exemplo com Vetor

const arr = [1, 2, 3, 4, 5, 6, 7];
const [a, b, c, ...restanteDadosVetor] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(restanteDadosVetor);

// Exemplo Parametros de function
function soma(d, f, ...params) {
  return params;
}
console.log(soma(1, 30, 4, 5, 6, 7));

//Spred
//Clonagem real
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

//Cloando e modificando campo x
const usuario1 = {
  nome: 'Shilton',
  idade: 19,
  empresa: 'Google'
};

const usuarioAtualizado = { ...usuario1, nome: 'Shilton Novo' };
console.log(usuarioAtualizado);
