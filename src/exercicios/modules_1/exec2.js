const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

const usandoMap = usuarios.map(function(user) {
  return usandoMap;
});

console.log(usandoMap);

const usandoFilter = usuarios.filter(function(user) {
  return user.empresa === 'Rocketseat' && user.idade > 18;
});
console.log(usandoFilter);

const usandoFind = usuarios.find(function(user) {
  return user.empresa === 'Google';
});

console.log(usandoFind);

const unindoOperacoes = usuarios.map(user => ({ ...user, idade: user.idade * 2 })).filter(user => user.idade < 50);
console.log(unindoOperacoes);
