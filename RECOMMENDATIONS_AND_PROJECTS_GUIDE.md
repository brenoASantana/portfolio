# 📝 Guia: Como Adicionar Recomendações e Projetos Simples

## 🎯 Recomendações do LinkedIn

### Como obter recomendações do LinkedIn

1. **Acesse seu perfil do LinkedIn**
2. **Role até a seção "Recomendações"**
3. **Copie as informações de cada recomendação**

### Como adicionar no portfolio

Edite os arquivos:
- `src/i18n/locales/pt-BR.json`
- `src/i18n/locales/en-US.json`

**Estrutura de cada recomendação:**

```json
{
  "author": "Nome completo da pessoa",
  "role": "Cargo da pessoa",
  "company": "Empresa onde trabalha",
  "relationship": "Como vocês se conheceram",
  "text": "Texto completo da recomendação",
  "date": "Mês Ano (ex: Janeiro 2025)"
}
```

### Exemplo real baseado no LinkedIn:

**Português (pt-BR.json):**
```json
"recommendations": {
  "title": "Recomendações",
  "items": [
    {
      "author": "João Silva",
      "role": "Gerente de TI",
      "company": "Globo",
      "relationship": "Gerenciou Breno diretamente",
      "text": "Breno demonstrou excelência técnica e grande capacidade de trabalho em equipe durante todo o período em que trabalhamos juntos. Sua dedicação e proatividade são exemplares.",
      "date": "Maio 2025"
    },
    {
      "author": "Maria Santos",
      "role": "Tech Lead",
      "company": "Ducke",
      "relationship": "Trabalhou com Breno na mesma equipe",
      "text": "Tive o prazer de trabalhar com Breno em diversos projetos desafiadores. Ele sempre se destacou pela sua capacidade analítica e pela qualidade do código que produzia.",
      "date": "Março 2025"
    }
  ]
}
```

**Inglês (en-US.json):**
```json
"recommendations": {
  "title": "Recommendations",
  "items": [
    {
      "author": "João Silva",
      "role": "IT Manager",
      "company": "Globo",
      "relationship": "Managed Breno directly",
      "text": "Breno demonstrated technical excellence and great teamwork skills throughout the period we worked together. His dedication and proactivity are exemplary.",
      "date": "May 2025"
    },
    {
      "author": "Maria Santos",
      "role": "Tech Lead",
      "company": "Ducke",
      "relationship": "Worked with Breno on the same team",
      "text": "I had the pleasure of working with Breno on several challenging projects. He always stood out for his analytical skills and the quality of the code he produced.",
      "date": "March 2025"
    }
  ]
}
```

---

## 🚀 Projetos Simples (Sem Imagem)

### Como adicionar projetos do GitHub

1. **Liste seus projetos no GitHub** que não têm capturas de tela
2. **Identifique projetos menores** ou exercícios que valem a pena mostrar
3. **Adicione informações relevantes**

### Como adicionar no portfolio

Edite os mesmos arquivos de tradução.

**Estrutura de cada projeto:**

```json
{
  "id": "identificador-unico",
  "title": "Nome do Projeto",
  "description": "Descrição detalhada do que o projeto faz",
  "tags": ["Tecnologia1", "Tecnologia2", "Tecnologia3"],
  "github": "https://github.com/brenoASantana/nome-repo",
  "demo": "https://link-demo.com" // OPCIONAL
}
```

### Exemplos reais baseados no seu perfil:

**Português (pt-BR.json):**
```json
"simpleProjects": {
  "title": "Outros Projetos",
  "viewOnGithub": "Ver no GitHub",
  "liveDemo": "Demo",
  "items": [
    {
      "id": "api-rest-java",
      "title": "API REST em Java",
      "description": "API RESTful desenvolvida em Java com Spring Boot para gerenciamento de usuários. Implementa autenticação JWT, validação de dados e integração com PostgreSQL.",
      "tags": ["Java", "Spring Boot", "PostgreSQL", "JWT"],
      "github": "https://github.com/brenoASantana/api-rest-java"
    },
    {
      "id": "sistema-biblioteca",
      "title": "Sistema de Biblioteca",
      "description": "Sistema completo de gerenciamento de biblioteca desenvolvido como projeto acadêmico. Inclui cadastro de livros, empréstimos, devoluções e relatórios.",
      "tags": ["Python", "Flask", "SQLite"],
      "github": "https://github.com/brenoASantana/sistema-biblioteca"
    },
    {
      "id": "calculadora-impostos",
      "title": "Calculadora de Impostos BR",
      "description": "Ferramenta para cálculo de impostos brasileiros incluindo IRPF, INSS e outros tributos. Desenvolvida para facilitar o trabalho de freelancers e MEIs.",
      "tags": ["JavaScript", "React", "CSS"],
      "github": "https://github.com/brenoASantana/calculadora-impostos",
      "demo": "https://calculadora-impostos.vercel.app"
    },
    {
      "id": "bot-discord",
      "title": "Bot de Moderação Discord",
      "description": "Bot personalizado para Discord com comandos de moderação, sistema de níveis e integração com APIs externas para busca de informações.",
      "tags": ["Node.js", "Discord.js", "MongoDB"],
      "github": "https://github.com/brenoASantana/bot-discord"
    },
    {
      "id": "algoritmos-estruturas",
      "title": "Algoritmos e Estruturas de Dados",
      "description": "Coleção de implementações de algoritmos clássicos e estruturas de dados em C. Inclui ordenação, busca, árvores, grafos e mais.",
      "tags": ["C", "Algoritmos", "Estruturas de Dados"],
      "github": "https://github.com/brenoASantana/algoritmos-estruturas"
    },
    {
      "id": "portfolio-react",
      "title": "Este Portfolio",
      "description": "Portfolio pessoal desenvolvido em React com internacionalização, carrosséis de projetos e integração com GitHub Actions para CI/CD automático.",
      "tags": ["React", "i18next", "Swiper", "GitHub Actions"],
      "github": "https://github.com/brenoASantana/portfolio_reactjs",
      "demo": "https://brenoASantana.github.io/portfolio"
    }
  ]
}
```

