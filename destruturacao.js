//Desestruturação

const usuario = {
  nome: 'Shilton',
  idade: 29,
  endereco: {
    cidade: 'Belo Horizonte',
    estado: 'MG',
    numero: 188
  }
};

//const { nome, idade } = usuario;
const {
  nome,
  idade,
  endereco: { cidade, numero }
} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(numero);
