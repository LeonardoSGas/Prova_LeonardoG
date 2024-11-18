//1) Crie uma array (lista) com o nome amigo e povoe com o nome de seus 3 melhores amigos

const amigos = ["Lucas", "Jefte", "Deivid"];
console.log(amigos);
console.log(amigos[1]);

//2) Crie um objeto carro com as seguintes propriedades (nome, marca e cor) e povoe 1objeto

const carro = {
    nome: "Camaro",
    marca: "Chevrolet",
    cor: "Amarelo"
};
console.log(carro);
console.log(carro.nome);
console.log(carro.marca);
console.log(carro.cor);
// Desestruturação do objeto carro
const { nome, cor } = carro;
console.log(`O carro é: ${nome}, Sua cor é: ${cor}`);



// 3) Crie uma lista de 3 objetos com o nome alunos e em cada aluno deverá aparecer os seguintes atributos (nome, turma e altura)

const alunos = [
    { nome: "Lucas", turma: "2DS", altura: 1.60 },
    { nome: "Deivid", turma: "2DS", altura: 1.78 },
    { nome: "José", turma: "2DS", altura: 1.68 }
];
console.log(alunos);
console.log(alunos[1]);
console.log(alunos[1].nome);

// 4) Crie as seguintes variáveis nome, sobrenome e curso. Povoe com suas informações pessoais
const nomePessoa = "Leonardo";
const sobrenome = "Gaspareto";
const curso = "Desenvolvimento de sistema";
console.log(`Meu nome é ${nomePessoa} ${sobrenome} e meu curso é ${curso}`);

//5) Crie um array com os números 1, 2 e 3.
const numeros = [1, 2, 3];
const novoArray = [...numeros, 4, 5, 6];
console.log(novoArray); // Printando o novo array

// 6) Crie um array com o nome das 3 matérias que você mais gosta
const materias = ["Matemática", "Geografia", "Front-end"];
materias.map(materia => console.log(`Matérias preferidas: ${materia}`))