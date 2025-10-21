# ✅ Checklist: Configuração das Pipelines

Use este checklist para garantir que tudo está configurado corretamente.

## 📋 Antes do Primeiro Push

### Verificação Local

- [ ] **Testes passam**
  ```bash
  npm test
  # Pressione 'q' para sair
  ```

- [ ] **Build funciona**
  ```bash
  npm run build
  # Deve criar pasta build/ sem erros
  ```

- [ ] **Biome check passa**
  ```bash
  npm run check
  # Não deve ter erros
  ```

- [ ] **Git status está limpo**
  ```bash
  git status
  # Verificar se todos os arquivos estão staged
  ```

### Arquivos Criados

- [x] `.github/workflows/ci.yml` - CI Pipeline
- [x] `.github/workflows/deploy.yml` - Deploy Pipeline
- [x] `.github/workflows/code-quality.yml` - Code Quality
- [x] `.github/workflows/security.yml` - Security
- [x] `.github/workflows/stale.yml` - Stale Bot
- [x] `.github/dependabot.yml` - Dependabot
- [x] `.github/ISSUE_TEMPLATE/bug_report.md` - Bug Template
- [x] `.github/ISSUE_TEMPLATE/feature_request.md` - Feature Template
- [x] `.github/PULL_REQUEST_TEMPLATE.md` - PR Template
- [x] `.vscode/settings.json` - VS Code Settings
- [x] `.vscode/extensions.json` - Extensões Recomendadas
- [x] `.vscode/launch.json` - Debug Config
- [x] `scripts/pre-commit-check.sh` - Pre-commit Script
- [x] `scripts/deploy.sh` - Deploy Script
- [x] `scripts/clean.sh` - Clean Script
- [x] `lighthouserc.js` - Lighthouse Config
- [x] `PIPELINES.md` - Documentação
- [x] `USAGE_GUIDE.md` - Guia de Uso
- [x] `CONTRIBUTING.md` - Contribuição
- [x] `PROJECT_STATUS.md` - Status
- [x] `PIPELINE_SUMMARY.md` - Resumo
- [x] `.gitignore` - Atualizado
- [x] `README.md` - Atualizado com badges
- [x] `package.json` - Novos scripts

## 🚀 Configuração do GitHub

### 1. GitHub Pages

- [ ] Ir para **Settings** → **Pages**
- [ ] Em **Source**, selecionar: **GitHub Actions**
- [ ] Salvar

**URL esperada:** `https://brenoASantana.github.io/portfolio`

### 2. Workflow Permissions

- [ ] Ir para **Settings** → **Actions** → **General**
- [ ] Rolar até **Workflow permissions**
- [ ] Selecionar: **Read and write permissions**
- [ ] Marcar: **Allow GitHub Actions to create and approve pull requests**
- [ ] Salvar

### 3. Secrets (Opcional)

Se quiser usar Snyk:
- [ ] Ir para **Settings** → **Secrets and variables** → **Actions**
- [ ] Clicar em **New repository secret**
- [ ] Nome: `SNYK_TOKEN`
- [ ] Valor: Seu token do Snyk
- [ ] Salvar

**Como obter token Snyk:**
1. Criar conta em https://snyk.io
2. Ir em Account Settings → API Token
3. Gerar novo token

## 📤 Primeiro Deploy

### 1. Commit e Push

```bash
# Adicionar todos os arquivos
git add .

# Commit com mensagem convencional
git commit -m "ci: adiciona pipelines completas de CI/CD

- Adiciona workflows de CI, Deploy, Code Quality, Security e Stale
- Configura Dependabot para atualizações automáticas
- Adiciona templates para issues e PRs
- Configura VS Code settings
- Adiciona scripts helper
- Atualiza documentação com badges
- Configura Lighthouse CI"

# Push para master
git push origin master
```

### 2. Verificar Execução

- [ ] Ir para **Actions** no GitHub
- [ ] Ver workflows executando
- [ ] Aguardar todos os checks passarem (verde ✅)

**URL:** `https://github.com/brenoASantana/portfolio_reactjs/actions`

### 3. Verificar Deploy

- [ ] Aguardar workflow **Deploy to GitHub Pages** completar
- [ ] Acessar: `https://brenoASantana.github.io/portfolio`
- [ ] Verificar se o site está funcionando

**Tempo esperado:** 2-5 minutos após push

### 4. Verificar Badges

- [ ] Atualizar página do README
- [ ] Badges devem mostrar status (verde/vermelho)

