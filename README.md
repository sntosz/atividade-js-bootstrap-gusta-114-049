# Painel de Estudos

## Nome e tema do projeto

**Painel de Estudos** — uma página para organizar matérias, acompanhar notas e gerenciar tarefas de um estudante do curso de Desenvolvimento Web.

## Interface criada

A interface simula um painel de estudos com uma seção de apresentação e três cards, um para cada matéria (Matemática, Programação Web e Banco de Dados). Cada card traz um resumo do que precisa ser estudado. Há também um alerta de prova, um botão para adicionar novas tarefas e um rodapé. Os exemplos do JavaScript usam o mesmo tema: cálculo de média de notas e valor de um pedido de material escolar.

## Componentes Bootstrap utilizados

- **navbar** (`bg-primary`, `navbar-dark`, `navbar-expand-lg`) com o nome do projeto;
- **container**, **row** e **col-12 col-md-4** para o layout responsivo;
- **card** (`h-100`, `card-body`, `card-title`, `card-text`) para as matérias;
- **badge** (`bg-success`, `bg-danger`, `bg-secondary`) para os status;
- **button** (`btn btn-primary`, `btn-lg btn-outline-primary`);
- **alert** (`alert alert-warning`) com o aviso de prova;
- **footer** (`bg-dark text-white text-center`).

O Bootstrap foi incluído via CDN e nenhum CSS próprio foi criado.

## Diferença entre `let`, `const` e `var`

- **`const`**: declara uma constante que não pode ser reatribuída. Usei para dados que não mudam, como `nomeAluno`, `curso`, `nota1`, `nota2` e `produto`.
- **`let`**: declara uma variável que pode ter o valor alterado. Usei para `quantidadeTarefas`, porque o número de tarefas muda ao longo do tempo.
- **`var`**: forma antiga de declarar variáveis, usada em códigos legados. Tem escopo de função (não de bloco) e permite redeclaração, o que pode gerar bugs. Hoje prioriza-se `let` e `const` porque têm escopo de bloco e deixam claro se o valor pode ou não mudar.

## Tipos de dados utilizados

- **string**: `titulo`, `nomeAluno`, `curso`, `produto`;
- **number**: `quantidade`, `nota1`, `nota2`, `preco`, `media`;
- **boolean**: `ativo`, `aprovado`;
- **null**: `observacao`.

## Condição criada com `if/else`

Criei duas condições:

1. **Aprovação**: se a média das notas (`media`) for maior ou igual a 6, exibe "Aprovado"; caso contrário, exibe "Precisa revisar". Testei os dois caminhos alterando os valores das notas.
2. **Frete grátis**: no desafio integrador, se o total do pedido com desconto for maior ou igual a R$ 40, exibe "Frete grátis"; senão, exibe "Frete pago".

## Maior dificuldade encontrada

A maior dificuldade foi montar o layout responsivo com as classes do Bootstrap (`col-12 col-md-4`) e lembrar a sintaxe das template literals com `${}` dentro das crases.

## Como a dificuldade foi resolvida

Consultei a documentação do Bootstrap sobre o sistema de grid para entender como as colunas se comportam em telas pequenas e médias, e pratiquei as template literals testando mensagens diferentes no Console do navegador até dominar a sintaxe.

## Como executar

Abra o arquivo `index.html` no navegador e pressione F12 para abrir o Console e ver as mensagens do `script.js`.
