# 📁 Guia de Organização de Imagens

## 🎯 Estrutura de Pastas

```
src/assets/
├── images/
│   ├── profile/           # Sua foto de perfil
│   ├── projects/          # Screenshots dos projetos
│   │   ├── historias-mal-contadas/
│   │   └── kaching/
│   └── participations/    # Fotos de eventos/premiações
└── icons/
    └── social/            # Ícones de redes sociais (✅ já criados)
```

## 📥 Como Baixar e Adicionar Imagens

### 1️⃣ **Foto de Perfil**
- Coloque sua foto de perfil em: `src/assets/images/profile/perfil.jpg`
- Tamanho recomendado: 500x500px ou maior (quadrada)
- Formatos aceitos: `.jpg`, `.jpeg`, `.png`, `.webp`

### 2️⃣ **Imagens dos Projetos**

#### Histórias Mal Contadas
Baixe do GitHub e salve em `src/assets/images/projects/historias-mal-contadas/`:
- `tela-inicial.png`
- `tela-unknow.png`
- `level-two.png`
- `game-over.png`

**Como baixar:**
```bash
cd src/assets/images/projects/historias-mal-contadas/
curl -O "https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/raw/main/assets/images/tela_inicial.png"
curl -O "https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/raw/main/assets/images/tela_unknow.png"
curl -O "https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/raw/main/assets/images/level_two.png"
curl -O "https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/raw/main/assets/images/game_over.png"
```

#### Kaching Software
Baixe do GitHub e salve em `src/assets/images/projects/kaching/`:
- `tela-inicial.png`
- `cadastro-user.png`
- `apagar-user.png`
- `atualizar-user.png`

**Como baixar:**
```bash
cd src/assets/images/projects/kaching/
curl -O "https://github.com/brenoASantana/kaching/raw/main/view/css/img/telaInicial.png"
curl -O "https://github.com/brenoASantana/kaching/raw/main/view/css/img/cadastroUser.png"
curl -O "https://github.com/brenoASantana/kaching/raw/main/view/css/img/apagarUser.png"
curl -O "https://github.com/brenoASantana/kaching/raw/main/view/css/img/atualizarUser.png"
```

### 3️⃣ **Fotos de Participações/Eventos**

**IMPORTANTE:** As imagens do LinkedIn têm URLs temporárias que expiram!
Você precisa:

1. Abrir seu perfil do LinkedIn
2. Ir em cada postagem/evento
3. Baixar manualmente as imagens
4. Salvar em `src/assets/images/participations/` com os seguintes nomes:

- `hack-na-ilha.jpg` - Foto do evento Hack na Ilha
- `programacao-0.jpg` - Foto do curso Programação 0
- `bate-papo-bd.jpg` - Foto do bate papo sobre banco de dados
- `desafio-kraft.jpg` - Foto do Desafio Kraft/premiação

**Tamanho recomendado:** Largura mínima de 800px

### 4️⃣ **Ícones Sociais**
✅ **Já criados!** Não precisa fazer nada.

## 🖼️ Formatos Recomendados

- **Fotos de perfil/eventos:** `.jpg` ou `.webp` (melhor compressão)
- **Screenshots de projetos:** `.png` (melhor qualidade para interfaces)
- **Ícones:** `.svg` (já incluídos, vetoriais)

## ⚡ Otimização de Imagens (Opcional)

Para melhorar a performance do site, você pode comprimir as imagens:

**Online:**
- https://tinypng.com/ (PNG/JPG)
- https://squoosh.app/ (Todos os formatos)

**Terminal:**
```bash
# Instalar ImageMagick
brew install imagemagick

# Comprimir imagens
cd src/assets/images/participations/
mogrify -resize 1200x1200\> -quality 85 *.jpg
```

## 🔄 Próximo Passo

Depois de baixar todas as imagens, eu vou atualizar o arquivo `profileData.js` para usar os caminhos locais!