**Inglês (en-US.json):**
```json
"simpleProjects": {
  "title": "Other Projects",
  "viewOnGithub": "View on GitHub",
  "liveDemo": "Live Demo",
  "items": [
    {
      "id": "api-rest-java",
      "title": "Java REST API",
      "description": "RESTful API developed in Java with Spring Boot for user management. Implements JWT authentication, data validation and PostgreSQL integration.",
      "tags": ["Java", "Spring Boot", "PostgreSQL", "JWT"],
      "github": "https://github.com/brenoASantana/api-rest-java"
    },
    {
      "id": "sistema-biblioteca",
      "title": "Library Management System",
      "description": "Complete library management system developed as an academic project. Includes book registration, loans, returns and reports.",
      "tags": ["Python", "Flask", "SQLite"],
      "github": "https://github.com/brenoASantana/sistema-biblioteca"
    },
    {
      "id": "calculadora-impostos",
      "title": "BR Tax Calculator",
      "description": "Tool for calculating Brazilian taxes including IRPF, INSS and other taxes. Developed to facilitate the work of freelancers and MEIs.",
      "tags": ["JavaScript", "React", "CSS"],
      "github": "https://github.com/brenoASantana/calculadora-impostos",
      "demo": "https://calculadora-impostos.vercel.app"
    },
    {
      "id": "bot-discord",
      "title": "Discord Moderation Bot",
      "description": "Custom Discord bot with moderation commands, leveling system and integration with external APIs for information search.",
      "tags": ["Node.js", "Discord.js", "MongoDB"],
      "github": "https://github.com/brenoASantana/bot-discord"
    },
    {
      "id": "algoritmos-estruturas",
      "title": "Algorithms and Data Structures",
      "description": "Collection of implementations of classic algorithms and data structures in C. Includes sorting, searching, trees, graphs and more.",
      "tags": ["C", "Algorithms", "Data Structures"],
      "github": "https://github.com/brenoASantana/algoritmos-estruturas"
    },
    {
      "id": "portfolio-react",
      "title": "This Portfolio",
      "description": "Personal portfolio developed in React with internationalization, project carousels and integration with GitHub Actions for automatic CI/CD.",
      "tags": ["React", "i18next", "Swiper", "GitHub Actions"],
      "github": "https://github.com/brenoASantana/portfolio_reactjs",
      "demo": "https://brenoASantana.github.io/portfolio"
    }
  ]
}
```

---

## 📋 Checklist de Implementação

### ✅ Para Recomendações:

1. [ ] Acessar LinkedIn e copiar todas as recomendações
2. [ ] Adicionar em `pt-BR.json` com texto original
3. [ ] Traduzir para inglês e adicionar em `en-US.json`
4. [ ] Verificar se os nomes estão corretos
5. [ ] Verificar se as datas estão formatadas
6. [ ] Testar no browser

### ✅ Para Projetos Simples:

1. [ ] Listar todos os repositórios do GitHub
2. [ ] Selecionar projetos relevantes (4-8 projetos)
3. [ ] Escrever descrições claras e objetivas
4. [ ] Adicionar tags de tecnologias usadas
5. [ ] Verificar se os links do GitHub estão corretos
6. [ ] Adicionar links de demo quando disponíveis
7. [ ] Traduzir para inglês
8. [ ] Testar no browser

---

## 🎨 Dicas de Boas Práticas

### Para Recomendações:
- ✅ Use recomendações REAIS do LinkedIn
- ✅ Peça permissão para usar se necessário
- ✅ Mantenha o texto original sem editar
- ✅ Adicione datas para dar contexto
- ✅ Priorize recomendações recentes e relevantes

### Para Projetos:
- ✅ Destaque projetos que demonstram habilidades diferentes
- ✅ Inclua projetos pessoais e acadêmicos
- ✅ Use tags para facilitar identificação de tecnologias
- ✅ Mantenha descrições concisas mas informativas
- ✅ Adicione demos quando possível (Vercel, Netlify, GitHub Pages)
- ✅ Certifique-se de que os repositórios são públicos

---

## 🔄 Como Atualizar

Sempre que adicionar novos projetos ou receber novas recomendações:

1. **Edite os arquivos JSON** em `src/i18n/locales/`
2. **Adicione nas duas línguas** (pt-BR e en-US)
3. **Teste localmente** com `npm start`
4. **Commit e push** para GitHub
5. **Deploy automático** via GitHub Actions

---

## 🚀 Resultado

Com essas duas novas seções você terá:

- ✅ **Prova social** através das recomendações
- ✅ **Portfólio completo** com todos os seus projetos
- ✅ **Mais conteúdo** para SEO e descoberta
- ✅ **Links diretos** para seus repositórios
- ✅ **Demonstração de experiência** diversificada

---

**Última atualização:** 21/10/2025
**Arquivo de referência:** `RECOMMENDATIONS_AND_PROJECTS_GUIDE.md`
