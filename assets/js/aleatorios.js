let numeros = [];
while(numeros.length < 6){
    let numero = parseInt(Math.random() * 60) + 1; // Gera um número aleatório entre 1 e 60
    if(numeros.indexOf(numero) === -1) numeros.push(numero); // Se o número não estiver no array, adiciona
}
numeros.sort((a, b) => a - b); // Ordena os números em ordem crescente
let numerosString = numeros.join(', '); // Junta os números em uma string, separados por vírgula
document.getElementById('sorteio').innerHTML = numerosString;