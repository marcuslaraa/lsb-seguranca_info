#!/usr/bin/env ts-node

import yargs from 'yargs';
import { hideTextImage } from './utils/hideTextImage';
import { showTextImage } from './utils/showTextImage';


yargs(process.argv.slice(2))
  .command(
    'hide',
    'Esconde uma mensagem em uma imagem PNG',
    y => y
      .option('in', { type: 'string', demandOption: true, alias: 'i', describe: 'Imagem de entrada' })
      .option('out', { type: 'string', demandOption: true, alias: 'o', describe: 'Imagem de saída' })
      .option('msg', { type: 'string', demandOption: true, alias: 'm', describe: 'Mensagem secreta' }),
    argv => {
      hideTextImage(argv.in!, argv.out!, argv.msg!);
    }
  )
  .command(
    'reveal',
    'Recupera mensagem de uma imagem PNG',
    y => y.option('in', { type: 'string', demandOption: true, alias: 'i', describe: 'Imagem de entrada' }),
    argv => {
      const msg = showTextImage(argv.in!);
      console.log('Mensagem recuperada:', msg);
    }
  )
  .demandCommand()
  .help()
  .parse();
