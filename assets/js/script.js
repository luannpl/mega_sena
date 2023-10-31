// Seleciona todos os botões
let buttons = document.querySelectorAll('.num-button');

// Cria um array para armazenar os números selecionados
let selectedNumbers = [];

// Adiciona um evento de clique a cada botão
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Verifica se o número já foi selecionado
    if (selectedNumbers.includes(this.innerHTML)) {
      // Remove o número do array de números selecionados
      selectedNumbers = selectedNumbers.filter(num => num !== this.innerHTML);
      // Remove o background do botão
      this.style.backgroundColor = '';
    } else {
      // Verifica se já foram selecionados 6 números
      if (selectedNumbers.length < 6) {
        // Adiciona o número ao array de números selecionados
        selectedNumbers.push(this.innerHTML);
        // Adiciona um background ao botão
        this.style.backgroundColor = 'green';
      } else {
        alert('Você já selecionou 6 números.');
      }
    }
    // Ordena os números selecionados
    selectedNumbers.sort((a, b) => a - b);
    // Atualiza o display com os números selecionados
    document.getElementById('display').innerHTML = `Números selecionados: ${selectedNumbers.join(', ')}`;
  });
});

function gerarNumeros(){
let numeros = [];
while(numeros.length < 6){
    let numero = parseInt(Math.random() * 60) + 1; // Gera um número aleatório entre 1 e 60
    if(numeros.indexOf(numero) === -1) numeros.push(numero); // Se o número não estiver no array, adiciona
}
numeros.sort((a, b) => a - b); // Ordena os números em ordem crescente
var numerosString = numeros.join(', '); // Junta os números em uma string, separados por vírgula
document.getElementById('sorteio').innerHTML = `Números sorteados: ${numerosString}`;}