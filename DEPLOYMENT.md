# 🚀 Guia de Deployment - Portfolio React

Documentação completa para deployment, CI/CD e operações de produção do portfolio.

## 📋 Sumário

- [Quick Start](#quick-start)
- [Ambientes](#ambientes)
- [CI/CD Pipeline](#cicd-pipeline)
- [GitHub Pages](#github-pages)
- [Vercel (Alternativa)](#vercel-alternativa)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Pre-commit Hooks](#pre-commit-hooks)
- [Troubleshooting](#troubleshooting)

---

## 🚄 Quick Start

### Deploy para GitHub Pages (automático)

```bash
# Fazer push para master → GitHub Actions executa automaticamente
git push origin master
```

GitHub Actions executará:

1. ✅ Lint (Biome)
2. ✅ Testes
3. ✅ Build
4. ✅ Deploy

**Status:** <https://github.com/brenoASantana/portfolio/actions>

### Deploy Manual

```bash
# Verificar mudanças locais
npm run lint
npm test

# Deploy manual
./scripts/deploy.sh

# Ou usar npm
npm run deploy:manual
```

---

## 🌍 Ambientes

### Desenvolvimento

```bash
npm start
# Roda em http://localhost:3000
# Hot reload ativado
# Variáveis: .env
```

### Produção (Local)

```bash
npm run build
# Gera pasta ./build
# Pronto para upload em qualquer host estático
```

### CI/CD (GitHub Actions)

```yaml
# .github/workflows/ci.yml
- Trigger: Push para master/main
- Jobs: lint → test → build → deploy
- Secrets: SPOTIFY_*, GITHUB_*
```

---

## 🔄 CI/CD Pipeline

### Workflow: CI (Lint → Test → Build)

Executado em **pull requests** e **push em master/main**:

```
PR/Push
  ↓
[LINT] Biome check (5s)
  ↓
[TEST] Jest suite (10s)
  ↓
[BUILD] React build (30s)
  ✅ Pronto para deploy
```

**Arquivo:** `.github/workflows/ci.yml`

### Workflow: Deploy (Build → GitHub Pages)

Executado em **push para master** (após CI passar):

```
Push Master
  ↓
[BUILD] React build com secrets Spotify
  ↓
[UPLOAD] Artifact para GitHub Pages
  ↓
[DEPLOY] Deploy automático
  ✅ Live em 2-3 minutos
```

**Arquivo:** `.github/workflows/deploy.yml`

### Secrets Necessários

Configure em: **GitHub → Settings → Secrets and variables**

```
SPOTIFY_CLIENT_ID        = seu_client_id
SPOTIFY_CLIENT_SECRET    = seu_client_secret
SPOTIFY_REFRESH_TOKEN    = seu_refresh_token
GITHUB_USERNAME          = seu_username
GITHUB_TOKEN             = seu_personal_access_token
```

**Como obter Spotify credentials:**

1. <https://developer.spotify.com/dashboard>
2. Create App
3. Adicione <http://localhost:3000> em Redirect URIs
4. Execute: `node get-refresh-token.js`

---

## 📄 GitHub Pages

### Configuração

```json
{
  "homepage": "https://brenoASantana.github.io/portfolio",
  ...
}
```

### Deploy Automático

```yaml
# Após CI passar, .github/workflows/deploy.yml executa:

1. Checkout code
2. Setup Node 20
3. npm ci --legacy-peer-deps
4. npm run build
5. Upload artifact ao GitHub Pages
6. Deploy automático
```

### URLs

| Ambiente | URL |
|----------|-----|
| Production | <https://brenoASantana.github.io/portfolio> |
| Preview (PR) | <https://brenoASantana.github.io/portfolio> (sempre main) |

### Branch Deploy

```yaml
# .github/workflows/deploy.yml
on:
  push:
    branches: [master]  # Somente master dispara deploy
  workflow_dispatch      # Manual trigger disponível
```

---

## 🟢 Vercel (Alternativa)

Se preferir usar Vercel ao invés de GitHub Pages:

### Conectar Vercel

```bash
# 1. Instalar CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod
```

### Configuração Automática

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "env": {
    "REACT_APP_SPOTIFY_CLIENT_ID": "@spotify_client_id",
    ...
  }
}
```

### Secrets Vercel

```bash
vercel env add SPOTIFY_CLIENT_ID
vercel env add SPOTIFY_CLIENT_SECRET
vercel env add SPOTIFY_REFRESH_TOKEN
```

---

## 🔐 Variáveis de Ambiente

### .env (Desenvolvimento)

```
REACT_APP_SPOTIFY_CLIENT_ID=local_id
REACT_APP_SPOTIFY_CLIENT_SECRET=local_secret
REACT_APP_SPOTIFY_REFRESH_TOKEN=local_token
```

### .env.production (Produção)

```
REACT_APP_GITHUB_PAGES=true
PUBLIC_URL=/portfolio/
REACT_APP_API_URL=https://brenoASantana.github.io/portfolio/api
REACT_APP_ENABLE_ANALYTICS=true
REACT_APP_ENABLE_ERROR_REPORTING=true
```

### Secrets (GitHub Actions)

Definidas em: **Settings → Secrets and variables → Actions**

- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_REFRESH_TOKEN`
- `GITHUB_USERNAME`
- `GITHUB_TOKEN`

### Acesso em Código

```tsx
// Browser (durante build)
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

// Server (Node.js)
const secret = process.env.SPOTIFY_CLIENT_SECRET;
```

---

## 🎣 Pre-commit Hooks

### Habilitado com Husky

```bash
# Instalado automaticamente após npm install
npx husky install
```

### Hook: pre-commit

Executado **antes de cada commit**:

```bash
npm run pre-commit
```

Verifica:

1. ✅ Lint (Biome)
2. ✅ TypeScript types
3. ✅ Testes

### Executar Manualmente

```bash
# Testar antes de commitar
npm run pre-commit

# Se falhar, fix automaticamente
npm run format  # Format code
npm run lint    # Check remaining issues
npm test        # Re-run tests
```

### Skip Pre-commit (Não Recomendado)

```bash
git commit --no-verify
```

---

## 📊 Quality Checks

### Lint (Biome)

```bash
npm run lint      # Check
npm run format    # Auto-fix
npm run check     # Lint + Format + Others
```

### TypeScript

```bash
# Type checking
npx tsc --noEmit

# (Executado em CI e pre-commit)
```

### Testes

```bash
npm test                                    # Watch mode
npm test -- --watchAll=false                # Single run
npm run test:coverage                       # Com coverage report
```

### Bundle Analysis

```bash
npm run build
npm run analyze
```

Mostra tamanho de cada módulo no bundle.

---

## 🔄 Workflows Úteis

### Workflow: Fazer Push para Production

```bash
# 1. Crie uma feature branch
git checkout -b feature/awesome-feature

# 2. Faça suas mudanças
# ... code ...
git add .
git commit -m "feat: add awesome feature"

# 3. Push para PR
git push origin feature/awesome-feature

# 4. GitHub Actions roda CI (lint → test → build)
# ✅ Se passar, você pode fazer PR

# 5. Code review
# (Alguém revisa seu PR)

# 6. Merge para master
# (GitHub Actions dispara deploy automaticamente)

# 7. Verifique em produção
# https://brenoASantana.github.io/portfolio
```

### Workflow: Deploy Manual de Emergência

```bash
# Caso a automação falhe

# 1. Verifique o status da ação
# https://github.com/brenoASantana/portfolio/actions

# 2. Execute manualmente
./scripts/deploy.sh

# Ou dispare workflow do GitHub
# Settings → Actions → Workflows → Deploy to GitHub Pages → Run workflow
```

---

## 🛠 Troubleshooting

### ❌ Erro: "npm ci --legacy-peer-deps failed"

```bash
# Solução: Reinstale dependências
rm package-lock.json node_modules
npm install --legacy-peer-deps
```

### ❌ Erro: "Build failed"

```bash
# Verificar localmente
npm run build

# Se funcionar, issue pode ser nos secrets
# Verifique: Settings → Secrets and variables
```

### ❌ Erro: "Tests failed in CI"

```bash
# Reproduzir localmente
npm test -- --watchAll=false

# Verificar coverage
npm run test:coverage
```

### ❌ Erro: "Deploy não apareceu"

```bash
# Verificar workflow status
# https://github.com/brenoASantana/portfolio/actions

# GitHub Pages pode levar 2-3 minutos
# Espere e recarregue a página

# Limpar cache do navegador
# Ctrl+Shift+Delete (ou Cmd+Shift+Delete no Mac)

# Verificar settings
# Settings → Pages → Should show: GitHub Pages is enabled
```

### ❌ Erro: "Spotify not playing"

```bash
# 1. Verificar se token expirou
node get-refresh-token.js

# 2. Atualizar secrets no GitHub

# 3. Triggar novo deploy
git push origin master
```

---

## 📈 Monitoramento

### GitHub Actions

- **Status:** <https://github.com/brenoASantana/portfolio/actions>
- Ver logs de cada workflow
- Rerun workflows que falharam

### Build Size

```bash
npm run build
npm run analyze
```

Monitorar tamanho do bundle:

- Current: ~96.8 kB (gzip)
- Target: < 100 kB

### Performance

- Lighthouse: <https://github.com/brenoASantana/portfolio/blob/master/lighthouserc.js>
- Google PageSpeed: <https://pagespeed.web.dev>

---

## 📝 Checklist de Deployment

Antes de fazer push para production:

- [ ] `npm run lint` - Sem erros
- [ ] `npm test -- --watchAll=false` - Testes passando
- [ ] `npm run build` - Build sem erros
- [ ] `npm run pre-commit` - Pre-commit checks passando
- [ ] Verificar `.env` vars estão corretas
- [ ] Code review feito (se necessário)
- [ ] Changelog atualizado

---

## 🎯 Próximos Passos

1. ✅ **Está tudo configurado!**
2. 🔄 Monitorar GitHub Actions: <https://github.com/brenoASantana/portfolio/actions>
3. 📊 Acompanhar performance do site
4. 🚀 Deploy novos features com confiança

---

## 📞 Suporte

- **Documentação:** Este arquivo
- **GitHub Actions:** <https://docs.github.com/en/actions>
- **Vercel Docs:** <https://vercel.com/docs>
- **React:** <https://react.dev>

---

**Última atualização:** Julho de 2026
