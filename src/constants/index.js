import {
  nitk,
  cluboard,
  cash_flow,
  rapidev_logo,
  afiniti,
  emumba,
  arbisoft,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia,
  globalAi,
  khoj,
  kosh,
  polkadot_dev_cli,
  ticketdeck,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
  AiOutlineConsoleSql,
  AiOutlineRest,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiTypescript,
  SiClaude,
  SiOracle,
  SiAwsamplify,
  SiAmazon,
  SiFastapi,
  SiApachekafka,
  SiCelery,
  SiApacheairflow,
  SiSelenium,
  SiGitlab,
  SiDocker,
  SiPostgresql,
  SiApmterminals,
  SiPandas,
  SiNumpy,
  SiScrapy,
  SiPytest,
  SiStripe,
  SiRabbitmq,
  SiVirtualbox,
  SiAwslambda,
  SiAmazons3,
  SiAmazonec2,
  SiAmazonrds,
  SiMongodb,
  SiElasticsearch,
  SiBitbucket,
  SiLinux,
  SiJira,
  SiWordpress,
  SiAdobephotoshop,
  SiPowers,
  SiMiro,
  SiSwagger,
  SiShell,
  SiGnubash,
  SiRedis,
  SiFiverr,
  SiSqlalchemy,
  SiPydantic,
  SiGooglegemini,
  SiTensorflow,
  SiKeras,
  SiZapier,
  SiBamboo,
  SiSlack,
} from "react-icons/si";

import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline} from "react-icons/io";

import { FaGolang } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";
import { VscAccount, VscAzure, VscAzureDevops } from "react-icons/vsc";
import { BiLogoVisualStudio} from "react-icons/bi";
import { RiFediverseFill } from "react-icons/ri";
import { GiArtilleryShell } from "react-icons/gi";
import {
  BsDatabaseFillLock,
  BsDatabaseGear,
  BsListTask,
  BsSlashSquare,
  BsLightningCharge,
  BsDiagram3,
  BsCheck2Circle,
  BsChatSquareText,
  BsPlug,
} from "react-icons/bs";
import { MdRecordVoiceOver, MdWebhook } from "react-icons/md";


export const resumeLink = `${import.meta.env.BASE_URL}Tanveer_Ahmad_Resume.pdf`;
export const repoLink = "https://github.com/Tasaqi";

export const callToAction = "https://www.linkedin.com/in/tanveer-ahmed-bb8694164/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Consultancy Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  // {
  //   id: "extraCurricular",
  //   title: "Extra Curricular",
  // },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "COMSATS University Islamabad",
    degree: "Bachelor's in Software Engineering",
    duration: "Sep 2015 - May 2019",
    content1: "Major: Software Engineering",
    content2: "Minor: Artificial Intelligence, Data Science	",
  },
];

// Add your past achievments here for example - rankings in hackathons/events

export const achievements = [
  {
    id: "a-1",
    icon: ticketdeck,
    event: "TicketDeck",
    position: "Full-stack Engineer (Consultant)",
    content1: "Built React 18 + TypeScript SPA: admin, attendee, scanner & platform portals.",
    content2: "Built FastAPI + Celery backend on PostgreSQL with Stripe & Postmark.",
    content3: "Shipped end to end in 2 months on Azure Container Apps.",
    article: "",
    project: "https://ticket-deck.com",
    youtube: "",
    github: ""
  },
  {
    id: "a-2",
    icon: ethindia,
    event: "Active Digital",
    position: "Data Engineer (Consultant)",
    content1: "Built data pipelines using Azure Data Factory & Functions.",
    content2: "Used Azure Functions, Logic Apps, and configured VMs & firewalls.",
    content3: "Long-term engagement (2+ years).",
    article: "",
    project: "https://www.active.us",
    youtube: "",
    github: ""
  },
  {
    id: "a-3",
    icon: ethglobal,
    event: "VistaBee",
    position: "Backend Engineer",
    content1: "Ongoing bug fixes, feature additions, and weekly AWS deployments.",
    content2: "Added Vimeo video integration & ran SQL-based data migrations.",
    content3: "",
    article: "",
    project: "https://vistabee.com",
    youtube: "",
    github: ""
  },
  {
    id: "a-4",
    icon: ethforall, // replace with actual imported icon
    event: "Kifwat immo",
    position: "Web Scraping & API Development",
    content1: "Built APIs to scrape ads from e-commerce websites via the KI app.",
    content2: "Implemented data standardization & real-time streaming with Kafka.",
    content3: "Duration: June 2021 – Jan 2022",
    article: "",
    project: "https://www.ki.immo",
    youtube: "",
    github: ""
  },
  {
    id: "a-5",
    icon: polkadot,
    event: "Transparagent",
    position: "Full-stack Developer",
    content1: "Built a property management platform with Django & multi-role dashboards.",
    content2: "Integrated Stripe, used Bootstrap for UI, and deployed on Namecheap.",
    content3: "Handled DNS configuration and server setup.",
    article: "",
    project: "https://transparagent.com",
    youtube: "",
    github: ""
  },


];

