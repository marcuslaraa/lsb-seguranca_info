import { readFileSync } from 'fs';
import { PNG } from 'pngjs';

export function showTextImage(imagePath: string): string {
  const buffer = readFileSync(imagePath);
  const png = PNG.sync.read(buffer);

  const data = png.data;
  const bits: number[] = [];

  for (let i = 0; i < data.length; i += 4) {
    bits.push((data[i + 2] ?? 0) & 0b00000001);
  }

  let message = '';
  for (let i = 0; i < bits.length; i += 8) {
    const byteBits = bits.slice(i, i + 8);
    const byte = parseInt(byteBits.join(''), 2);
    if (byte === 0) break;
    message += String.fromCharCode(byte);
  }

  return message;
}
