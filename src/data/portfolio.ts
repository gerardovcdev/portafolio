import { PortfolioData } from '@/types'

export const portfolioData: PortfolioData = {
  name: 'Gerardo Vargas',

  role: {
    en: 'Full Stack Software Engineer',
    es: 'Ingeniero de Software Full Stack',
  },

  tagline: {
    en: 'Building scalable web applications, e-commerce platforms, and real-time systems.',
    es: 'Construyendo aplicaciones web escalables, plataformas e-commerce y sistemas en tiempo real.',
  },

  about: {
    en: `I'm a Full Stack Software Engineer with over 4 years of experience developing scalable web applications and digital products in startup environments.

Throughout my career, I've built complete systems from scratch, handling both frontend and backend development end-to-end. I specialize in JavaScript, working with frameworks like React, Vue.js, and Angular for building modern user interfaces, and Node.js with NestJS for designing robust backend architectures.

I've contributed to large-scale platforms in the e-commerce space, implementing authentication systems, product and order management, payment flows, and user-focused experiences. I also have hands-on experience building real-time systems — including live streaming and chat using AWS Amazon IVS.

Beyond coding, I focus on understanding the business behind each product, making technical decisions that improve scalability, performance, and user experience. I'm comfortable working remotely, collaborating with cross-functional teams, and taking full ownership of features from concept to production.`,

    es: `Soy un Ingeniero de Software Full Stack con más de 4 años de experiencia desarrollando aplicaciones web escalables y productos digitales en entornos startup.

A lo largo de mi carrera, he construido sistemas completos desde cero, manejando tanto el desarrollo frontend como backend de extremo a extremo. Me especializo en JavaScript, trabajando con frameworks como React, Vue.js y Angular para interfaces modernas, y Node.js con NestJS para arquitecturas backend robustas.

He contribuido a plataformas a gran escala en el espacio e-commerce, implementando autenticación, gestión de productos y pedidos, flujos de pago y experiencias centradas en el usuario. También tengo experiencia construyendo sistemas en tiempo real, incluyendo streaming en vivo y chat con AWS Amazon IVS.

Más allá del código, me enfoco en entender el negocio detrás de cada producto, tomando decisiones técnicas que mejoran la escalabilidad, el rendimiento y la experiencia del usuario. Trabajo cómodamente en remoto, colaborando con equipos multifuncionales y tomando ownership total de las funcionalidades.`,
  },

  projects: [
    {
      id: 'bleepersell',
      title: 'BleeperSell',
      description: {
        en: 'E-commerce platform enabling users to create and manage their own online stores with real-time capabilities.',
        es: 'Plataforma e-commerce que permite a los usuarios crear y gestionar sus propias tiendas en línea con capacidades en tiempo real.',
      },
      longDescription: {
        en: 'Full-stack development of a multi-vendor e-commerce platform. Built complete modules for authentication, store creation and management, product catalog, order processing, payment flows, and a wallet system with earnings tracking. Implemented live streaming and interactive chat using Amazon IVS, enabling sellers to run live product showcases.',
        es: 'Desarrollo full-stack de una plataforma e-commerce multi-vendedor. Construí módulos completos de autenticación, creación y gestión de tiendas, catálogo de productos, procesamiento de órdenes, flujos de pago y un sistema de billetera con seguimiento de ganancias. Implementé streaming en vivo y chat interactivo con Amazon IVS.',
      },
      tech: ['Vue.js', 'TypeScript', 'NestJS', 'MongoDB', 'AWS', 'Amazon IVS'],
      githubUrl: null,
      demoUrl: null,
      image: '/images/projects/bleepersell.png',
      featured: true,
    },
    {
      id: 'bleeperbuy',
      title: 'BleeperBuy',
      description: {
        en: 'Customer-facing marketplace for browsing stores and purchasing products, with live streaming integration.',
        es: 'Marketplace orientado al cliente para explorar tiendas y comprar productos, con integración de streaming en vivo.',
      },
      longDescription: {
        en: 'Built the buyer-facing side of a marketplace platform. Developed authentication, product browsing, checkout flow, order tracking, payment processing, and shipping time calculations. Integrated live and recorded streaming with Amazon IVS. The platform shares a scalable backend architecture with BleeperSell.',
        es: 'Construí el lado del comprador de una plataforma marketplace. Desarrollé autenticación, navegación de productos, flujo de checkout, seguimiento de órdenes, procesamiento de pagos y cálculo de tiempos de envío. Integré streaming en vivo y grabado con Amazon IVS. La plataforma comparte arquitectura backend con BleeperSell.',
      },
      tech: ['Vue.js', 'TypeScript', 'NestJS', 'MongoDB', 'AWS', 'Amazon IVS'],
      githubUrl: null,
      demoUrl: null,
      image: '/images/projects/bleeperbuy.png',
      featured: true,
    },
    {
      id: 'excelexpress',
      title: 'Excel Express Cargo',
      description: {
        en: 'Complete redesign of a logistics company website with an interactive volumetric weight calculator.',
        es: 'Rediseño completo del sitio web de una empresa de logística con calculadora de peso volumétrico interactiva.',
      },
      longDescription: {
        en: 'Led the full redesign and modernization of a logistics company website. Built interactive UI flows for service explanations, and implemented a custom volumetric weight calculator for shipping cost estimation. Focused on mobile responsiveness and intuitive user experience.',
        es: 'Lideré el rediseño y modernización completa del sitio web de una empresa de logística. Construí flujos de UI interactivos para explicar servicios e implementé una calculadora de peso volumétrico personalizada para estimación de costos de envío. Enfocado en responsividad móvil y UX intuitiva.',
      },
      tech: ['JavaScript', 'HTML', 'CSS', 'Responsive Design'],
      githubUrl: null,
      demoUrl: null,
      image: '/images/projects/excelexpress.png',
      featured: false,
    },
    {
      id: 'laborsoluciona',
      title: 'Labor Soluciona',
      description: {
        en: 'High-performance corporate landing page for a construction services company, built with Astro.',
        es: 'Landing page corporativa de alto rendimiento para una empresa de servicios de construcción, construida con Astro.',
      },
      longDescription: {
        en: 'Built a high-performance corporate website using Astro for near-zero JavaScript overhead. Achieved excellent Core Web Vitals scores with full SEO optimization, responsive design, and fast loading times across all devices.',
        es: 'Construí un sitio web corporativo de alto rendimiento usando Astro para mínimo overhead de JavaScript. Logré excelentes puntuaciones en Core Web Vitals con optimización SEO completa, diseño responsivo y tiempos de carga rápidos en todos los dispositivos.',
      },
      tech: ['Astro', 'HTML', 'CSS', 'SEO', 'Performance'],
      githubUrl: null,
      demoUrl: null,
      image: '/images/projects/laborsoluciona.png',
      featured: false,
    },
  ],

  experience: [

    {
      id: 'freelance',
      company: 'Freelance',
      role: {
        en: 'Full Stack Developer',
        es: 'Desarrollador Full Stack',
      },
      period: '2021 – 2025',
      description: {
        en: [
          'Worked with international clients building web applications and landing pages.',
          'Developed high-performance, SEO-optimized websites using Astro with near-zero JavaScript overhead.',
          'Built responsive and interactive user interfaces with modern UI/UX and animations.',
          'Redesigned existing platforms and implemented custom business logic (shipping calculators, interactive flows).',
          'Managed full project lifecycle independently from scoping to production deployment.',
        ],
        es: [
          'Trabajé con clientes internacionales construyendo aplicaciones web y landing pages.',
          'Desarrollé sitios web de alto rendimiento y SEO optimizados con Astro y mínimo overhead de JavaScript.',
          'Construí interfaces de usuario responsivas e interactivas con UI/UX moderno y animaciones.',
          'Rediseñé plataformas existentes e implementé lógica de negocio personalizada (calculadoras de envío, flujos interactivos).',
          'Gestioné el ciclo de vida completo de proyectos de forma independiente, desde el alcance hasta el despliegue.',
        ],
      },
      tech: ['Astro', 'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      id: 'bleeperbuy-company',
      company: 'Bleeperbuy',
      role: {
        en: 'Full Stack Software Engineer',
        es: 'Ingeniero de Software Full Stack',
      },
      period: '2022 – Present',
      description: {
        en: [
          'Developed frontend applications for two large-scale platforms (BleeperSell & BleeperBuy) using Vue.js and TypeScript.',
          'Designed and implemented REST APIs using Node.js and NestJS, shared across multiple platform products.',
          'Built core e-commerce modules: authentication, store creation, product management, orders, and payment flows.',
          'Developed a wallet system with earnings tracking, payment summaries, and bank integration for financial operations.',
          'Implemented real-time live streaming and interactive chat features using Amazon IVS.',
          'Contributed to scalable backend architecture supporting multiple platforms simultaneously.',
        ],
        es: [
          'Desarrollé aplicaciones frontend para dos plataformas a gran escala (BleeperSell y BleeperBuy) con Vue.js y TypeScript.',
          'Diseñé e implementé APIs REST con Node.js y NestJS, compartidas entre múltiples productos.',
          'Construí módulos core de e-commerce: autenticación, creación de tiendas, gestión de productos, órdenes y pagos.',
          'Desarrollé un sistema de billetera con seguimiento de ganancias, resúmenes de pagos e integración bancaria.',
          'Implementé streaming en vivo en tiempo real y chat interactivo usando Amazon IVS.',
          'Contribuí a una arquitectura backend escalable que soporta múltiples plataformas simultáneamente.',
        ],
      },
      tech: ['Vue.js', 'TypeScript', 'NestJS', 'Node.js', 'MongoDB', 'AWS', 'Amazon IVS'],
    },
  ],

  skillCategories: [
    {
      id: 'frontend',
      label: { en: 'Frontend', es: 'Frontend' },
      skills: ['React', 'Vue.js', 'Angular', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS', 'HTML / CSS'],
    },
    {
      id: 'backend',
      label: { en: 'Backend', es: 'Backend' },
      skills: ['Node.js', 'NestJS', 'Express', 'REST APIs'],
    },
    {
      id: 'database',
      label: { en: 'Database', es: 'Base de Datos' },
      skills: ['MongoDB', 'MySQL'],
    },
    {
      id: 'cloud',
      label: { en: 'Cloud & Tools', es: 'Cloud y Herramientas' },
      skills: ['AWS Lambda', 'AWS Cognito', 'Amazon IVS', 'Serverless', 'Git', 'GitHub', 'GitLab'],
    },
    {
      id: 'concepts',
      label: { en: 'Concepts', es: 'Conceptos' },
      skills: ['Scalable Architecture', 'API Design', 'Real-time Systems', 'Performance Optimization', 'Responsive Design'],
    },
  ],

  contact: {
    email: 'vargasg.work@gmail.com',
    github: 'https://github.com/gerardovcdev',
    gitlab: 'https://gitlab.com/vargasg',
    linkedin: 'https://linkedin.com/in/gerardo-vargas-02227433b',
  },

  education: {
    degree: {
      en: "Bachelor's Degree in Systems Engineering",
      es: 'Licenciatura en Ingeniería de Sistemas',
    },
    institution: 'Universidad de Margarita',
    period: '2020 – 2024',
  },
}