// export const achievements = [
//   {
//     id: "a-1",
//     icon: ethindia,
//     event: "ETHIndia'24 | India's Largest Ethereum Hackathon",
//     position: "Winner",
//     content1: "Top 10 Overall Finalists/Winners, True Network's Winner",
//     content2: "Polkadot's 1st Runner Up, Lit Protocol's 2nd Runner Up",
//     content3: "Coinbase Pool Prize, Base Top 10",
//     article:
//       "https://www.linkedin.com/posts/mittal-parth_super-stoked-to-announce-that-our-team-emerged-activity-7274735259621961729-tkq4?utm_source=share&utm_medium=member_desktop",
//     project: "https://devfolio.co/projects/khoj-3336",
//     youtube:
//       "https://www.youtube.com/live/qJ4OCtnvjUY?si=VkcnHEdwJTEEDlMg&t=4718",
//   },
//   {
//     id: "a-2",
//     icon: ethglobal,
//     event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
//     position: "Winner",
//     content1: "Top 12 Winners among 20k+ registrations",
//     content2: "One of Polygon's Best Public Goods",
//     content3: "Best Module on Biconomy SDK",
//     article:
//       "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
//     project: "https://devfolio.co/projects/chargeswap-3527",
//     youtube: "https://youtu.be/9rieTya8Yds?t=3908",
//   },
//   {
//     id: "a-3",
//     icon: polkadot,
//     event: "Polkadot Hackathon: Europe Edition",
//     position: "2nd Runner Up in the ink! Smart Contract Category",
//     content1:
//       "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
//     content2: "",
//     content3: "",
//     article:
//       "https://www.linkedin.com/posts/mittal-parth_hackathon-winners-web3-activity-7048340759116214272-eJvo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOa76QB7zljgX8NK4xVSZXi0Z49ETMeC-g",
//     github: "https://github.com/pranav2305/GreenTrust",
//   },
//   {
//     id: "a-4",
//     icon: lightspeed,
//     event: "Warpspeed by Lightspeed",
//     position: "1st Runner Up",
//     content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
//     content2: "Top 3 projects using Replit",
//     content3: "1st Runner Up by Amazon Web Services (AWS)",
//     article: "https://shorturl.at/fhjsT",
//   },
// ];

// Add your software developments skills here for example - programming languages, frameworks etc.
// export const skills = [
//   {
//     title: "Programming Languages",
//     items: [

//       {
//         id: "pl-2",
//         icon: SiPython,
//         name: "Python",
//       },

//       {
//         id: "pl-6",
//         icon: DiJava,
//         name: "Java",
//       },

