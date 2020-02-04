"use strict";

//Template Literals
var nome = 'Shilton';
var idade = 27;
console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos")); //Object Short Syntax

var nome2 = 'Shilton';
var idade2 = 23;
var usuario = {
  nome2: nome2,
  idade2: idade2,
  empresa: 'Google'
};
console.log(usuario);
