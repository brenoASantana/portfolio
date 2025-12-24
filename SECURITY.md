# 🔒 Segurança - Configurando Secrets no GitHub Pages

## ⚠️ Problema: Variáveis de Ambiente em GitHub Pages

GitHub Pages é **estático** - não pode usar variáveis de ambiente secretas como um servidor tradicional.

## ✅ Solução Recomendada: Usar Vercel ao invés de GitHub Pages

Para ter acesso seguro a variáveis de ambiente, mude o deployment para **Vercel** (gratuito):

### 1. Preparar o projeto

```bash
# Criar arquivo deploy na raiz
touch vercel.json
```

Adicione em `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "env": {
    "REACT_APP_SPOTIFY_CLIENT_ID": "@spotify_client_id",
    "REACT_APP_SPOTIFY_CLIENT_SECRET": "@spotify_client_secret",
    "REACT_APP_SPOTIFY_REFRESH_TOKEN": "@spotify_refresh_token"
  }
}
```

### 2. Deploy no Vercel

```bash
npm install -g vercel
vercel
```

### 3. Adicionar Secrets no Vercel Dashboard

1. Vá para <https://vercel.com/dashboard>
2. Selecione seu projeto
3. Settings → Environment Variables
4. Adicione:
   - `REACT_APP_SPOTIFY_CLIENT_ID`
   - `REACT_APP_SPOTIFY_CLIENT_SECRET`
   - `REACT_APP_SPOTIFY_REFRESH_TOKEN`

## 🔄 Alternativa: Usar GitHub Actions para Build

Se quiser manter GitHub Pages, use GitHub Secrets + Actions:

### 1. Adicionar Secrets no GitHub

1. Vá para: `Settings → Secrets and variables → Actions`
2. Clique em "New repository secret"
3. Adicione:
   - `SPOTIFY_CLIENT_ID`
   - `SPOTIFY_CLIENT_SECRET`
   - `SPOTIFY_REFRESH_TOKEN`

### 2. Atualizar Workflow

Edite `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [master]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18

      - run: npm install

      - name: Build
        env:
          REACT_APP_SPOTIFY_CLIENT_ID: ${{ secrets.SPOTIFY_CLIENT_ID }}
          REACT_APP_SPOTIFY_CLIENT_SECRET: ${{ secrets.SPOTIFY_CLIENT_SECRET }}
          REACT_APP_SPOTIFY_REFRESH_TOKEN: ${{ secrets.SPOTIFY_REFRESH_TOKEN }}
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## ⚡ Por enquanto (solução rápida)

Se não quiser mudar para Vercel agora:

1. ✅ `.env` está no `.gitignore` (seguro)
2. ⚠️ Em produção, a música não vai aparecer (sem credenciais)
3. 📝 Mostre o widget "Não estou ouvindo agora" como fallback

## 🎯 Recomendação Final

**Use Vercel** - é grátis, mais rápido e resolve o problema de segurança automaticamente!

```bash
# Deploy com um comando
vercel --prod
```

---

**Próximas ações:**

- [ ] Remover credenciais do repositório público (feito)
- [ ] Escolher entre Vercel ou GitHub Actions
- [ ] Reconfigurar o Spotify com novos secrets seguros