//       {
//         id: "pl-8",
//         icon: AiFillHtml5,
//         name: "HTML",
//       },
//       {
//         id: "pl-9",
//         icon: DiCss3,
//         name: "CSS",
//       },
//       {
//         id: "pl-10",
//         icon: SiJavascript,
//         name: "JavaScript",
//       }
//     ],
//   },
//   {
//     title: "Frameworks/Libraries",
//     items: [
//       {
//         id: "f-1",
//         icon: SiDjango,
//         name: "Django",
//       },
//       {
//         id: "f-3",
//         icon: SiFlask,
//         name: "Flask",
//       },
//       {
//         id: "f-4",
//         icon: SiBootstrap,
//         name: "Bootstrap",
//       },
//       {
//         id: "f-5",
//         icon: SiFastapi,
//         name: "FastAPI",
//       },
//       {
//         id: "f-6",
//         icon: SiJquery,
//         name: "jQuery",
//       },
//       {
//         id: "f-7",
//         icon: SiApachekafka,
//         name: "Kafka",
//       },
//       {
//         id: "f-8",
//         icon: SiApacheairflow,
//         name: "Airflow",
//       },
//       {
//         id: "f-9",
//         icon: SiCelery,
//         name: "Celery",
//       },
//       {
//         id: "f-10",
//         icon: SiSelenium,
//         name: "Selenium",
//       },
//       {
//         id: "f-2",
//         icon: SiRubyonrails,
//         name: "Django REST Framework",
//       },
//     ],
//   },
//   {
//     title: "Tools",
//     items: [
//       {
//         id: "t-1",
//         icon: SiAmazon,
//         name: "AWS",
//       },
//       {
//         id: "t-1",
//         icon: VscAzure,
//         name: "Azure",
//       },
//       {
//         id: "t-2",
//         icon: SiPostgresql,
//         name: "PostgreSQL",
//       },
//       {
//         id: "t-3",
//         icon: SiPostman,
//         name: "Postman",
//       },
//       {
//         id: "t-4",
//         icon: SiGitlab,
//         name: "Gitlab",
//       },
//       {
//         id: "t-5",
//         icon: VscAzureDevops,
//         name: "AzureDevOps",
//       },
//       {
//         id: "t-6",
//         icon: AiFillGithub,
//         name: "GitHub",
//       },
//       {
//         id: "t-7",
//         icon: RiFediverseFill,
//         name: "Redis",
//       },
//       {
//         id: "t-9",
//         icon: SiDocker,
//         name: "Docker",
//       },
//       {
//         id: "t-8",
//         icon: SiNetlify,
//         name: "Google Cloud Platform",
//       },

//     ],
//   },

// ];


