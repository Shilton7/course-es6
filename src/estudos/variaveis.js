// Variaveis Const and Let

// const: Não pode ter seu valor reatribuido, somente é possivel mutar

// Utilizando atribuição default:
const nome = 'Shilton';

//Utilizando atribuição por Mutação:
const usuario = { nome: 'Shilton' };
usuario.nome = 'Shilton usando mutação';
console.log(usuario);

/* Errado:
nome = 'Jose';
*/

// Let
function teste(x) {
  let y = 2;

  if (x > 5) {
    let y = 4;
    console.log(x, y);
  }
}

teste(10);
