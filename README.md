# 💗 Nosso site — GitHub Pages

Este projeto é um site romântico inspirado em uma interface de vídeo, criado para contar a história de um casal.

## Como personalizar

### 1. Vídeo
Coloque seu vídeo em:

`assets/nosso-video.mp4`

### 2. Capa
Coloque uma imagem de capa em:

`assets/capa.jpg`

### 3. Data do relacionamento
Abra `script.js` e altere:

```js
startDate: "2024-01-01"
```

para a data de vocês.

### 4. Textos
Os textos principais estão em `index.html`. Procure pelos comentários `<!--` ou simplesmente pesquise frases como:
- "Quando nossos caminhos se cruzaram"
- "Um sim para a vida"
- "Para você"

### 5. Fotos
Na seção "Alguns dos nossos momentos", você pode substituir os blocos `FOTO 01`, `FOTO 02` etc. por imagens.

Exemplo:

```html
<img src="assets/foto1.jpg" alt="Nós dois">
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para o repositório.
3. Vá em **Settings → Pages**.
4. Em "Build and deployment", escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/root`.
6. Salve.
7. O GitHub vai fornecer o endereço público do site.

## Estrutura

- `index.html` — conteúdo do site
- `style.css` — visual e responsividade
- `script.js` — interações, contador, comentários, modais e efeitos
- `assets/` — vídeo, capa e fotos

O site não precisa de banco de dados ou servidor: funciona como um site estático.
