const fs = require('fs');
const path = require('path');

const presentationsDir = path.join(__dirname, '..', 'presentations');
const inputDir = path.join(__dirname, '..', 'markdowns');

// Criar diretório de apresentações, se não existir
if (!fs.existsSync(presentationsDir)) {
  fs.mkdirSync(presentationsDir);
}

// Template básico com links de CDN para Reveal.js com tema Dracula
const htmlTemplate = (title, content) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>${title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js/dist/theme/black.css"> <!-- Base theme -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/dracula.min.css"> <!-- Dracula theme for code highlighting -->
  </head>
  <body>
    <div class="reveal">
      <div class="slides">
        ${content}
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js/dist/reveal.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js/plugin/notes/notes.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js/plugin/markdown/markdown.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js/plugin/highlight/highlight.js"></script>
    <script>
      Reveal.initialize({
        hash: true,
        plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
      });
    </script>
  </body>
</html>
`;

function convertMarkdownToHTML(filePath) {
  const fileName = path.basename(filePath, '.md');
  const outputFile = path.join(presentationsDir, `${fileName}.html`);
  const content = fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .map(line => `<section>${line.trim()}</section>`)
    .join('\n');

  const htmlContent = htmlTemplate(fileName, content);

  fs.writeFileSync(outputFile, htmlContent);
  console.log(`Apresentação gerada: ${outputFile}`);
}

const inputFiles = fs.readdirSync(inputDir).filter(file => file.endsWith('.md'));

inputFiles.forEach(file => {
  const filePath = path.join(inputDir, file);
  convertMarkdownToHTML(filePath);
});
