// Primeiro objeto em JavaScript
const Carro = {
    tipo: "Sedan",
    marca: "Volkswagen",
    modelo: "Voyage",
    cor: "branco",
    ano: 1995,
};

console.log(Carro);

// Exemplo de objeto vazio
const Pessoa = {};

Pessoa.nome = "Larissa";
Pessoa.idade = 24;
Pessoa.altura = 1.64;

console.log(Pessoa);

//Exemplo de acesso a propriedades em Objetos
const Animal = {
    nome: "Snoop",
    tipo: "Cachorro",
    raca: "SRD",
};

let nomeAnimal = Animal.nome;
let racaAnimal = Animal["raca"];


console.log(nomeAnimal);
console.log(racaAnimal);

console.log("");

// Exemplo de Objeto com método 
const Pessoa2 = {
    nome: "Anael",
    idade: 18,
    saudacao: function() {
        return "Aooooobaaa! Bom?";
    },
};

let pessoa2Nome = Pessoa2.nome;
let pessoa2Saudacao = Pessoa2.saudacao();

console.log('${pessoa2Nome} disse: ${pessoa2Saudacao}');

console.log("");

// Exemplo de alteração em valor propriedade em Objeto

const Pessoa3 = {
    nome: "Fabrício",
    idade: 20,
};
console.log(Pessoa3);


Pessoa3.idade = 19;

console.log(Pessoa3);

console.log("");

// Exemplo de remoção de propriedade em objeto
const Moto = {
    marca: "Honda",
    modelo: "CB500",
    portas: 4,
};

console.log(Moto.portas);

delete Moto.portas;

console.log(Moto);



   