Badges esperados:
- ![CI](https://github.com/brenoASantana/portfolio_reactjs/workflows/CI/badge.svg)
- ![Deploy](https://github.com/brenoASantana/portfolio_reactjs/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
- ![Code Quality](https://github.com/brenoASantana/portfolio_reactjs/workflows/Code%20Quality/badge.svg)
- ![Security](https://github.com/brenoASantana/portfolio_reactjs/workflows/Security/badge.svg)

## 🧪 Testar Workflows

### Testar CI em PR

```bash
# 1. Criar branch de teste
git checkout -b test/pipeline-validation

# 2. Fazer pequena mudança
echo "# Test" >> TEST.md

# 3. Commit e push
git add TEST.md
git commit -m "test: valida pipelines"
git push origin test/pipeline-validation

# 4. Abrir PR no GitHub
# 5. Ver workflows executando no PR
# 6. Verificar Lighthouse audit
# 7. Verificar Dependency review
```

### Testar Deploy Manual

- [ ] Ir para **Actions**
- [ ] Selecionar **Deploy to GitHub Pages**
- [ ] Clicar em **Run workflow**
- [ ] Selecionar branch **master**
- [ ] Clicar em **Run workflow**
- [ ] Aguardar completar
- [ ] Verificar site atualizado

## 📊 Monitoramento Contínuo

### Diário

- [ ] Verificar se há PRs do Dependabot
- [ ] Revisar e mergear atualizações de dependências

### Semanal

- [ ] Verificar **Security** tab para alerts
- [ ] Revisar **Code scanning alerts**
- [ ] Verificar **Dependabot alerts**

### Mensal

- [ ] Revisar métricas de Lighthouse
- [ ] Analisar bundle size
- [ ] Verificar code coverage
- [ ] Limpar issues/PRs stale

## 🐛 Troubleshooting

### ❌ Pipeline falhou

**Problema:** Workflow com erro vermelho

**Solução:**
```bash
# 1. Ver logs no GitHub Actions
# 2. Reproduzir localmente
npm run pre-commit

# 3. Corrigir erro
# 4. Commit e push novamente
```

### ❌ Deploy falhou

**Problema:** Site não atualiza

**Verificar:**
- [ ] GitHub Pages configurado? (Settings → Pages)
- [ ] Permissions corretas? (Settings → Actions)
- [ ] Workflow completou? (Actions → Deploy)
- [ ] Aguardou 5 minutos?

**Solução:**
```bash
# Deploy manual
npm run deploy:manual
```

### ❌ Lighthouse falhou

**Problema:** Score baixo

**Solução:**
```bash
# 1. Testar localmente
npm run build
npx serve -s build -p 3000

# 2. Em outra janela
npx lighthouse http://localhost:3000/portfolio --view

# 3. Otimizar conforme sugestões
```

### ❌ CodeQL warnings

**Problema:** Security alerts

**Solução:**
- [ ] Ir em **Security** → **Code scanning alerts**
- [ ] Revisar cada alerta
- [ ] Aplicar correções sugeridas
- [ ] Commit e push

### ❌ Dependabot PRs não aparecem

**Problema:** Nenhum PR de dependências

**Verificar:**
- [ ] Dependabot habilitado? (Settings → Security → Dependabot)
- [ ] Aguardar segunda-feira 9h UTC
- [ ] Ver logs em **Insights** → **Dependency graph** → **Dependabot**

## ✅ Validação Final

### Checklist de Sucesso

- [ ] ✅ Todos os workflows passam
- [ ] 🚀 Site deployado e funcionando
- [ ] 🎨 Badges visíveis no README
- [ ] 📊 Lighthouse score > 90%
- [ ] 🔒 Sem security alerts
- [ ] 📦 Bundle size razoável
- [ ] 🧪 Coverage > 70%
- [ ] 📝 Documentação completa

### Métricas Esperadas

**Performance:**
- First Contentful Paint: < 2s ⚡
- Largest Contentful Paint: < 2.5s ⚡
- Cumulative Layout Shift: < 0.1 ⚡

**Qualidade:**
- Accessibility: > 90% ✅
- Best Practices: > 90% ✅
- SEO: > 90% ✅

**Segurança:**
- npm audit: 0 vulnerabilities 🔒
- CodeQL: 0 alerts 🔒

## 🎉 Pronto!

Se todos os itens acima estão marcados, suas pipelines estão funcionando perfeitamente!

### Próximos Passos

1. **Compartilhar:** Adicione o link do portfolio no LinkedIn e currículo
2. **Monitorar:** Acompanhe as métricas semanalmente
3. **Atualizar:** Aceite PRs do Dependabot regularmente
4. **Evoluir:** Continue melhorando com base nos insights

### URLs Importantes

- **Portfolio:** https://brenoASantana.github.io/portfolio
- **Repo:** https://github.com/brenoASantana/portfolio_reactjs
- **Actions:** https://github.com/brenoASantana/portfolio_reactjs/actions
- **Security:** https://github.com/brenoASantana/portfolio_reactjs/security

---

**Data:** 21/10/2025
**Status:** ✅ Pronto para produção
**Versão:** 1.0.0

**Dúvidas?** Veja [USAGE_GUIDE.md](./USAGE_GUIDE.md) ou [PIPELINES.md](./PIPELINES.md)
