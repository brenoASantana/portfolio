/**
 * Dados centralizados do portfólio
 * Estrutura otimizada para ser atemporal e não precisar de atualizações frequentes
 *
 * NOTA: Todas as imagens são locais para melhor performance e confiabilidade
 */

// Imports de imagens - Projetos
// (Local imports organized by type)

// Imports de ícones sociais

export const profileData = {
  name: "Breno Santana",
  location: "Rio de Janeiro, Brasil",
  experiences: [
    {
      company: "Globo",
      companyUrl: "https://www.globo.com",
      role: "Desenvolvedor júnior",
      period: "Fev 2026 - atual",
      description: "Desenvolvimento de soluções para ambientes corporativos com foco em aplicações web, APIs e colaboração entre equipes.",
      stacks: {
        frontend: ["React.js", "JavaScript", "TypeScript"],
        backend: ["Golang", "API REST"],
        tools: ["Git", "JIRA", "VS Code"],
        methodologies: ["Agile", "Scrum"],
      },
    },
    {
      company: "Globo",
      companyUrl: "https://www.globo.com",
      role: "Estag Dev | Backstage Conteúdo",
      period: "Mai 2025 - Fev 2026",
      description: "Desenvolvimento de funcionalidades para a plataforma Backstage Conteúdo usando React.js e JavaScript em ambiente colaborativo.",
      stacks: {
        frontend: ["React.js", "JavaScript", "TypeScript"],
        backend: ["API REST", "Serviços web"],
        tools: ["Git", "JIRA", "Bitbucket", "VS Code"],
        methodologies: ["Agile", "Scrum", "Kanban"],
      },
    },
    {
      company: "Ducke: Excelência em Tecnologia",
      companyUrl: "https://www.ducke.com.br",
      role: "Consultor de tecnologia",
      period: "Abr 2024 - Mai 2025",
      description: "Implementação de funcionalidades no sistema ERP iDempiere com Java, manutenção de aplicações, documentação técnica e alinhamento de requisitos com clientes.",
      stacks: {
        backend: ["Java", "iDempiere ERP"],
        database: ["PostgreSQL", "SQL"],
        infrastructure: ["AWS", "Git", "GitHub", "GitLab"],
        tools: ["VS Code", "Eclipse", "Trello", "JIRA"],
        methodologies: ["Agile", "Scrum", "Kanban"],
      },
    },
    {
      company: "Entregue Comércio e Serviços Ltda",
      companyUrl: "#",
      role: "Estagiário de desenvolvimento de software",
      period: "Jun 2022 - Abr 2024",
      description: "Desenvolvimento e melhoria do sistema ERP iDempiere para gestão empresarial, com foco em Java, PostgreSQL, Git, implementação de funcionalidades e correção de bugs.",
      stacks: {
        backend: ["Java", "iDempiere ERP"],
        database: ["PostgreSQL", "SQL"],
        infrastructure: ["AWS", "Git"],
        tools: ["Eclipse", "DBeaver", "PhpMyAdmin"],
        methodologies: ["Agile", "Scrum"],
      },
    },
  ],
  education: [
    { institution: "Universidade do Estado do Rio de Janeiro", degree: "Bacharelado", period: "Ago 2023 - Jul 2027" },
    { institution: "Firjan Senai Barra do Piraí", degree: "Ensino Técnico", period: "Fev 2022 - Jul 2023" },
    { institution: "Firjan Senai Barra do Piraí", degree: "Operador de Computador", period: "Jun 2021 - Mar 2022" },
    { institution: "Colégio Estadual Professor José Antônio Maia Vinagre", degree: "Colegial", period: "Fev 2020 - Dez 2022" },
  ],
  languages: [
    { name: "Português", proficiency: "Nativo ou bilíngue" },
    { name: "English", proficiency: "Proficiência profissional" },
  ],
  skills: [
    "API REST", "Postman API", "Serviços web", "Aplicativos web", "Programação lógica",
    "Programação orientada a objetos (POO)", "Golang", "Go", "TypeScript", "Trello", "JIRA",
    "Bitbucket", "GitHub", "Git", "GitLab", "React.js", "JavaScript", "Linux",
    "Algoritmos e Estrutura de Dados", "Língua de sinais", "Matemática discreta", "Scrum", "Kanban",
    "Metodologias Agile", "Raylib", "Videogames", "Desenvolvimento de jogos eletrônicos", "C",
    "Criação de roteiros", "Gestão de inovação", "Sustentabilidade", "iDempiere", "Visual Studio Code",
    "Desenvolvimento de algoritmo", "Tkinter", "PhpMyAdmin", "Python", "Educação superior",
    "Desenvolvimento de API", "Controle de versão", "Desenvolvimento Java", "Melhoria de operações",
    "ERP (Planejamento de recursos empresariais)", "Suporte técnico", "Desenvolvimento de tecnologia",
    "Liderança de equipe", "Trabalho em equipe", "Capacidade de organização", "Rede de computadores",
    "Instalação de hardware", "Banco de dados", "CSS", "HTML", "Amazon Web Services", "SQL", "Eclipse",
    "PostgreSQL", "Implementações de ERP", "PHP", "Java", "Inteligência artificial", "Prompt Engineering",
    "Produtividade de IA", "Microsoft Copilot",
  ],
};
