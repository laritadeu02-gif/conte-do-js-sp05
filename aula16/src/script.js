// Introdução a arrays
const frutas = ["Banana", "Maça", "Laranja", "Uva", "Melão"];

// const frutas = [
//     "Banana", 
//     "Maça", 
//     "Laranja", 
//     "Uva", 
//     "Melão"
// ];

console.log(frutas);

console.log("");

//Inserindo elementos em arrays vazio
const frutas2 = [];

frutas2[0] = "Morango";
frutas2[1] = "Carambola";
frutas2[2] = "Kiwi";

console.log(frutas2);

console.log("");

// Acessando item de array
const carros = ["Gol", "Palio", "Celta"];

let carro1 = carros[0];
let carro2 = carros[1];
let carro3 = carros[2];

console.log(carro1);
console.log(carro2);
console.log(carro3);

console.log("");

// Alterando elementos de array
const carros2 = ["Ferrari", "Porsche", "McLaren"];

console.log(carros2);

carros2[0] = "Marea";
carros2[1] = "Fusca";
carros2[2] = "Uno";

console.log(carros2);

console.log("");

// Convertendo array em string
const pessoas = ["Anael", "Micaela", "Lucas"];

let listaPessoas = pessoas.toString();

console.log(listaPessoas);

console.log("");

//Exemplo de array em JSON
const frutas3 = ["Maracujá", "Melancia", "Pêra"];

let frutas3JSON = JSON.stringify(frutas3);

console.log(frutas3JSON);

console.log("");

//Exemplo da propriedade lenght
let times = ["São Paulo", "Cotinthians", "Flamengo"];

let quantidadeTimes = times.length;

console.log(quantidadeTimes);

let ultimoItemArray = times[quantidadeTimes -1];

console.log(ultimoItemArray);

console.log("");

//Exemplo de laço de repetição com array
const frutas4 = ["Jaca", "Limão", "Pêssego", "Amora"];

const tamanhoLista = frutas4.length;

console.log(tamanhoLista);

for (let contadora = 0;contadora < tamanhoLista; contadora++){
    console.log(frutas4[contadora]);
}

console.log("");

// Adicionando elementos com método push() e a propriedade lentgh
const cores = ["Azul", "Vermelho", "Verde"];

console.log(cores);

cores.push("Branco");

console.log(cores);

console.log(cores.lenght);

cores[cores.length] = "Preto";

console.log(cores);

cores[8] = "Laranja";

console.log(cores);

console.log(cores[4]);
console.log(cores[5]);
console.log(cores[6]);
console.log(cores[7]);
console.log(cores[8]);

console.log("");

// Exemplo de nomes em índices de array (JavaScript não suporta nomes para posições. Se fizermos isso o array vira objeto)

const pessoa = [];

pessoa["primeiroNome"] = "Larissa";
pessoa["segundoNome"] = "Tadeu";
pessoa["idade"] = 19;

console.log(pessoa[0]);
console.log(pessoa.lenght);

console.log(pessoa);

console.log("");

//Matrizes em JavaScript

const numeros = [0, 1, 2, 3, 4, 5, 6];



// const numeros = [[0, 1], [2, 3], [4, 5]];

// const numeros = [
//     [1, 2], 
//     [3, 4], 
//     [5, 6], 
// ];

console.log(numeros[2][1]);
