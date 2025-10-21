# 🎨 Guia Completo de Imagens do Portfolio

## ✅ O que já está pronto:

### 1. Ícones Sociais (100% completo)
- ✅ Instagram
- ✅ LinkedIn
- ✅ GitHub
- ✅ E-mail
- ✅ Linktree

**Localização:** `src/assets/icons/social/`

### 2. Imagens dos Projetos (100% completo)
- ✅ Histórias Mal Contadas (4 screenshots)
- ✅ Kaching Software (4 screenshots)

**Localização:** `src/assets/images/projects/`

## ⚠️ O que precisa ser feito:

### 1. Foto de Perfil
📍 **Adicione em:** `src/assets/images/profile/perfil.jpg`

Depois de adicionar, atualize o componente `Profile.jsx`:

```javascript
// No início do arquivo, adicione:
import perfilImg from '../assets/images/profile/perfil.jpg';

// E onde tem a tag <img>, substitua o src por:
<img src={perfilImg} alt="Breno Santana" />
```

### 2. Imagens de Participações (LinkedIn)

As URLs do LinkedIn **expiram** e estão quebradas! Por isso você precisa baixar manualmente:

#### Como baixar do LinkedIn:

1. Acesse: https://www.linkedin.com/in/brenoasantana
2. Procure cada postagem/evento
3. Clique na imagem
4. Botão direito → "Salvar imagem como..."
5. Salve com os nomes abaixo:

#### Imagens necessárias:

**📍 Salve em:** `src/assets/images/participations/`

1. **hack-na-ilha.jpg** - Foto do evento Hack na Ilha (Abril 2024)
2. **programacao-0.jpg** - Foto do curso Programação 0 (Julho 2024)
3. **bate-papo-bd.jpg** - Bate-papo sobre Banco de Dados (Março 2024)
4. **desafio-kraft.jpg** - Premiação Desafio Kraft (Outubro 2024)

#### Depois de baixar, atualize o `profileData.js`:

```javascript
// No início do arquivo, adicione os imports:
import hackNaIlha from '../assets/images/participations/hack-na-ilha.jpg';
import programacao0 from '../assets/images/participations/programacao-0.jpg';
import batePapoBD from '../assets/images/participations/bate-papo-bd.jpg';
import desafioKraft from '../assets/images/participations/desafio-kraft.jpg';

// E substitua na seção participations:
participations: [
  {
    title: "Hack na Ilha",
    imgSrc: hackNaIlha, // ← Substituir placeholderImg
    alt: "Foto do evento Hack na Ilha",
    description: "...",
  },
  {
    title: "Programação 0",
    imgSrc: programacao0, // ← Substituir placeholderImg
    alt: "Foto do curso Programação 0",
    description: "...",
  },
  {
    title: "Bate Papo sobre Banco de Dados",
    imgSrc: batePapoBD, // ← Substituir placeholderImg
    alt: "Foto do bate papo sobre banco de dados",
    description: "...",
  },
  {
    title: "Desafio de Engenharia de Software Kraft Baterias EntregPag",
    imgSrc: desafioKraft, // ← Substituir placeholderImg
    alt: "Foto do Desafio Kraft",
    description: "...",
  },
],
```

## 🎯 Benefícios de Imagens Locais:

✅ **Nunca quebram** - Não dependem de links externos
✅ **Mais rápido** - Carregam do mesmo servidor
✅ **Melhor SEO** - Buscadores indexam melhor
✅ **Controle total** - Você decide quando mudar
✅ **Funciona offline** - Em desenvolvimento local
✅ **Build otimizado** - Webpack comprime automaticamente

## 📏 Tamanhos Recomendados:

- **Foto de perfil:** 500x500px (quadrada, JPEG 85% qualidade)
- **Participações:** 1200px largura (JPEG 85% qualidade)
- **Ícones:** SVG (já incluídos, perfeitos em qualquer tamanho)

## 🔧 Ferramentas de Compressão (Opcional):

### Online:
- https://tinypng.com/
- https://squoosh.app/

### Terminal (Mac):
```bash
brew install imagemagick

# Comprimir e redimensionar
mogrify -resize 1200x1200\> -quality 85 *.jpg
```

## 🚀 Status Atual:

```
✅ Estrutura de pastas criada
✅ Ícones sociais instalados (SVG)
✅ Imagens de projetos baixadas (GitHub)
✅ Placeholder temporário para participações
⏳ Aguardando: Imagens do LinkedIn
⏳ Aguardando: Foto de perfil
```

## 📝 Checklist Final:

- [ ] Baixar 4 imagens do LinkedIn
- [ ] Adicionar foto de perfil
- [ ] Atualizar imports no profileData.js
- [ ] Testar com `npm start`
- [ ] Fazer deploy com `npm run deploy`

---

Depois de completar tudo, seu portfolio estará 100% independente e super rápido! 🎉
