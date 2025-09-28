import { readFileSync, writeFileSync } from 'fs';
import { PNG } from 'pngjs';

export function hideTextImage(inputPath: string, outputPath: string, message: string) {
  const buffer = readFileSync(inputPath);
  const png = PNG.sync.read(buffer);

  if (!png) throw new Error('Erro ao ler a imagem PNG.');

  const bits = message
    .split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('')
    .split('')
    .map(bit => parseInt(bit));

  bits.push(...Array(8).fill(0));

  const data = png.data;
  let bitIndex = 0;

  for (let i = 0; i < data.length; i += 4) {
    if (bitIndex >= bits.length) break;
    if (typeof data[i + 2] !== 'undefined' && typeof bits[bitIndex] !== 'undefined') {
      data[i + 2] = ((data[i + 2] ?? 0) & 0b11111110) | (bits[bitIndex] ?? 0);
      bitIndex++;
    }
  }

  const newPng = PNG.sync.write(png);
  writeFileSync(outputPath, newPng);
  console.log(`Texto escondido em ${outputPath}`);
}
