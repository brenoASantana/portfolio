# 📚 Guia de Uso das Pipelines

## 🚀 Início Rápido

### 1. Primeiro Deploy

```bash
# 1. Configure o GitHub Pages
# Vá em: Settings → Pages → Source: GitHub Actions

# 2. Configure as permissões do workflow
# Vá em: Settings → Actions → General → Workflow permissions
# Selecione: "Read and write permissions"

# 3. Faça o commit das pipelines
git add .
git commit -m "ci: adiciona pipelines completas de CI/CD"
git push origin master

# 4. Acompanhe o deploy em:
# https://github.com/brenoASantana/portfolio_reactjs/actions
```

### 2. Desenvolvimento Diário

```bash
# Antes de commitar, execute verificações locais:
npm run pre-commit

# Ou manualmente:
npm run check        # Verifica código
npm test             # Executa testes
npm run build        # Testa build
```

### 3. Deploy Manual

```bash
# Usar o script automatizado:
npm run deploy:manual

# Ou comando direto:
npm run deploy
```

## 📋 Workflows Disponíveis

### CI Pipeline

**Quando executa:**
- Push para `master`, `main`, `develop`
- Pull Request para `master`, `main`, `develop`

**O que faz:**
1. Testa em Node 18.x e 20.x
2. Executa Biome lint
3. Verifica formatação
4. Roda testes com cobertura
5. Upload para Codecov
6. Build de produção
7. Lighthouse audit (apenas PRs)

**Ver execução:**
```bash
https://github.com/brenoASantana/portfolio_reactjs/actions/workflows/ci.yml
```

**Badge:**
```markdown
![CI](https://github.com/brenoASantana/portfolio_reactjs/workflows/CI/badge.svg)
```

### Deploy Pipeline

**Quando executa:**
- Push para `master` ou `main`
- Manualmente via GitHub Actions

**O que faz:**
1. Build de produção otimizado
2. Deploy para GitHub Pages
3. Disponibiliza URL

**Executar manualmente:**
1. Vá em Actions → Deploy to GitHub Pages
2. Clique em "Run workflow"
3. Selecione a branch
4. Clique em "Run workflow"

**Ver execução:**
```bash
https://github.com/brenoASantana/portfolio_reactjs/actions/workflows/deploy.yml
```

**URL do site:**
```bash
https://brenoASantana.github.io/portfolio
```

### Code Quality Pipeline

**Quando executa:**
- Push para branches principais
- Pull Requests

**O que faz:**
1. Biome lint com reporter do GitHub
2. Verifica formatação
3. Analisa tamanho do bundle
4. Dependency review (PRs)

**Ver execução:**
```bash
https://github.com/brenoASantana/portfolio_reactjs/actions/workflows/code-quality.yml
```

### Security Pipeline

**Quando executa:**
- Push para `master`/`main`
- Pull Requests
- Semanalmente (Segunda 9h UTC)

**O que faz:**
1. npm audit
2. CodeQL analysis
3. Snyk scan (opcional)

**Ver execução:**
```bash
https://github.com/brenoASantana/portfolio_reactjs/actions/workflows/security.yml
```

## 🔧 Comandos Úteis

### Verificação Local

```bash
# Verificação completa antes de commit
npm run pre-commit

# Apenas lint
npm run lint

# Apenas formatação
npm run format

# Check completo
npm run check

# Testes com cobertura
npm run test:coverage

# Testes modo CI
npm run test:ci
```

### Análise e Debug

```bash
# Analisar tamanho do bundle
npm run analyze

# Ver cobertura de testes
npm run test:coverage
# Abrir: coverage/lcov-report/index.html

# Build local
npm run build

# Preview do build
npx serve -s build -p 3000
```

### Limpeza

```bash
# Limpar tudo
npm run clean

# Reinstalar
npm install --legacy-peer-deps
```

## 🎯 Fluxo de Trabalho Recomendado

### Feature Nova

