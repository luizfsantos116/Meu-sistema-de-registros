// 01. Descobrindo caminhos com path
/* const path = require('path');
console.log(__dirname); */

// 02
/* const path = require('path');
const caminhoArquivo = path.join(__dirname, 'atendimento.txt');
console.log(caminhoArquivo); */

// 03. Criando o primeiro arquivo com fs
/* const fs = require('fs');
const path = require('path');
const caminhoArquivo = path.join(__dirname, 'atendimento.txt');
fs.writeFileSync(caminhoArquivo, 'Cliente: Ana | Serviço: Troca de teclado');
console.log('Arquivo criado!'); */

// 04. Lendo o conteúdo do arquivo
/* const fs = require('fs');
const path = require('path');
const caminhoArquivo = path.join(__dirname, 'atendimento.txt');
const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');
console.log(conteudo); */

// 05.  Vamos testar o que acontece ao gravar novamente
/* const fs = require('fs');
const path = require('path');
const caminhoArquivo = path.join(__dirname, 'atendimento.txt');
fs.writeFileSync(caminhoArquivo, 'Cliente: Bruno | Serviço: Impressora não funciona');
console.log('Novo registro salvo!'); */

// 06. Adicionando sem apagar
/* const fs = require('fs');
const path = require('path');
const caminhoArquivo = path.join(__dirname, 'atendimento.txt');
fs.appendFileSync(caminhoArquivo, '\nCliente: Luiz | Serviço: Tela quebrada');
console.log('Registro adicionado!'); */

// 07. Organizando melhor o sistema
/* const fs = require('fs');
const path = require('path');
const caminhoArquivo = path.join(__dirname, 'registros', 'atendimento.txt');
fs.writeFileSync(caminhoArquivo, 'Cliente: César | Serviço: Formatação do sistema');
console.log('Arquivo salvo na pasta registros!');
*/

// 08. Visualizando o histórico
/* const fs = require('fs');
const path = require('path');
const caminhoArquivo = path.join(__dirname, 'registros', 'atendimento.txt');
const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');
console.log('Histórico')
console.log(conteudo); */

// DESAFIO FINAL
/* const fs = require('fs');
const path = require('path');
const caminhoArquivo = path.join(__dirname, 'registros', 'atendimento.txt');
fs.appendFileSync(caminhoArquivo, '\nCliente: Felipe | Serviço: Driver');
fs.appendFileSync(caminhoArquivo, '\nCliente: Gabriela | Serviço: Backup');
fs.appendFileSync(caminhoArquivo, '\nCliente: Hugo | Serviço: Rede');
console.log('Novos registros adicionados!');
 */
