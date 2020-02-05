# JavaScript ES6 Course
`Node: (https://nodejs.org/en/download/)` 

`Yarn: (https://yarnpkg.com/getting-started/install)` 

<h4>Babel: (https://babeljs.io/)</h4>
<p>O Babel é um conjunto de ferramentas usado principalmente para converter o código ECMAScript 2015+ em uma versão compatível com versões anteriores do JavaScript em navegadores ou ambientes atuais e mais antigos.
</p>
<h4>Variáveis:</h4>
<p>Const: Possui valor fixo, usado somente para leitura, não pode ser reatribuido, mais é possível usar mutação na mesma.</p>
<p>Let: Permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada.</p>

<h3>Operações em Array</h3>
<h4>Map</h4>
<p>O método map() percorre o array invocando uma função de retorno em cada elemento com parâmetros. <br>
Para cada chamada de retorno, o valor devolvido se torna o elemento do novo array.
</p>
<pre>
<code>const arr = [1, 3, 4, 5, 8, 10];
      const newArray = arr.map(function(item) {
      return item * 2;
    });
    console.log(newArray);</code>
</pre>

<h4>Reduce</h4>
<p>O método Reduce percorre o array invocando uma função de retorno em cada elemento,retornando o valor acumulado no final.</p>
<pre>
<code>const sum = arr.reduce(function(total, next) {
  return total + next;
});
console.log(sum);</code>
</pre>

<h4>Filter</h4>
<p>O método Filter percorre o array por completo, em busca de um valor específico, o valor retornado deve ser um booleano que indica se o elemento será removido ou mantido.
Depois dessa análise, é retornado um novo array com todos os elementos.</p>
<pre>
<code>const filter = arr.filter(function(item) {
  return item % 2 === 0;
});
console.log(filter);</code>
</pre>

<h4>Find</h4>
<p>O método find retorna o valor do primeiro elmento do array que atende a função provida, caso contrario o valor undefined é retornado.</p>
<pre>
<code>const find = arr.find(function(item) {
  return item === 10;
});
console.log(find);</code>
</pre>

<h4>Arrow Function</h4>
<p>Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).
</p>
<p><Strong>Simples</strong></p>
<pre>
<code>const arr = [1, 3, 4, 5, 6];
const newArrExemplo1 = arr.map(item => {
  return item * 2;
});
console.log(newArrExemplo1);</code>
</pre>

<p><Strong>Função Anônima</strong></p>
<pre>
<code>const arr = [1, 3, 4, 5, 6];
const newArrExemplo2 = arr.map(item => item * 2);
console.log(newArrExemplo2);</code>
</pre>

<p><Strong>Função usando const</strong></p>
<pre>
<code>const teste = () => {
  return 'teste';
};
console.log(teste());</code>
</pre>

<p><Strong>Função retornando um Objeto</strong></p>
<pre>
<code>const teste4 = () => ({ nome: 'Shilton' });
console.log(teste4());</code>
</pre>

<h4>Desestruturação</h4>
<p>A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.
</p>
<pre>
<code>const usuario = {
  nome: 'Shilton',
  idade: 29,
  endereco: {
    cidade: 'Belo Horizonte',
    estado: 'MG',
    numero: 188
  }
};


const { nome, idade } = usuario;
const {
  nome,
  idade,
  endereco: { cidade, numero }
} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(numero);</code>
</pre>

<h4>REST Operator</h4>
<p>Rest Operator nos permite representar um número indefinido de argumentos como um array. 
Se o último argumento nomeado de uma função tiver prefixo com  ..., ele irá se tornar um array em que os elemento de 0 (inclusive) 
até theArgs.length (exclusivo) são disponibilizados pelos argumentos atuais passados à função.
</p>

<h4>Template Literals</h4>
<p>Permite criar cadeias de caracteres utilizando interpolação.
</p>
<pre>
<code>const nome = 'Shilton';
const idade = 27;
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);</code>
</pre>

<h4>Object Short Syntax</h4>
<p>Sintaxe resumida de objetos</p>
<p><Strong>Sem short syntax</strong></p>
<pre>
<code>const usuario = {
  nome: nome, 
  idade: idade, 
  empresa: 'Google'
}</code>
</pre>

<p><Strong>Com short syntax</strong></p>
<pre>
<code>const usuario = {
  nome, 
  idade, 
  empresa: 'Google'
}</code>
</pre>
