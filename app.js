// 01. Descobrindo caminhos com path
/* const path = require('path');
console.log(__dirname); */

// 02
/* const path = require('path');
const caminhoArquivo = path.join(__dirname, 'atendimento.txt');
console.log(caminhoArquivo); */

// 03. Criando o primeiro arquivo com fs
const fs = require('fs');
const path = require('path');
const caminhoArquivo = path.join(__dirname, 'atendimento.txt');
fs.writeFileSync(caminhoArquivo, 'Cliente: Ana | Serviço: Troca de teclado');
console.log('Arquivo criado!');