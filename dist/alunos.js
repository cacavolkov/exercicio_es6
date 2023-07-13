"use strict";

var alunos = [{
  nome: 'Carlos',
  nota: 7
}, {
  nome: 'Alberto',
  nota: 9
}, {
  nome: 'Gonçalves',
  nota: 5
}, {
  nome: 'Fabiano',
  nota: 10
}, {
  nome: 'Joao',
  nota: 3
}, {
  nome: 'Anisio',
  nota: 1
}, {
  nome: 'Luis',
  nota: 6
}];
var posicao = 5;
console.log("O Aluno " + alunos[posicao].nome + " tem a nota " + alunos[posicao].nota);
alunos.forEach(function (aluno) {
  if (aluno.nota >= 6) {
    console.log(aluno.nome + " " + aluno.nota);
  }
});