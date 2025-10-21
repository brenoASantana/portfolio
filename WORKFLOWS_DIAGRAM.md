# 🔄 Fluxograma das Pipelines

Visualização do que acontece em cada cenário.

## 📤 Push para Master/Main

```
┌─────────────────────────────────────────────────────────────────┐
│                       GIT PUSH MASTER                           │
└───────────────────────┬─────────────────────────────────────────┘
                        │
                        ├─────────────────────────────────────────┐
                        │                                         │
                   ┌────▼────┐                              ┌─────▼─────┐
                   │   CI    │                              │ Security  │
                   │         │                              │           │
                   │ Node 18 │                              │ npm audit │
                   │ Node 20 │                              │  CodeQL   │
                   └────┬────┘                              │   Snyk    │
                        │                                   └───────────┘
                   ┌────▼────┐
                   │  Lint   │
                   │ Biome   │
                   └────┬────┘
                        │
                   ┌────▼────┐
                   │  Test   │
                   │ Coverage│
                   └────┬────┘
                        │
                   ┌────▼────┐
                   │  Build  │
                   └────┬────┘
                        │
                        ├─────────────────────────────────────────┐
                        │                                         │
                   ┌────▼─────┐                            ┌──────▼──────┐
                   │  Deploy  │                            │Code Quality │
                   │          │                            │             │
                   │  Build   │                            │ Bundle Size │
                   │  Upload  │                            │  Analysis   │
                   │  Publish │                            └─────────────┘
                   └────┬─────┘
                        │
                   ┌────▼─────┐
                   │ GitHub   │
                   │  Pages   │
                   │          │
                   │  ✅ LIVE  │
                   └──────────┘
```

**Tempo total:** ~5-7 minutos

**Resultado:**
- ✅ Código validado
- ✅ Testes passando
- ✅ Segurança verificada
- ✅ Site atualizado
- 🌐 https://brenoASantana.github.io/portfolio

---

## 🔀 Pull Request

```
┌─────────────────────────────────────────────────────────────────┐
│                        OPEN PULL REQUEST                        │
└───────────────────────┬─────────────────────────────────────────┘
                        │
                        ├─────────────────────┬───────────────────┐
                        │                     │                   │
                   ┌────▼────┐          ┌────▼─────┐      ┌──────▼──────┐
                   │   CI    │          │ Security │      │Code Quality │
                   │         │          │          │      │             │
                   │ Node 18 │          │   Audit  │      │  Lint/Fmt   │
                   │ Node 20 │          │  CodeQL  │      │ Bundle Size │
                   └────┬────┘          └──────────┘      └─────────────┘
                        │
                   ┌────▼────┐
                   │  Lint   │
                   │  Test   │
                   │  Build  │
                   └────┬────┘
                        │
                   ┌────▼─────┐
                   │Lighthouse│
                   │          │
                   │ Performa-│
                   │   nce    │
                   │ A11y/SEO │
                   └────┬─────┘
                        │
                   ┌────▼──────┐
                   │Dependency │
                   │  Review   │
                   │           │
                   │Vulnerab.  │
                   └────┬──────┘
                        │
                   ┌────▼────┐
                   │ Report  │
                   │         │
                   │ ✅ Ready │
                   │ to Merge│
                   └─────────┘
```

**Tempo total:** ~6-8 minutos

**Resultado:**
- ✅ Todos os checks devem passar
- 📊 Relatório do Lighthouse disponível
- 🔒 Vulnerabilidades detectadas
- 📦 Tamanho do bundle analisado

---

## 🗓️ Segunda-feira 9h UTC (Automático)

```
┌─────────────────────────────────────────────────────────────────┐
│                     DEPENDABOT SCHEDULED                        │
└───────────────────────┬─────────────────────────────────────────┘
                        │
                   ┌────▼────────┐
                   │ Dependabot  │
                   │             │
                   │ Scan npm    │
                   │ Scan Actions│
                   └────┬────────┘
                        │
                   ┌────▼────────┐
                   │   Detect    │
                   │   Updates   │
                   └────┬────────┘
                        │
                   ┌────▼─────────┐
                   │ Create PRs   │
                   │              │
                   │ - react 19.2 │
                   │ - biome 1.10 │
                   │ - actions/v5 │
                   └────┬─────────┘
                        │
                   ┌────▼─────────┐
                   │  Auto-label  │
                   │ Auto-assign  │
                   └────┬─────────┘
                        │
                   ┌────▼─────────┐
                   │   Awaiting   │
                   │    Review    │
                   │              │
                   │ 📋 Your turn │
                   └──────────────┘
```

**Frequência:** Toda segunda 9h UTC

**Ação necessária:**
1. Revisar PRs criados
2. Verificar changelog
3. Mergear se tudo OK

---

## 🧹 Diariamente 00:00 UTC (Automático)

```
┌─────────────────────────────────────────────────────────────────┐
│                      STALE BOT SCHEDULED                        │
└───────────────────────┬─────────────────────────────────────────┘
                        │
                        ├────────────────────┬────────────────────┐
                        │                    │                    │
                   ┌────▼─────┐        ┌────▼────┐         ┌─────▼─────┐
                   │  Issues  │        │   PRs   │         │ Comments  │
                   │          │        │         │         │           │
                   │ > 60 days│        │ >30 days│         │  Check    │
                   └────┬─────┘        └────┬────┘         │  Activity │
                        │                    │              └───────────┘
                   ┌────▼─────┐        ┌────▼────┐
                   │   Mark   │        │  Mark   │
                   │   Stale  │        │  Stale  │
                   └────┬─────┘        └────┬────┘
                        │                    │
                  Wait 7 days           Wait 7 days
                        │                    │
                   ┌────▼─────┐        ┌────▼────┐
                   │   Close  │        │  Close  │
                   │          │        │         │
                   │ If still │        │If still │
                   │ inactive │        │inactive │
                   └──────────┘        └─────────┘
```

