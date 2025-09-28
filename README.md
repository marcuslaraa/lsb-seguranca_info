# LSB-Segurança

Este projeto implementa um sistema de esteganografia utilizando o método LSB (Least Significant Bit) para esconder e revelar mensagens em imagens.

## Como a mensagem é escondida na imagem
A mensagem é convertida em uma sequência de bits e, em seguida, cada bit é inserido no bit menos significativo (LSB) dos pixels da imagem. Isso faz com que a alteração visual seja imperceptível ao olho humano, mantendo a imagem praticamente igual à original.

## Como a mensagem é revelada
Para revelar a mensagem, o programa percorre os pixels da imagem e extrai o bit menos significativo de cada um, reconstruindo assim a mensagem original.


## Como usar via CLI
O projeto possui uma interface de linha de comando (CLI) para esconder e revelar mensagens. Os comandos são executados via `yarn`:

### Esconder mensagem
```bash
yarn hide --i <imagem_entrada> --o <imagem_saida> --m "<mensagem>"
```
- `--i <imagem_entrada>`: Caminho da imagem original.
- `--o <imagem_saida>`: Caminho para salvar a imagem com a mensagem escondida.
- `--m "<mensagem>"`: Mensagem a ser escondida (entre aspas se houver espaços).

### Revelar mensagem
```bash
yarn reveal --i <imagem_com_mensagem>
```
- `--i <imagem_com_mensagem>`: Caminho da imagem com a mensagem escondida.

## Exemplo de uso
```bash
yarn hide --i imagem1.png --o teste.png --m "Palmeiras não tem mundial!"
yarn reveal --i teste.png
```

## Estrutura do Projeto
- `cli.ts`: Interface de linha de comando.
- `utils/hideTextImage.ts`: Função para esconder mensagem.
- `utils/showTextImage.ts`: Função para revelar mensagem.

---

Desenvolvido para fins educacionais.
