export const SITE = {
  name: "ATHRON",
  domain: "www.athron.mx",
  url: "https://www.athron.mx",
  tagline: "La plataforma que conecta todo tu box.",
  motto: ["Train.", "Track.", "Progress."],
  email: "athronapp@gmail.com",
  whatsapp: "5514745677",
  whatsappUrl: "https://wa.me/525514745677",
  whatsappPromoUrl:
    "https://wa.me/525514745677?text=Hola%2C%20quiero%20solicitar%20acceso%20promocional%20a%20ATHRON%20para%20mi%20box",
  instagram: "@athron.mx",
  instagramUrl: "https://instagram.com/athron.mx",
} as const;

export const CTAS = {
  primary: "Solicitar acceso promocional",
  secondary: "Hablar por WhatsApp",
  plans: "Ver planes",
  pilot: "Quiero aplicar como box piloto",
  try: "Quiero probar ATHRON",
} as const;

export const HERO_CHECKS = [
  "Instalable como App",
  "Desde cualquier dispositivo",
  "Plataforma en la nube",
] as const;

export const PROBLEMS = [
  "Reservas por WhatsApp.",
  "Excel.",
  "Asistencia manual.",
  "Poca información.",
  "Membresías difíciles.",
  "Seguimiento complicado.",
] as const;

export const ECOSYSTEM = {
  center: { label: "ATHRON", sub: "Centro de Operaciones" },
  roles: [
    {
      id: "owner",
      label: "Dueño",
      modules: [
        { name: "Dashboard", desc: "Visión general de tu box en tiempo real." },
        { name: "Métricas", desc: "KPIs operativos para decisiones informadas." },
        { name: "Usuarios", desc: "Gestión completa de atletas y staff." },
        {
          name: "Membresías",
          desc: "Control de vigencias y estados de membresía.",
        },
        { name: "Control del box", desc: "Configuración centralizada." },
      ],
    },
    {
      id: "coach",
      label: "Coach",
      modules: [
        { name: "Clases", desc: "Programación y gestión de clases." },
        { name: "Asistencia", desc: "Registro rápido por clase." },
        { name: "Seguimiento", desc: "Monitoreo del progreso de atletas." },
        { name: "Atletas", desc: "Perfiles e historial completo." },
      ],
    },
    {
      id: "athlete",
      label: "Atleta",
      modules: [
        { name: "Reservas", desc: "Reserva clases en segundos." },
        { name: "Perfil", desc: "Tu información y membresía." },
        { name: "Ranking", desc: "Compite y compara resultados." },
        { name: "Progreso", desc: "Visualiza tu evolución." },
      ],
    },
  ],
} as const;

export const FEATURES = [
  {
    name: "Reservas",
    benefit: "Tus atletas reservan su lugar desde el celular.",
  },
  {
    name: "Membresías",
    benefit: "Controla vigencias y estados sin hojas de cálculo.",
  },
  {
    name: "Asistencia",
    benefit: "Registra quién asistió a cada clase en segundos.",
  },
  {
    name: "Ranking",
    benefit: "Motiva a tu comunidad con competencia sana.",
  },
  {
    name: "Ranking público",
    benefit: "Comparte resultados con tu comunidad de forma visible.",
  },
  {
    name: "Progreso del atleta",
    benefit: "Cada atleta visualiza su evolución en el box.",
  },
  {
    name: "Dashboard básico",
    benefit: "Toma decisiones con información clara.",
  },
  {
    name: "Dashboard ejecutivo",
    benefit: "Métricas operativas para dueños que quieren el panorama completo.",
  },
  {
    name: "Estadísticas avanzadas",
    benefit: "Detecta horarios con mayor demanda y patrones de asistencia.",
  },
  {
    name: "Alertas",
    benefit: "Identifica lo importante antes de que se vuelva un problema.",
  },
  {
    name: "Resumen semanal",
    benefit: "Recibe un panorama de la operación de tu box cada semana.",
  },
  {
    name: "PWA instalable",
    benefit: "Tus atletas acceden como app, sin App Store ni Google Play.",
  },
  {
    name: "Gestión de atletas",
    benefit: "Centraliza perfiles, membresías y actividad de tu comunidad.",
  },
  {
    name: "Gestión de coaches",
    benefit: "Organiza tu equipo con roles y accesos claros.",
  },
  {
    name: "Administradores",
    benefit: "Delega operación sin perder control del box.",
  },
  {
    name: "Clases",
    benefit: "Programa horarios y capacidad desde un solo lugar.",
  },
  {
    name: "Multi-box seguro",
    benefit: "Cada box opera con datos completamente aislados.",
  },
] as const;

