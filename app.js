// 01. Descobrindo caminhos com path
/* const path = require('path');
console.log(__dirname); */

// 02
const path = require('path');
const caminhoArquivo = path.join(__dirname, 'atendimento.txt');
console.log(caminhoArquivo);