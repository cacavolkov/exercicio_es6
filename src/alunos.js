const  alunos  =  [
    {  nome : 'Carlos' ,  nota : 7  } ,
    {  nome : 'Alberto' ,  nota : 9  } ,
    {  nome : 'Gonçalves' ,  nota : 5  } ,
    {  nome : 'Fabiano' ,  nota : 10  } ,
    {  nome : 'Joao' ,  nota : 3  },
    {  nome : 'Anisio' ,  nota : 1  },
    {  nome : 'Luis' ,  nota : 6  }
]

alunos.forEach(aluno => {
    if (aluno.nota >= 6) {
        console.log(aluno.nome + " " + aluno.nota)
    }
});