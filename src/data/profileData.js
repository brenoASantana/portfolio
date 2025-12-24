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
  title: "Full Stack Developer | React | JavaScript | Java | PostgreSQL",
  subtitle: "Computer Science | Backend Specialist | Game Developer",
  location: "Rio de Janeiro, Brasil",

  // Sobre
  about: {
    paragraphs: [
      "I am a Full Stack Developer with a passion for building robust, scalable systems. I specialize in backend development with a strong foundation in object-relational databases and version control, but I'm equally proficient in frontend technologies like React and modern JavaScript.",
      "Beyond code, I'm passionate about games and music—they've shaped how I approach problem-solving and attention to detail. I believe in continuous learning and staying updated with industry trends, always seeking new challenges and opportunities to expand my expertise.",
      "My technical toolkit includes Java, React, JavaScript, PostgreSQL, Git, and more. I thrive in collaborative environments and enjoy contributing to meaningful projects that solve real problems.",
      "I'm always open to collaboration, interesting projects, or a conversation about tech. Feel free to reach out!",
    ],
  },

  // Experiências profissionais
  experiences: [
    {
      role: "Estagiário de Desenvolvimento de Software",
      company: "Entregue Comércio e Serviços Ltda",
      companyUrl: "#",
      period: "ERP System Development",
      description:
        "Development and improvement of the iDempiere ERP system for business management. Responsibilities: Backend Development (Java), Database management (PostgreSQL), Version control (Git), and feature implementation.",
      stacks: {
        backend: ["Java", "iDempiere ERP"],
        database: ["PostgreSQL", "SQL"],
        infrastructure: ["AWS", "Git"],
        tools: ["Eclipse", "DBeaver"],
        methodologies: ["Agile"],
      },
    },
    {
      role: "Consultor de Tecnologia",
      company: "Ducke: Excelência em Tecnologia",
      companyUrl: "https://www.ducke.com.br",
      period: "Enterprise ERP Development",
      description:
        "Implementation of features in the iDempiere ERP system using Java; improvement and maintenance of existing applications; technical documentation; and client requirement alignment meetings.",
      stacks: {
        backend: ["Java", "iDempiere ERP"],
        database: ["PostgreSQL", "SQL"],
        infrastructure: ["AWS", "Git", "GitHub"],
        tools: ["VS Code", "Eclipse", "Trello", "JIRA"],
        methodologies: ["Agile", "Scrum"],
      },
    },
    {
      role: "Estag Dev | Backstage Conteúdo",
      company: "Globo",
      companyUrl: "https://www.globo.com",
      period: "Content Management Platform Development",
      description:
        "Development of features for the Backstage Content platform using React.js and JavaScript. Contributing to content management solutions with modern frontend technologies in a collaborative environment.",
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
