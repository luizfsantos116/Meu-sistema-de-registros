const fs = require('fs');
const path = require('path');
const caminhoArquivo = path.join(__dirname, 'atendimento.txt');
fs.writeFileSync(caminhoArquivo, 'Cliente: Ana | Serviço: Troca de teclado');
console.log('Arquivo criado!');