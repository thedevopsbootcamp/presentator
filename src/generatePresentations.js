const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const presentationsDir = path.join(__dirname, '..', 'presentations');
const inputDir = path.join(__dirname, '..', 'markdowns'); // pasta com arquivos .md

if (!fs.existsSync(presentationsDir)) {
  fs.mkdirSync(presentationsDir);
}

function convertMarkdownToReveal(filePath) {
  const fileName = path.basename(filePath, '.md');
  const outputFile = path.join(presentationsDir, `${fileName}.html`);
  const revealTemplate = path.join(__dirname, '..', 'node_modules', 'reveal.js', 'index.html');

  // Comando básico de conversão usando o Reveal.js como exemplo (você pode customizar conforme necessário)
  const command = `pandoc "${filePath}" -t revealjs -s -o "${outputFile}" --template="${revealTemplate}"`;

  try {
    execSync(command);
    console.log(`Apresentação gerada: ${outputFile}`);
  } catch (error) {
    console.error(`Erro ao gerar apresentação para ${filePath}: ${error}`);
  }
}

// Processar todos os arquivos .md do diretório especificado
const inputFiles = fs.readdirSync(inputDir).filter(file => file.endsWith('.md'));

inputFiles.forEach(file => {
  const filePath = path.join(inputDir, file);
  convertMarkdownToReveal(filePath);
});
