let contatos = [];

const formContato = document.getElementById('form-contato');
const inputNome = document.querySelector('input[name="nome"]');
const inputTelefone = document.querySelector('input[name="telefone"]');
const tableContatos = document.getElementById('table-contatos');

// Adiciona o evento de submit ao formulário
formContato.addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o envio do formulário
  const nome = inputNome.value.trim();
  const telefone = inputTelefone.value.trim();
  if (nome && telefone) {
    // Adiciona o contato à lista de contatos
    contatos.push({nome, telefone});
    // Adiciona uma nova linha na tabela de contatos
    adicionarLinhaTabela(nome, telefone);
    // Limpa o formulário
    limparFormulario();
  } else {
    alert('Preencha todos os campos!');
  }
});

// Adiciona uma nova linha na tabela de contatos
function adicionarLinhaTabela(nome, telefone) {
  const tr = document.createElement('tr');
  const tdNome = document.createElement('td');
  tdNome.textContent = nome;
  const tdTelefone = document.createElement('td');
  tdTelefone.textContent = telefone;
  tr.appendChild(tdNome);
  tr.appendChild(tdTelefone);
  tableContatos.appendChild(tr);
}

// Limpa o formulário
function limparFormulario() {
  inputNome.value = '';
  inputTelefone.value = '';
}

// Exemplo de contatos pré-cadastrados
contatos = [
  {nome: 'João', telefone: '(11) 1111-1111'},
  {nome: 'Maria', telefone: '(22) 2222-2222'},
  {nome: 'José', telefone: '(33) 3333-3333'},
];

// Adiciona as linhas da tabela de contatos com base na lista de contatos
contatos.forEach(contato => adicionarLinhaTabela(contato.nome, contato.telefone));