**Frequência:** Diariamente

**Benefício:**
- 🧹 Mantém repo organizado
- 📊 Métricas limpas
- ⚡ Foco no que importa

---

## 🔧 Desenvolvimento Local

```
┌─────────────────────────────────────────────────────────────────┐
│                     npm run pre-commit                          │
└───────────────────────┬─────────────────────────────────────────┘
                        │
                   ┌────▼────────┐
                   │  Check Git  │
                   │   Staged    │
                   └────┬────────┘
                        │
                   ┌────▼────┐
                   │  Biome  │
                   │   Lint  │
                   └────┬────┘
                        │
                   ┌────▼────┐
                   │  Biome  │
                   │  Format │
                   └────┬────┘
                        │
                   ┌────▼────┐
                   │  Biome  │
                   │  Check  │
                   └────┬────┘
                        │
                   ┌────▼────┐
                   │  Tests  │
                   │ Coverage│
                   └────┬────┘
                        │
                   ┌────▼────┐
                   │  Build  │
                   └────┬────┘
                        │
                   ┌────▼──────┐
                   │ Bundle    │
                   │ Analysis  │
                   └────┬──────┘
                        │
                   ┌────▼────┐
                   │  ✅ ALL  │
                   │  PASSED │
                   │         │
                   │  Ready  │
                   │to Commit│
                   └─────────┘
```

**Uso:**
```bash
npm run pre-commit
```

**Tempo:** ~2-3 minutos

**Benefício:**
- ✅ Catch errors antes do push
- ⚡ Feedback rápido
- 🚀 CI passa na primeira

---

## 🚀 Deploy Manual

```
┌─────────────────────────────────────────────────────────────────┐
│                     npm run deploy:manual                       │
└───────────────────────┬─────────────────────────────────────────┘
                        │
                   ┌────▼────────┐
                   │  Check Git  │
                   │   Status    │
                   └────┬────────┘
                        │
                   ┌────▼────┐
                   │   Pull  │
                   │  Latest │
                   └────┬────┘
                        │
                   ┌────▼────┐
                   │  Clean  │
                   │  Build  │
                   └────┬────┘
                        │
                   ┌────▼────┐
                   │ Install │
                   │   Deps  │
                   └────┬────┘
                        │
                   ┌────▼────┐
                   │  Tests  │
                   └────┬────┘
                        │
                   ┌────▼────┐
                   │  Build  │
                   │  Prod   │
                   └────┬────┘
                        │
                   ┌────▼────┐
                   │ Analyze │
                   │  Size   │
                   └────┬────┘
                        │
                   ┌────▼────┐
                   │ Deploy  │
                   │ gh-pages│
                   └────┬────┘
                        │
                   ┌────▼─────┐
                   │  ✅ LIVE  │
                   │          │
                   │ ~2-5 min │
                   └──────────┘
```

**Uso:**
```bash
npm run deploy:manual
```

**Tempo:** ~5-10 minutos

---

## 🎯 Resumo dos Gatilhos

| Evento           | Workflows Acionados                                    | Tempo   | Deploy |
| ---------------- | ------------------------------------------------------ | ------- | ------ |
| Push master      | CI + Deploy + Security + Code Quality                  | 5-7 min | ✅ Sim  |
| Pull Request     | CI + Lighthouse + Security + Code Quality + Dep Review | 6-8 min | ❌ Não  |
| Segunda 9h UTC   | Dependabot                                             | 1-2 min | ❌ Não  |
| Diário 00:00 UTC | Stale Bot                                              | < 1 min | ❌ Não  |
| Manual           | Deploy                                                 | 2-5 min | ✅ Sim  |

## 🔔 Notificações

Você receberá notificações quando:

- ✅ Pipeline completar com sucesso
- ❌ Pipeline falhar
- 🔒 Security alert for detectado
- 📦 Dependabot criar PR
- 🧹 Issue/PR for marcado como stale
- 💬 Comentário em PR

**Configurar:** Settings → Notifications → Actions

---

## 🎨 Status Visual

### ✅ Tudo OK
```
CI: ✅ Passed
Deploy: ✅ Deployed
Security: ✅ No issues
Code Quality: ✅ Passed
```

### ⚠️ Atenção Necessária
```
CI: ✅ Passed
Deploy: ⏳ In progress
Security: ⚠️ 1 moderate
Code Quality: ✅ Passed
```

### ❌ Erro
```
CI: ❌ Failed
Deploy: ⏸️ Cancelled
Security: ✅ No issues
Code Quality: ❌ Failed
```

---

## 📊 Métricas Acompanhadas

### Performance (Lighthouse)
```
Performance: ████████░░ 85/100
Accessibility: ██████████ 98/100
Best Practices: ██████████ 100/100
SEO: ██████████ 100/100
```

### Segurança
```
npm audit: 0 vulnerabilities
CodeQL: 0 alerts
Snyk: 0 issues
Dependency Review: ✅ Pass
```

### Qualidade
```
Code Coverage: ████████░░ 82%
Bundle Size: 245 KB
Lint Errors: 0
Format Issues: 0
```

---

**Dúvidas sobre os fluxos?** Veja [USAGE_GUIDE.md](./USAGE_GUIDE.md)