export const skills = [
  {
    title: "Programming Languages",
    items: [
      { id: "pl-1", icon: SiPython, name: "Python" },
      { id: "pl-2", icon: AiOutlineConsoleSql, name: "SQL" },
      { id: "pl-6", icon: SiGnubash, name: "Bash/Shell" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { id: "fw-4", icon: SiFastapi, name: "FastAPI" },
      { id: "fw-1", icon: SiDjango, name: "Django / DRF" },
      { id: "fw-3", icon: SiFlask, name: "Flask" },
      { id: "fw-12", icon: SiSqlalchemy, name: "SQLAlchemy" },
      { id: "fw-13", icon: BsDatabaseGear, name: "Alembic" },
      { id: "fw-14", icon: SiPydantic, name: "Pydantic" },
      { id: "fw-6", icon: SiPandas, name: "Pandas" },
      { id: "fw-9", icon: SiScrapy, name: "Scrapy" },
      { id: "fw-8", icon: SiSelenium, name: "Selenium" },
    ],
  },
  {
    title: "AI & LLM Integration",
    items: [
      { id: "ai-1", icon: SiOpenai, name: "OpenAI / Whisper" },
      { id: "ai-2", icon: SiGooglegemini, name: "Gemini API" },
      { id: "ai-3", icon: MdRecordVoiceOver, name: "LiveKit" },
    ],
  },
  {
    title: "Databases, Data Pipelines & Queues",
    items: [
      { id: "db-1", icon: SiPostgresql, name: "PostgreSQL" },
      { id: "db-2", icon: SiMysql, name: "MySQL" },
      { id: "de-1", icon: SiApacheairflow, name: "Apache Airflow" },
      { id: "de-2", icon: SiCelery, name: "Celery" },
      { id: "de-6", icon: BsListTask, name: "TaskIQ" },
      { id: "de-3", icon: SiApachekafka, name: "Kafka" },
      { id: "de-4", icon: SiRabbitmq, name: "RabbitMQ" },
      { id: "de-5", icon: SiRedis, name: "Redis" },
    ],
  },
  {
    title: "Cloud Platforms",
    items: [
      { id: "cp-15", icon: SiGooglecloud, name: "Google Cloud Platform" },
      { id: "cp-1", icon: VscAzure, name: "Azure Cloud" },
      { id: "cp-2", icon: VscAccount, name: "Azure Data Factory" },
      { id: "cp-12", icon: SiAmazonec2, name: "AWS EC2" },
      { id: "cp-11", icon: SiAmazons3, name: "AWS S3" },
      { id: "cp-13", icon: SiAmazonrds, name: "AWS RDS" },
    ],
  },
  {
    title: "DevOps, Testing & Tools",
    items: [
      { id: "dt-1", icon: SiDocker, name: "Docker" },
      { id: "dt-2", icon: SiGit, name: "Git" },
      { id: "dt-3", icon: SiGitlab, name: "GitLab" },
      { id: "dt-9", icon: VscAzureDevops, name: "Azure DevOps" },
      { id: "dt-10", icon: SiBamboo, name: "Atlassian Bamboo" },
      { id: "fw-10", icon: SiPytest, name: "Pytest" },
      { id: "dt-7", icon: SiJira, name: "JIRA" },
      { id: "dt-6", icon: SiLinux, name: "Linux" },
      { id: "ot-6", icon: SiPostman, name: "Postman" },
    ],
  },
  {
    title: "Automation & Integrations",
    items: [
      { id: "ot-4", icon: SiPowers, name: "Power Automate" },
      { id: "ot-8", icon: SiZapier, name: "Zapier" },
      { id: "ot-9", icon: SiSlack, name: "Slack API" },
    ],
  },
];

// Highlighted AI-assisted engineering skills shown in the Claude Code banner
export const claudeBanner = {
  eyebrow: "AI-Assisted Engineering",
  content:
    "I use Claude Code daily with custom skills, slash commands, and hooks to speed up development, automate code review, and generate tests across repo-specific workflows.",
  skills: [
    { id: "cc-1", icon: SiClaude, name: "Claude Code" },
    { id: "cc-2", icon: BsLightningCharge, name: "Custom Skills" },
    { id: "cc-3", icon: MdWebhook, name: "Hooks" },
    { id: "cc-4", icon: BsSlashSquare, name: "Slash Commands" },
    { id: "cc-5", icon: BsPlug, name: "MCP Servers" },
    { id: "cc-6", icon: BsDiagram3, name: "Subagents" },
    { id: "cc-7", icon: BsCheck2Circle, name: "Code Review & Tests" },
    { id: "cc-8", icon: BsChatSquareText, name: "Prompt Engineering" },
  ],
  caseStudy: {
    title: "TicketDeck",
    link: "https://ticket-deck.com",
    duration: "2 months",
    summary:
      "Scoped and shipped an end-to-end event ticketing platform solo: four portals, payments, background jobs, CI/CD and cloud infra, from first commit to production.",
    workflow:
      "Driven by Claude Code with 30 repo-specific skills, CLAUDE.md conventions per repo, and custom subagents for visual QA and security review.",
    scope: [
      {
        id: "cs-1",
        icon: SiReact,
        title: "Frontend",
        items: [
          "React 18 + TypeScript + Vite",
          "Tailwind + shadcn/ui design system",
          "Admin, attendee, scanner & platform portals",
          "Stripe checkout & QR tickets",
        ],
      },
      {
        id: "cs-2",
        icon: SiFastapi,
        title: "Backend",
        items: [
          "FastAPI + async SQLAlchemy",
          "PostgreSQL 16 + Alembic migrations",
          "Celery + Redis background jobs",
          "Stripe payments & Postmark email",
        ],
      },
      {
        id: "cs-3",
        icon: SiDocker,
        title: "DevOps",
        items: [
          "Docker on Azure Container Apps",
          "Azure Static Web Apps frontend",
          "GitHub Actions CI/CD",
          "Azure Blob Storage & Cloudflare DNS",
        ],
      },
      {
        id: "cs-4",
        icon: BsCheck2Circle,
        title: "Quality",
        items: [
          "Vitest + RTL, Playwright e2e",
          "pytest unit & integration suites",
          "Bandit + pip-audit security CI",
        ],
      },
    ],
  },
};

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Arbisoft",
    logo: arbisoft,
    link: "https://arbisoft.com/",
    positions: [
      {
        title: "Principal Software Engineer",
        duration: "May 2023 - Present",
        content: [
          {
            text: "Worked on multiple projects focused on building automation systems and AI-driven solutions to improve product quality, engineering efficiency, and platform intelligence. Contributed to backend development, AI integration, testing automation, and system reliability across different teams.",
            link: "",
          },
          {
            text: "Developed an AI recruitment platform with candidate matching, LiveKit-based AI voice interviews, and OpenAI evaluation reports. Built FastAPI-based REST services for backend and AI workflows, async background workers (TaskIQ + Redis), and API observability with request logging, redaction, and scheduled cleanup.",
            link: "",
          },
          {
            text: "Integrated Gemini APIs into an AI-driven document intelligence architecture. Built an in-house automation platform to streamline QA workflows, a Quality Dashboard for real-time test and quality metrics, and automated release notes, Slack notifications, and JIRA ticket creation for regression testing. Designed and maintained a Pytest + Azure DevOps CI/CD test automation framework.",
            link: "",
          },
          {
            text: "Used Claude Code with custom skills, commands, and hooks to speed up development, code review, and test generation. Supported onboarding and mentoring of new engineers.",
            link: "",
          },
          {
            text: "Skills: Python · FastAPI · SQLAlchemy · PostgreSQL · Redis · TaskIQ · OpenAI · Gemini API · LiveKit · GCP · Azure DevOps · Pytest · Claude Code",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Emumba",
    logo: emumba,
    link: "https://emumba.com",
    positions: [
      {
        title: "Senior Software Engineer",
        duration: "Mar 2022 - Apr 2023",
        content: [
          {
            text: "Worked on a SaaS-based platform for cryptocurrency tax automation and real-time portfolio analytics. Built and maintained scalable backend systems using Python and Django REST Framework, and integrated crypto wallets and third-party APIs for automated data ingestion using Airflow. Managed source control with GitLab and database operations with PostgreSQL. Conducted code reviews, contributed to system design and new feature development, and deployed backend services on AWS for scalability and security.",
            link: "",
          },
          {
            text: "Key achievements: enabled automated crypto data ingestion for accurate tax reporting, improved system scalability and reliability, and streamlined developer collaboration with well-structured APIs and documentation.",
            link: "",
          },
          {
            text: "Skills: Python · Django REST Framework · PostgreSQL · Airflow · GitLab · Amazon Web Services (AWS)",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Afiniti",
    logo: afiniti,
    link: "https://www.afiniti.com/about-us/",
    positions: [
      {
        title: "Software Engineer",
        duration: "Apr 2021 - Jan 2022",
        content: [
          {
            text: "Worked on a Text-to-Speech (TTS) engine for the Mega product, enabling natural-sounding speech synthesis across multiple voices, languages, and formats. Developed REST APIs for the TTS engine using FastAPI and integrated trained speech synthesis models with backend services. Maintained and optimized the existing engine, mentored junior team members, and kept code clean and standardized following PEP 8.",
            link: "",
          },
          {
            text: "Key achievements: delivered a scalable TTS solution supporting multiple languages and voice variants, and improved system reliability through continuous maintenance and optimization.",
            link: "",
          },
          {
            text: "Skills: Python · FastAPI · Django · PostgreSQL · Git",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Rapidev DMCC",
    logo: rapidev_logo,
    link: "https://www.rapidev.com/about",
    positions: [
      {
        title: "Team Lead / Full-stack Developer",
        duration: "Nov 2019 - Apr 2021",
        content: [
          {
            text: "Led and contributed to the development of scalable web automation and data platforms. Designed and implemented a distributed web crawling architecture for large-scale data ingestion, developed microservices using Flask, Celery, and RabbitMQ, and built web crawlers using Scrapy and Selenium. Implemented anti-scraping and reverse engineering techniques for complex data sources, and created backend APIs and a crawler management dashboard using Django REST Framework.",
            link: "",
          },
          {
            text: "Led Agile processes including sprint planning, standups, and retrospectives. Managed task allocation and code reviews, mentored 10+ engineers, established onboarding SOPs, and conducted 200+ technical interviews to scale the engineering team.",
            link: "",
          },
          {
            text: "Skills: Python · Django REST Framework · Flask · Celery · RabbitMQ · Scrapy · Selenium · PostgreSQL · Agile/Scrum",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "BenchPrep",
    github: "",
    link: "",
    image: arbisoft,
    content:
      "AI recruitment platform with AI voice interviews (Apr 2026 - Present). Built REST APIs for candidates, roles, interviews, and dashboards using FastAPI, SQLAlchemy 2.0 async, and Pydantic V2. Developed the LiveKit AI voice interview agent with turn-taking, silence handling, and error fallbacks, and an evaluation pipeline using OpenAI and Whisper for transcription, speech metrics, and AI-generated reports. Built API request logging with async queuing, batched inserts, data redaction, and a scheduled TaskIQ cleanup job, with Alembic migrations and pytest coverage for all changes.",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiFastapi, name: "FastAPI" },
      { id: "icon-3", icon: SiSqlalchemy, name: "SQLAlchemy" },
      { id: "icon-4", icon: BsDatabaseGear, name: "Alembic" },
      { id: "icon-5", icon: SiPydantic, name: "Pydantic" },
      { id: "icon-6", icon: SiPostgresql, name: "PostgreSQL" },
      { id: "icon-7", icon: SiRedis, name: "Redis" },
      { id: "icon-8", icon: BsListTask, name: "TaskIQ" },
      { id: "icon-9", icon: SiOpenai, name: "OpenAI" },
      { id: "icon-10", icon: MdRecordVoiceOver, name: "LiveKit" },
    ],
  },
  {
    id: "project-2",
    title: "Docugami",
    github: "",
    link: "",
    image: arbisoft,
    content:
      "AI-based solutions for document processing (Dec 2023 - Apr 2026). Integrated Gemini APIs into the solution architecture, designed and refined prompts for various features, and developed RESTful APIs using FastAPI. Used Pandas for data manipulation and analysis, deployed the solution on Google Cloud Platform, built workflows with Zapier and Microsoft Power Automate, and onboarded new team members.",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiFastapi, name: "FastAPI" },
      { id: "icon-3", icon: SiPandas, name: "Pandas" },
      { id: "icon-4", icon: SiGooglegemini, name: "Gemini API" },
      { id: "icon-5", icon: SiGooglecloud, name: "GCP" },
      { id: "icon-6", icon: SiZapier, name: "Zapier" },
      { id: "icon-7", icon: SiPowers, name: "Power Automate" },
    ],
  },
  {
    id: "project-3",
    title: "Kayak - the Gatherer",
    github: "",
    link: "",
    image: arbisoft,
    content:
      "QA dashboard with auto release notes & JIRA tickets (May 2023 - Nov 2023). Developed internal solutions to optimize workflows, created a real-time Quality Dashboard for monitoring metrics, automated release notes generation and JIRA ticket creation, integrated Slack notifications, and implemented a Pytest pipeline on Azure DevOps for end-to-end testing.",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiJira, name: "JIRA API" },
      { id: "icon-3", icon: SiSlack, name: "Slack API" },
      { id: "icon-4", icon: SiBamboo, name: "Atlassian Bamboo" },
      { id: "icon-5", icon: VscAzure, name: "Microsoft Azure" },
      { id: "icon-6", icon: VscAzureDevops, name: "Azure DevOps" },
    ],
  },
  {
    id: "project-4",
    title: "Capital-Bee (FinTech)",
    github: "",
    link: "",
    image: emumba,
    content:
      "SaaS-based solution that automates tax filing (Mar 2022 - Apr 2023). Built scalable fintech portal backend systems using Django REST Framework, integrated crypto wallets and automated data ingestion via Airflow and APIs, maintained API documentation for frontend collaboration, and deployed backend services to AWS for secure, scalable production.",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiDjango, name: "Django REST Framework" },
      { id: "icon-3", icon: SiPostgresql, name: "PostgreSQL" },
      { id: "icon-4", icon: SiApacheairflow, name: "Airflow" },
      { id: "icon-5", icon: SiGitlab, name: "GitLab" },
      { id: "icon-6", icon: SiAmazon, name: "AWS" },
    ],
  },
  {
    id: "project-5",
    title: "Text To Speech Engine",
    github: "",
    link: "",
    image: afiniti,
    content:
      "TTS engine with multiple voices and languages (Apr 2021 - Jan 2022). Developed APIs for the TTS engine using FastAPI, integrated well-trained models with the REST server, maintained the existing engine and fixed bugs, and guided junior/new team members.",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiFastapi, name: "FastAPI" },
      { id: "icon-3", icon: SiDjango, name: "Django" },
      { id: "icon-4", icon: SiPostgresql, name: "PostgreSQL" },
      { id: "icon-5", icon: SiGit, name: "Git" },
    ],
  },
  {
    id: "project-6",
    title: "OWLSENSE",
    github: "",
    link: "",
    image: rapidev_logo,
    content:
      "OSINT-driven data platform (Nov 2019 - Apr 2021). Led the distributed web crawling architecture for large-scale data ingestion. Built microservices using Flask, Celery, and RabbitMQ, web crawlers using Scrapy and Selenium, and a crawler management dashboard using Django REST Framework. Implemented anti-scraping and reverse engineering techniques and owned end-to-end feature delivery, from requirements to deployment.",
    stack: [
      { id: "icon-1", icon: SiDjango, name: "Django REST Framework" },
      { id: "icon-2", icon: SiFlask, name: "Flask" },
      { id: "icon-3", icon: SiCelery, name: "Celery" },
      { id: "icon-4", icon: SiRabbitmq, name: "RabbitMQ" },
      { id: "icon-5", icon: SiScrapy, name: "Scrapy" },
      { id: "icon-6", icon: SiSelenium, name: "Selenium" },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  // {
  //   id: 1,
  //   organisation: "Devfolio",
  //   title: "UniDAO Lead",
  //   duration: "December 2021 - Present",
  //   content: [
  //     {
  //       text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
  //       link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
  //     },
  //     {
  //       text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
  //       link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
  //     },
  //   ],
  //   logo: devfolio,
  // },
  // {
  //   id: 2,
  //   organisation: "Google Developer Student Club, NITK",
  //   title: "Co-Chair",
  //   duration: "December 2021 - Present",
  //   content: [
  //     {
  //       text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
  //       link: "",
  //     },
  //     {
  //       text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
  //       link: "https://incident.nitk.ac.in/",
  //     },
  //   ],
  //   logo: gdsc,
  // },
 
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/tanveer-ahmed-bb8694164/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/tasaqi",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:10vir72@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "#",
  },
  {
    id: "social-media-5",
    icon: SiFiverr,
    link: "https://www.fiverr.com/tasaqi_pro",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Tanveer Ahmad",
  githubUsername: "tasaqi",
  tagLine:
    "Principal Software Engineer | Backend, AI Integration & Automation | Python, FastAPI, Django | LLMs with OpenAI, Gemini & LiveKit | Cloud on GCP, Azure & AWS.",
  intro:
    "I'm a Principal Software Engineer with nearly 7 years of experience building scalable backend systems, data pipelines, and AI-driven solutions with Python, FastAPI, and Django.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
];
