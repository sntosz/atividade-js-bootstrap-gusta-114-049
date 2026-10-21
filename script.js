// Mensagem inicial da atividade.
console.log("Meu primeiro script foi executado!");

// Instruções e comentários
console.log("Painel de Estudos");
console.log(10 + 5);
console.log("A atividade começou");

// Variáveis com const e let
const nomeAluno = "Gusta";
const curso = "Desenvolvimento Web";
let quantidadeTarefas = 3;

console.log(nomeAluno);
console.log(curso);
console.log(quantidadeTarefas);

quantidadeTarefas = 4;
console.log("Nova quantidade de tarefas:", quantidadeTarefas);

// var como contexto histórico
var exemploAntigo = "Declaração utilizada em códigos antigos";
console.log(exemploAntigo);

// Tipos de dados
const titulo = "Painel de estudos"; // string
const quantidade = 4;               // number
const ativo = true;                 // boolean
const observacao = null;            // null

console.log(titulo);
console.log(quantidade);
console.log(ativo);
console.log(observacao);

// Operadores relacionados ao tema (notas do painel de estudos)
const nota1 = 7;
const nota2 = 8;
const somaNotas = nota1 + nota2;      // soma
const diferenca = nota2 - nota1;      // subtração
const pesoDuplo = nota1 * 2;          // multiplicação
const media = somaNotas / 2;          // divisão
const aprovado = media >= 6;          // comparação

console.log("Soma:", somaNotas);
console.log("Diferença:", diferenca);
console.log("Nota com peso duplo:", pesoDuplo);
console.log("Média:", media);
console.log("Aprovado?", aprovado);

// Template literal com pelo menos três variáveis
const mensagem = `O aluno ${nomeAluno} está no curso de ${curso} e possui ${quantidadeTarefas} tarefas pendentes.`;
console.log(mensagem);

// Decisão com if e else
if (media >= 6) {
  console.log("Aprovado");
} else {
  console.log("Precisa revisar");
}

// Desafio integrador: verificação de pedido de material escolar
const produto = "Caderno";
const preco = 25;
const quantidadeItens = 2;
const total = preco * quantidadeItens;          // cálculo 1
const desconto = total - (total * 0.1);         // cálculo 2 (10% de desconto)

console.log(`Pedido: ${quantidadeItens}x ${produto}. Total: R$ ${total}. Com desconto: R$ ${desconto}.`);

if (desconto >= 40) {
  console.log("Frete grátis");
} else {
  console.log("Frete pago");
}
