/*Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

let listStudent = [

{
name: "Danilo" ,
n1: 7 ,
n2: 7
} ,

{
  name: "Lara" ,
  n1: 6,
  n2: 7
} ,

{
name: "Kisha",
n1: 3,
n2:8
}

]
 
function media (n1 , n2){
let media = (n1 + n2) /2
return media

}

for (let student of listStudent ){
 average = media (student.n1, student.n2)
let aprovadoOuNão = average < 7 ? " Não foi dessa vez, "  + student.name + "! Tente novamente!" : " Parabéns, " + student.name + "! Você foi aprovado(a) no concurso! "

alert(`A média do(a) aluno(a)  ${student.name}  é : ${average}. ${aprovadoOuNão}`)
}
