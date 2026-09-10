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
      roleKey: "experience.globo.junior.role",
      periodKey: "experience.periods.globoJunior",
      descriptionKey: "experience.globo.junior.description",
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
      roleKey: "experience.globo.intern.role",
      periodKey: "experience.periods.globoIntern",
      descriptionKey: "experience.globo.intern.description",
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
      roleKey: "experience.ducke.role",
      periodKey: "experience.periods.ducke",
      descriptionKey: "experience.ducke.description",
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
      roleKey: "experience.entregue.role",
      periodKey: "experience.periods.entregue",
      descriptionKey: "experience.entregue.description",
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
    { institution: "Universidade do Estado do Rio de Janeiro", degree: "Bacharelado", degreeKey: "education.degrees.bachelors", period: "Ago 2023 - Jul 2027", periodKey: "education.periods.bachelors" },
    { institution: "Firjan Senai Barra do Piraí", degree: "Ensino Técnico", degreeKey: "education.degrees.technical", period: "Fev 2022 - Jul 2023", periodKey: "education.periods.technical" },
    { institution: "Firjan Senai Barra do Piraí", degree: "Operador de Computador", degreeKey: "education.degrees.computerOperator", period: "Jun 2021 - Mar 2022", periodKey: "education.periods.computerOperator" },
    { institution: "Colégio Estadual Professor José Antônio Maia Vinagre", degree: "Colegial", degreeKey: "education.degrees.highSchool", period: "Fev 2020 - Dez 2022", periodKey: "education.periods.highSchool" },
  ],
  languages: [
    { name: "Português", nameKey: "education.languageNames.portuguese", proficiency: "Nativo ou bilíngue", proficiencyKey: "education.proficiency.native" },
    { name: "English", nameKey: "education.languageNames.english", proficiency: "Proficiência profissional", proficiencyKey: "education.proficiency.professional" },
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