```bash
# 1. Criar branch
git checkout -b feature/nova-funcionalidade

# 2. Desenvolver
# ... fazer mudanças ...

# 3. Verificar localmente
npm run pre-commit

# 4. Commit
git commit -m "feat: adiciona nova funcionalidade"

# 5. Push
git push origin feature/nova-funcionalidade

# 6. Abrir PR no GitHub
# - Todos os checks rodarão automaticamente
# - Lighthouse audit será executado
# - Code review pode ser feito

# 7. Merge para master
# - Deploy automático será acionado
# - Site atualizado em minutos
```

### Bug Fix

```bash
# 1. Criar branch
git checkout -b fix/corrige-bug

# 2. Corrigir
# ... fazer correção ...

# 3. Adicionar teste
# ... criar teste que falha sem a correção ...

# 4. Verificar
npm run pre-commit

# 5. Commit
git commit -m "fix: corrige bug no carrossel"

# 6. Push e PR
git push origin fix/corrige-bug

# 7. Merge após aprovação
```

### Hotfix em Produção

```bash
# 1. Direto na master (emergência)
git checkout master
git pull origin master

# 2. Fazer correção
# ... corrigir ...

# 3. Verificar rapidamente
npm run check
npm test

# 4. Commit e push
git commit -m "fix: hotfix crítico"
git push origin master

# Deploy automático será acionado
```

## 📊 Monitoramento

### GitHub Actions

Ver todos os workflows:
```bash
https://github.com/brenoASantana/portfolio_reactjs/actions
```

### Ver status dos badges

Os badges no README mostram status em tempo real:
- 🟢 Verde: Tudo OK
- 🔴 Vermelho: Falhou
- 🟡 Amarelo: Executando

### Notificações

Configure notificações em:
```bash
Settings → Notifications → Actions
```

### Codecov (Opcional)

Se configurar Codecov:
```bash
https://codecov.io/gh/brenoASantana/portfolio_reactjs
```

## 🐛 Troubleshooting

### Pipeline falhou

```bash
# 1. Ver logs
# Clique no workflow com erro
# Veja qual job falhou
# Expanda os steps para ver o erro

# 2. Reproduzir localmente
npm run pre-commit

# 3. Corrigir e commit
git add .
git commit -m "fix: corrige erro de lint"
git push
```

### Deploy não funcionou

```bash
# Verificar:
# 1. GitHub Pages está configurado?
#    Settings → Pages → Source: GitHub Actions

# 2. Workflow permissions corretas?
#    Settings → Actions → General → Workflow permissions
#    Deve ser: "Read and write permissions"

# 3. Branch correta?
#    Deploy só roda em master/main

# 4. Ver logs do deploy
#    Actions → Deploy to GitHub Pages → Ver último run
```

### Lighthouse falhou

```bash
# Lighthouse pode falhar por:
# 1. Performance baixa
# 2. Acessibilidade < 90%
# 3. SEO < 90%

# Verificar localmente:
npm run build
npx serve -s build -p 3000

# Em outra janela:
npx lighthouse http://localhost:3000/portfolio --view
```

### CodeQL warnings

```bash
# CodeQL pode apontar:
# 1. Problemas de segurança
# 2. Code smells
# 3. Vulnerabilidades

# Ver em:
# Security → Code scanning alerts
```

## 💡 Dicas

### Economizar minutos do Actions

```bash
# 1. Use [skip ci] no commit message para pular CI
git commit -m "docs: atualiza README [skip ci]"

# 2. Cancele workflows duplicados
# Actions → Clique no workflow → Cancel workflow

# 3. Use cache de npm (já configurado)
```

### Melhorar Performance

```bash
# 1. Code splitting
# 2. Lazy loading
# 3. Otimizar imagens
# 4. Tree shaking (já automático)

# Ver tamanho:
npm run analyze
```

### Debugar Localmente

```bash
# Simular CI local:
CI=true npm test -- --coverage --watchAll=false

# Build de produção:
CI=false GENERATE_SOURCEMAP=false npm run build

# Preview:
npx serve -s build -p 3000
```

## 🎓 Recursos

- [GitHub Actions Docs](https://docs.github.com/actions)
- [Biome Docs](https://biomejs.dev/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [React Testing Library](https://testing-library.com/react)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Dúvidas?** Abra uma issue ou veja [CONTRIBUTING.md](./CONTRIBUTING.md)
