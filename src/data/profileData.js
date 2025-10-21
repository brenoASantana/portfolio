/**
 * Dados centralizados do portfólio
 * Atualize este arquivo sempre que modificar seu LinkedIn
 * Última atualização: 21/10/2025
 *
 * NOTA: Todas as imagens agora são locais para melhor performance e confiabilidade
 */

// Imports de imagens - Projetos

// Imports de imagens - Participações (placeholder temporário)
import placeholderImg from "../assets/images/participations/placeholder.svg";

import emailIcon from "../assets/icons/social/email.svg";
import githubIcon from "../assets/icons/social/github.svg";
// Imports de ícones sociais
import instagramIcon from "../assets/icons/social/instagram.svg";
import linkedinIcon from "../assets/icons/social/linkedin.svg";
import linktreeIcon from "../assets/icons/social/linktree.svg";

export const profileData = {
  // Informações básicas
  name: "Breno Santana",
  title: "Intern at Globo | React | JavaScript | Java | iDempiere | PostgreSQL",
  subtitle: "Computer Science student at UERJ",
  location: "Rio de Janeiro, Brasil",

  // Sobre
  about: {
    paragraphs: [
      "I am a curious Back-End Developer and a lifelong student, currently studying Computer Science at UERJ. I have experience in creating and maintaining systems in corporate environments, with a focus on object-relational databases, such as PostgreSQL, and version control with Git.",
      "In addition, I am passionate about games (which teach me creative problem solving) and music (which fuels my attention to detail), always looking for exciting challenges and new learning opportunities.",
      "I am constantly updating my skills to keep up with market trends and new technologies. Some of the technologies I am proficient in include Java, React, JavaScript, PHP, C, Python, Git & GitHub, and much more!",
      "If you're interested in collaboration or have any opportunities, feel free to send me a message.",
    ],
  },

  // Experiências profissionais
  experiences: [
    {
      role: "Estag Dev | Backstage Conteúdo",
      company: "Globo",
      companyUrl: "https://www.globo.com",
      period: "Mai 2025 – Atual",
      description:
        "Development of features for the Backstage Content platform using React.js and JavaScript. Working in a hybrid environment in Rio de Janeiro, contributing to content management solutions.",
      stacks: {
        Frontend: ["React.js", "JavaScript", "HTML", "CSS"],
        Backend: ["Node.js", "API REST"],
        Ferramentas: ["Git", "JIRA", "VS Code"],
        Metodologias: ["Agile", "Scrum"],
      },
    },
    {
      role: "Consultor de Tecnologia",
      company: "Ducke: Excelência em Tecnologia",
      companyUrl: "https://www.ducke.com.br",
      period: "Abr 2024 – Mai 2025",
      description:
        "Implementation of new functionalities in the iDempiere ERP system with Java; improvement and maintenance of existing applications; organization and production of technical documents and reports; participation in meetings with clients to align and define requirements.",
      stacks: {
        Backend: ["Java", "iDempiere ERP"],
        "Banco de Dados": ["PostgreSQL", "SQL"],
        Infraestrutura: ["AWS", "Git", "GitHub"],
        Ferramentas: ["VS Code", "Eclipse", "Trello", "JIRA"],
        Metodologias: ["Agile", "Scrum"],
      },
    },
    {
      role: "Estagiário de Desenvolvimento de Software",
      company: "Entregue Comércio e Serviços Ltda",
      companyUrl: "#",
      period: "Jun 2022 – Abr 2024",
      description:
        "Development and improvement of the iDempiere ERP system used in business management. Main responsibilities: Back-End Development (Java), Database management (PostgreSQL), Version control (Git), Implementation of features, and Bug fixes.",
      stacks: {
        Backend: ["Java", "iDempiere ERP"],
        "Banco de Dados": ["PostgreSQL", "SQL"],
        Infraestrutura: ["AWS", "Git"],
        Ferramentas: ["Eclipse", "DBeaver"],
        Metodologias: ["Agile"],
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

  // Projetos
  projects: [
    {
      title: "Histórias Mal Contadas (DEMO)",
      link: "https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO",
      tags: ["Python", "Game Development", "Roguelike"],
      description:
        "é um jogo de terror e aventura do estilo narrative-driven experimental adventure e roguelike. Nele, você vivencia a jornada de um Padre que desperta no porão de um monastério, em um local desconhecido, sem memória e em busca de respostas. Sem muitas opções, ele acaba libertando um antigo mal aprisionado. Agora, sua única escolha é sobreviver. Recuperar sua fé e encontrar respostas se tornam sua principal motivação.",
    },
    {
      title: "Kaching Software",
      link: "https://github.com/brenoASantana/kaching",
      tags: ["PHP", "MySQL", "MVC", "Full-Stack"],
      description:
        "é um projeto Full-Stack de sistema de inventário e gestão organizado de forma MVC programado em PHP, HTML e CSS com um CRUD de produtos, funcionários, usuários e fornecedores.",
    },
  ],

  // Projetos em andamento
  ongoingProjects: [
    {
      title: "KachingERP",
      description:
        "é uma solução empresarial robusta e customizável, desenvolvida a partir do sistema open source iDempiere ERP e integrada ao plugin de localização brasileira LBR. O projeto foi concebido para aprimorar diversas áreas da gestão empresarial, desde o controle de estoques até a automação de processos operacionais.",
    },
    {
      title: "CineSystem",
      description:
        "é uma solução completa para a gestão de cinemas, desenvolvida em Java para atender com eficiência as demandas operacionais e estratégicas desse segmento. A plataforma facilita o gerenciamento de salas, sessões, filmes e ingressos.",
    },
  ],

  // Participações
  // NOTA: Substitua placeholderImg pelas imagens reais após baixá-las do LinkedIn
  // Veja instruções em: src/assets/images/participations/README.md
  participations: [
    {
      title: "Hack na Ilha",
      imgSrc: placeholderImg, // TODO: Substituir por: hackNaIlha (após baixar do LinkedIn)
      alt: "Foto do evento Hack na Ilha",
      description:
        "Participei do Hack na Ilha, promovido pelo CEADS/UERJ e FAPERJ, em Ilha Grande. Desenvolvemos soluções para conectividade local, aliando tecnologias como CubeSats e redes MeshConnects a uma abordagem socialmente integrada.",
    },
    {
      title: "Programação 0",
      imgSrc: placeholderImg, // TODO: Substituir por: programacao0 (após baixar do LinkedIn)
      alt: "Foto do curso Programação 0",
      description:
        'Lecionei na primeira edição do curso "Programação 0", iniciativa do IME/UERJ. Ministrei aulas sobre Sistemas de Numeração e Estrutura de Decisão.',
    },
    {
      title: "Bate Papo sobre Banco de Dados",
      imgSrc: placeholderImg, // TODO: Substituir por: batePapoBD (após baixar do LinkedIn)
      alt: "Foto do bate papo sobre banco de dados",
      description:
        "Participei de um bate-papo com alunos da Escola Estadual de Felisburgo sobre Banco de Dados em Jogos e carreira em tecnologia.",
    },
    {
      title: "Desafio de Engenharia de Software Kraft Baterias EntregPag",
      imgSrc: placeholderImg, // TODO: Substituir por: desafioKraft (após baixar do LinkedIn)
      alt: "Foto do Desafio Kraft",
      description:
        "Fui premiado com o 2º lugar no Desafio de Engenharia de Software Kraft Baterias EntregPag, configurando o iDempiere na AWS e criando janelas e tabelas. Recebi prêmio em dinheiro e vaga de estágio.",
    },
  ],

  // Links sociais
  socialLinks: [
    {
      href: "https://instagram.com/brenoasantana",
      label: "Instagram",
      icon: instagramIcon,
    },
    {
      href: "https://linkedin.com/in/brenoasantana",
      label: "LinkedIn",
      icon: linkedinIcon,
    },
    {
      href: "https://github.com/brenoasantana",
      label: "GitHub",
      icon: githubIcon,
    },
    {
      href: "mailto:contatobrenosantana@outlook.com",
      label: "E-mail",
      icon: emailIcon,
    },
    {
      href: "https://linktr.ee/brenoasantana",
      label: "Linktree",
      icon: linktreeIcon,
    },
  ],
};

// Metadados
export const metadata = {
  lastUpdated: "2025-10-21",
  version: "1.0.0",
  linkedinProfile: "https://www.linkedin.com/in/brenoasantana",
};
