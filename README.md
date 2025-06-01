# Portfólio – Breno Santana

> Aplicação React com internacionalização (pt-BR / en-US), carrossel de projetos, recomendações e seção de participações. Estruturada com dados centralizados em `profileData` e Makefile para produtividade.

**🔗 Acesse:** https://brenoasantana.github.io/portfolio/

## ✨ Stack Técnica

- React 19 + StrictMode
- i18next + react-i18next (locale detection automática)
- CSS Modules
- Biome (lint/format/check)
- GitHub Pages (deploy)
- Source-map-explorer (análise de bundle)

## 📸 Funcionalidades

- ✅ Projetos e projetos em andamento (conteúdo traduzido)
- ✅ Participações (com placeholders para substituição futura)
- ✅ Recomendações dinâmicas (LinkedIn)
- ✅ Toggle de idioma persistindo em `localStorage`
- ✅ Seção de skills e experiências centralizadas
- ✅ Social links com ícones SVG locais
- ✅ Design responsivo para mobile, tablet e desktop

## 🚀 Desenvolvimento

### Pré-requisitos
- Node 18+ (recomendado gerenciar via nvm)

### Instalação
```bash
make install
```

### Ambiente de desenvolvimento
```bash
make dev
```
App em: http://localhost:3000

### Build de produção
```bash
make build
```

### Qualidade de código
```bash
make lint
make format
make check       # pacote completo Biome
```

### Análise de bundle
```bash
make analyze
```

### Deploy (GitHub Pages)
```bash
make deploy
```

## 🔧 Makefile (atalhos)

| Comando        | Descrição                     |
| -------------- | ----------------------------- |
| `make install` | Instala dependências          |
| `make dev`     | Inicia servidor dev           |
| `make build`   | Gera build produção           |
| `make lint`    | Lint Biome                    |
| `make format`  | Formata código                |
| `make check`   | Lint + format + outras checks |
| `make analyze` | Analisa bundle pós-build      |
| `make deploy`  | Build + deploy GitHub Pages   |
| `make clean`   | Remove build + node_modules   |

## 🌐 Internacionalização
`i18n/config.js` faz auto-detecção de idioma do navegador e persiste escolha do usuário em `localStorage`. Traduções em `src/i18n/locales/*.json`.

Para adicionar novas chaves:
1. Adicione em `pt-BR.json` e `en-US.json`
2. Referencie com `t('namespace.chave')` no componente

Para novo idioma:
1. Crie arquivo `xx-YY.json`
2. Registre em `resources` no `config.js`
3. Ajuste lógica de detecção se necessário

## 📦 Estrutura Principal
```
src/
  components/      # Componentes modulares (About, Profile, Projects, etc.)
  data/            # Fonte de dados central (profileData.js)
  i18n/            # Configuração i18next e arquivos de tradução (pt-BR, en-US)
  assets/          # Imagens e ícones SVG locais
```

## 🎨 Paleta de Cores

Inspirada em: [ColorHunt Palette](https://colorhunt.co/palette/180a0a711a75f10086f582a7)

- `#180A0A` – Preto escuro (background/contraste)
- `#711A75` – Roxo profundo (detalhes e títulos)
- `#F10086` – Rosa vibrante (realces e ícones)
- `#F582A7` – Rosa claro (tons de apoio)

## 📬 Contato

| Plataforma | Link                                  |
| ---------- | ------------------------------------- |
| Instagram  | https://instagram.com/brenoasantana   |
| LinkedIn   | https://linkedin.com/in/brenoasantana |
| GitHub     | https://github.com/brenoasantana      |
| E-mail     | contatobrenosantana@outlook.com       |
| Linktree   | https://linktr.ee/brenoasantana       |

## 🤝 Contribuição

Pull requests e sugestões são bem-vindos! Sinta-se à vontade para:
- Abrir uma issue descrevendo sua ideia
- Sugerir melhorias de performance ou acessibilidade
- Reportar bugs ou problemas

---

**Desenvolvido com ❤️ por Breno Santana**