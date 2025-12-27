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
  // Informações básicas
  name: "Breno Santana",
  location: "Rio de Janeiro, Brasil",

  // Experiências profissionais
  experiences: [
    {
      company: "Entregue Comércio e Serviços Ltda",
      companyUrl: "#",
      stacks: {
        backend: ["Java", "iDempiere ERP"],
        database: ["PostgreSQL", "SQL"],
        infrastructure: ["AWS", "Git"],
        tools: ["Eclipse", "DBeaver"],
        methodologies: ["Agile"],
      },
    },
    {
      company: "Ducke: Excelência em Tecnologia",
      companyUrl: "https://www.ducke.com.br",
      stacks: {
        backend: ["Java", "iDempiere ERP"],
        database: ["PostgreSQL", "SQL"],
        infrastructure: ["AWS", "Git", "GitHub"],
        tools: ["VS Code", "Eclipse", "Trello", "JIRA"],
        methodologies: ["Agile", "Scrum"],
      },
    },
    {
      company: "Globo",
      companyUrl: "https://www.globo.com",
      stacks: {
        frontend: ["React.js", "JavaScript", "HTML", "CSS"],
        backend: ["Node.js", "API REST"],
        tools: ["Git", "JIRA", "VS Code"],
        methodologies: ["Agile", "Scrum"],
      },
    },
  ],

  // Habilidades técnicas
  skills: [
    "React.js",
    "JavaScript",
    "Java",
    "PostgreSQL",
    "iDempiere ERP",
    "Git & GitHub",
    "HTML",
    "CSS",
    "Node.js",
    "API REST",
    "SQL",
    "AWS",
    "Python",
    "PHP",
    "C",
    "JIRA",
    "Trello",
    "VS Code",
    "Eclipse",
    "Agile",
    "Scrum",
  ],
};
