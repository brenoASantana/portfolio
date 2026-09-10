# [>_] Breno Santana – Portfólio

**🔗 Acesse (Deploy via Vercel):** *[Insira_seu_link_da_Vercel_aqui]*

---

## 🎵 Destaque de Engenharia: Ecossistema Spotify API

Para demonstrar domínio com integrações RESTful, OAuth2 e Serverless, **construí do zero uma integração full-stack com a API oficial do Spotify**.

Esta feature consome meu status de "Ouvindo Agora" em tempo real e foi implementada em diferentes formatos pelo meu ecossistema:

1. **Neste Portfólio (React):** Consome a API de forma assíncrona, renderizando um widget interativo com lazy loading.
2. **No [README do meu Perfil no GitHub](https://github.com/brenoASantana):** Utiliza Serverless Functions (Vercel) para desenhar um arquivo SVG dinâmico em tempo real, burlando o bloqueio de scripts do GitHub.
3. **Neste Repositório:** Configurado para rodar localmente e em produção de forma segura, gerenciando o `Refresh Token` sem expor credenciais.

---

## ✨ Stack Técnica Principal

- **Front-end:** React 19 + StrictMode
- **Estilização:** CSS Modules (Escopos isolados e responsividade 360px - 1400px+)
- **Infra e Deploy:** Vercel (Hospedagem e Serverless Functions)
- **CI/CD & Qualidade:** GitHub Actions, Biome (lint/format/check)
- **Features Avançadas:** i18next (Locale detection), Intersection Observer API (Lazy loading), Formspree (Backend de formulário)

---

## 📸 Estrutura da Vitrine (Features)

### Hero & Layout

- Profile dinâmico com glassmorphism e animações.
- Menu mobile responsivo e CTAs diretos.
- Dark mode imersivo com paleta de cores focada em contraste (Preto, Roxo profundo, Azul escuro e Dourado).

### Componentização de Produtos

- **Product Showcase:** Exibição em formato de "cartuchos" dos meus projetos principais (ex: *Histórias Mal Contadas*, *Kaching Software* e sistemas web).
- **Character Stats (About):** Habilidades e stack técnica apresentadas como uma skill tree de RPG.
- **Timeline de Experiências:** Layout alternado e imersivo mostrando a evolução profissional.
- **Contato:** Formulário integrado via Formspree e recurso de *copy-to-clipboard*.

---

## 🌐 Internacionalização (i18n)

O sistema (`i18n/config.js`) faz auto-detecção do idioma do navegador e persiste a escolha no `localStorage`.

- Traduções localizadas em: `src/i18n/locales/*.json`.
- Para referenciar novos textos nos componentes use: `t('namespace.chave')`.

---

## 🔄 Sincronização com LinkedIn

O portfolio tenta atualizar os dados do perfil ao ser aberto através de
`/api/linkedin/profile`. O token fica somente na função serverless da Vercel e
os dados recebidos ficam em cache no navegador por 15 minutos. Se a integração
estiver indisponível, os dados locais de `src/data/profileData.ts` continuam
sendo usados.

Para ativar a integração, crie uma aplicação no [LinkedIn Developers](https://www.linkedin.com/developers/)
e configure esta variável de ambiente na Vercel:

```env
LINKEDIN_ACCESS_TOKEN=seu_token_de_acesso
```

O produto OpenID Connect / Sign In with LinkedIn permite sincronizar nome e
localidade. Experiências profissionais e habilidades só ficam disponíveis se o
LinkedIn aprovar os produtos e escopos correspondentes para a aplicação. O
portfolio usa esses campos quando eles forem retornados, sem apagar o fallback
local quando a API não os fornecer. Não é usado scraping do perfil público.

---
