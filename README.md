# Portfólio – Breno Santana

> Portfólio profissional moderno e atemporal com React, internacionalização (pt-BR / en-US), timeline de experiências, formulário de contato e design responsivo com glassmorphism.

**🔗 Acesse:** https://brenoasantana.github.io/portfolio/

## ✨ Stack Técnica

- React 19 + StrictMode
- i18next + react-i18next (locale detection automática)
- CSS Modules com design responsivo
- Biome (lint/format/check)
- GitHub Pages (deploy)
- GitHub Actions (CI/CD pipeline)
- Formspree (backend de formulário)
- Intersection Observer API (lazy loading)
- Source-map-explorer (análise de bundle)

## 📸 Funcionalidades

### Hero Section
- ✅ Profile com glassmorphism e animações
- ✅ Foto de perfil do GitHub
- ✅ CTAs para contato e LinkedIn
- ✅ Menu mobile hamburger responsivo

### Conteúdo
- ✅ Seção About com 4 parágrafos informativos
- ✅ Skills grid responsivo com hover effects
- ✅ Timeline de experiências profissionais com setas e layout alternado
- ✅ Integração Spotify com lazy loading (Intersection Observer)
- ✅ Formulário de contato com Formspree.io
- ✅ Copy-to-clipboard para email
- ✅ Footer com links sociais

### Internacionalização
- ✅ Toggle PT-BR / EN-US persistindo em localStorage
- ✅ Auto-detecção de idioma do navegador
- ✅ Todas as seções traduzidas

### Performance & SEO
- ✅ Lazy loading de componentes pesados
- ✅ CSS Modules para escopos isolados
- ✅ Design responsivo (360px - 1400px+)
- ✅ GitHub Actions CI/CD automático
- ✅ Meta tags e semântica HTML

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
  components/      # Componentes modulares (About, Profile, Experience, Contact, Skills, Footer)
  data/            # Fonte de dados central (profileData.js)
  i18n/            # Configuração i18next e arquivos de tradução (pt-BR, en-US)
  assets/          # Imagens e ícones SVG locais
```

## 🎨 Paleta de Cores

Baseada em tons de roxo, azul e dourado para um design moderno e elegante:

- `#1a1a1c` – Background primário (preto escuro)
- `#3d2a6d` – Roxo profundo (detalhes principais)
- `#2a3f6f` – Azul escuro (gradientes)
- `#c9a43b` – Dourado (acentos e highlights)
- `#f4f1e6` – Branco suave (texto primário)

## 🎵 Integração com Spotify

### ⚠️ IMPORTANTE: Segurança

Este é um **repositório público** - nunca commita o arquivo `.env` com credenciais!

- ✅ `.env` está no `.gitignore` (protegido)
- ❌ Nunca coloque credenciais no código
- 🔒 Use GitHub Secrets ou Vercel Secrets em produção

Veja [SECURITY.md](./SECURITY.md) para instruções de segurança.

### Passo 1: Criar Aplicação no Spotify

1. Acesse [Spotify for Developers](https://developer.spotify.com/dashboard)
2. Faça login e clique em "Create an App"
3. Preencha:
   - **App name**: portfolio-listening-now
   - **App description**: Widget Now Playing
   - **Redirect URI**: `https://brenoasantana.github.io/portfolio/callback`
4. Anote o **Client ID** e **Client Secret**

### Passo 2: Obter Refresh Token

Execute o script incluído (use variáveis de ambiente):

```bash
# Configurar credenciais localmente (NÃO commitar!)
export SPOTIFY_CLIENT_ID="seu_client_id"
export SPOTIFY_CLIENT_SECRET="seu_client_secret"

# Instalar dependências
npm install express axios --legacy-peer-deps

# Executar script
node get-refresh-token.js

# Acessar http://localhost:8888/login e autorizar
```

### Passo 3: Configurar .env (local apenas)

Crie `.env` na raiz:

```env
REACT_APP_SPOTIFY_CLIENT_ID=seu_client_id
REACT_APP_SPOTIFY_CLIENT_SECRET=seu_client_secret
REACT_APP_SPOTIFY_REFRESH_TOKEN=seu_refresh_token
```

⚠️ **Importante:** Este arquivo é ignorado pelo Git. Nunca será commitado.

### Passo 4: Reiniciar

```bash
npm start
```

### Para Produção (Vercel recomendado)

Mude para [Vercel](https://vercel.com) para deployment seguro com environment variables:

```bash
npm install -g vercel
vercel
```

Veja [SECURITY.md](./SECURITY.md) para mais detalhes.

## 🔐 Segurança

Veja [SECURITY.md](./SECURITY.md) para:
- Como proteger credenciais em produção
- Configurar GitHub Secrets
- Usar Vercel com secrets seguros

## 🎵 Integração com Spotify

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