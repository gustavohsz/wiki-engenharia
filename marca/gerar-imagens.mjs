// Gera as imagens de marca do site a partir dos arquivos desta pasta.
// Usa o Chrome (ou Edge) instalado, em modo sem janela; não precisa de npm install.
//
// Uso, na raiz do repositório:
//   node marca/gerar-imagens.mjs
//
// Saída em site/static/img/:
//   logo.svg, logo-escuro.svg, favicon.svg  (cópias dos SVG desta pasta)
//   favicon.ico                             (16, 32 e 48 px)
//   apple-touch-icon.png                    (180 px)
//   cartao-social.png                       (1200×630, imagem de compartilhamento)

import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const pastaMarca = path.dirname(fileURLToPath(import.meta.url));
const destino = path.join(pastaMarca, '..', 'site', 'static', 'img');
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'marca-'));

// 1. Localiza o navegador. Defina CHROME=<caminho> para usar outro.
const candidatos = [
  process.env.CHROME,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const chrome = candidatos.find((c) => fs.existsSync(c));
if (!chrome) {
  console.error('Chrome ou Edge não encontrado. Defina a variável CHROME com o caminho do executável.');
  process.exit(1);
}

// Captura uma página HTML local como PNG, no tamanho exato, com fundo transparente.
function capturar(arquivoHtml, largura, altura, saida) {
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--default-background-color=00000000',
    `--user-data-dir=${path.join(temp, 'perfil')}`,
    `--window-size=${largura},${altura}`,
    `--screenshot=${saida}`,
    pathToFileURL(arquivoHtml).href,
  ], {stdio: 'ignore'});
  if (!fs.existsSync(saida)) throw new Error(`Falha ao gerar ${saida}`);
}

// Página que mostra o logo ocupando todo o quadro (para os ícones).
// quadrado = true tira os cantos arredondados: o iOS arredonda o apple-touch-icon
// sozinho, e cantos transparentes apareceriam pretos.
function paginaIcone(tamanho, quadrado = false) {
  let svg = fs.readFileSync(path.join(pastaMarca, 'logo.svg'), 'utf8');
  if (quadrado) svg = svg.replace('rx="14"', 'rx="0"');
  const html = `<!doctype html><html><head><style>html,body{margin:0;background:transparent}
svg{display:block;width:${tamanho}px;height:${tamanho}px}</style></head><body>${svg}</body></html>`;
  const arquivo = path.join(temp, `icone-${tamanho}${quadrado ? '-q' : ''}.html`);
  fs.writeFileSync(arquivo, html);
  return arquivo;
}

// Monta um .ico com PNGs embutidos (formato aceito por todos os navegadores atuais).
function montarIco(pngs) {
  const cabecalho = Buffer.alloc(6);
  cabecalho.writeUInt16LE(0, 0); // reservado
  cabecalho.writeUInt16LE(1, 2); // tipo: ícone
  cabecalho.writeUInt16LE(pngs.length, 4);
  let deslocamento = 6 + 16 * pngs.length;
  const entradas = pngs.map(({tamanho, dados}) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(tamanho >= 256 ? 0 : tamanho, 0); // largura
    e.writeUInt8(tamanho >= 256 ? 0 : tamanho, 1); // altura
    e.writeUInt8(0, 2); // paleta
    e.writeUInt8(0, 3); // reservado
    e.writeUInt16LE(1, 4); // planos
    e.writeUInt16LE(32, 6); // bits por pixel
    e.writeUInt32LE(dados.length, 8);
    e.writeUInt32LE(deslocamento, 12);
    deslocamento += dados.length;
    return e;
  });
  return Buffer.concat([cabecalho, ...entradas, ...pngs.map((p) => p.dados)]);
}

fs.mkdirSync(destino, {recursive: true});

// 2. SVGs: cópia direta.
for (const nome of ['logo.svg', 'logo-escuro.svg', 'favicon.svg']) {
  fs.copyFileSync(path.join(pastaMarca, nome), path.join(destino, nome));
}

// 3. favicon.ico (16, 32, 48) e apple-touch-icon (180).
const pngs = [16, 32, 48].map((tamanho) => {
  const saida = path.join(temp, `icone-${tamanho}.png`);
  capturar(paginaIcone(tamanho), tamanho, tamanho, saida);
  return {tamanho, dados: fs.readFileSync(saida)};
});
fs.writeFileSync(path.join(destino, 'favicon.ico'), montarIco(pngs));
capturar(paginaIcone(180, true), 180, 180, path.join(destino, 'apple-touch-icon.png'));

// 4. Imagem de compartilhamento.
capturar(path.join(pastaMarca, 'cartao-social.html'), 1200, 630, path.join(destino, 'cartao-social.png'));

fs.rmSync(temp, {recursive: true, force: true});
console.log(`Imagens geradas em ${destino}`);