export const PILOT_CARDS = [
  {
    title: "Acceso ATHRON Elite",
    description:
      "Todas las funciones actuales desbloqueadas durante el periodo promocional.",
  },
  {
    title: "Configuración inicial",
    description:
      "Te ayudamos a cargar tu box, coaches, atletas, clases y membresías.",
  },
  {
    title: "Acompañamiento",
    description:
      "Queremos entender cómo opera tu box y mejorar ATHRON contigo.",
  },
  {
    title: "Sin compromiso",
    description:
      "Al finalizar, eliges el plan que mejor se adapte a tu operación.",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Solicitas acceso promocional",
    description: "Nos escribes por WhatsApp o correo.",
  },
  {
    step: "02",
    title: "Configuramos tu box",
    description:
      "Creamos tu espacio, coaches, atletas, clases y membresías.",
  },
  {
    step: "03",
    title: "Tu equipo empieza a usar ATHRON",
    description:
      "Dueño, coaches y atletas acceden desde celular o computadora.",
  },
  {
    step: "04",
    title: "Medimos la operación real",
    description:
      "Revisamos reservas, asistencia, membresías y participación.",
  },
  {
    step: "05",
    title: "Eliges tu plan",
    description:
      "Al terminar el acceso promocional, eliges Start, Pro o Elite.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "¿ATHRON es una app?",
    answer:
      "ATHRON es una plataforma web instalable. Tus atletas pueden agregarla a la pantalla principal de su celular y usarla como app.",
  },
  {
    question: "¿Necesito App Store o Google Play?",
    answer:
      "No. ATHRON funciona desde el navegador y puede instalarse como PWA.",
  },
  {
    question: "¿Puedo probar ATHRON antes de contratar?",
    answer:
      "Sí. Estamos abriendo acceso promocional a 5 boxes piloto durante 30 días.",
  },
  {
    question: "¿Qué incluye el acceso promocional?",
    answer:
      "Acceso a ATHRON Elite, configuración inicial y acompañamiento durante el periodo promocional.",
  },
  {
    question: "¿ATHRON cobra pagos o membresías automáticamente?",
    answer:
      "No por ahora. ATHRON ayuda a controlar membresías, vigencias y estados. Los cobros se manejan fuera de la plataforma.",
  },
  {
    question: "¿ATHRON es para gimnasios tradicionales?",
    answer:
      "ATHRON está diseñado para boxes de CrossFit y entrenamiento funcional.",
  },
  {
    question: "¿Mis datos se mezclan con otros boxes?",
    answer: "No. Cada box tiene su propio espacio aislado.",
  },
] as const;

export const PLANS = [
  {
    id: "start",
    name: "ATHRON START",
    price: 899,
    popular: false,
    limits: ["Hasta 50 atletas", "2 coaches", "1 administrador"],
    features: [
      "Clases",
      "Reservas",
      "Membresías",
      "Asistencia",
      "Dashboard básico",
      "PWA",
    ],
  },
  {
    id: "pro",
    name: "ATHRON PRO",
    price: 1099,
    popular: false,
    limits: ["Hasta 75 atletas", "5 coaches", "2 administradores"],
    features: [
      "Todo Start",
      "Ranking",
      "Progreso",
      "Dashboard ejecutivo",
      "Estadísticas",
      "Historial",
      "Alertas",
    ],
  },
  {
    id: "elite",
    name: "ATHRON ELITE",
    price: 1299,
    popular: true,
    limits: [
      "Hasta 150 atletas",
      "Coaches ilimitados",
      "Administradores ilimitados",
    ],
    features: ["Todas las funciones actuales"],
  },
] as const;

export const FLOATING_CARDS = [
  { label: "Reservas", icon: "calendar", delay: 0 },
  { label: "Membresías", icon: "card", delay: 0.15 },
  { label: "Ranking", icon: "trophy", delay: 0.3 },
  { label: "Asistencia", icon: "check", delay: 0.45 },
  { label: "Dashboard", icon: "chart", delay: 0.6 },
] as const;
