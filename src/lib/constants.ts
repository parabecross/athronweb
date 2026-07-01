export const SITE = {
  name: "ATHRON",
  domain: "www.athron.mx",
  url: "https://www.athron.mx",
  tagline: "La plataforma que conecta todo tu box.",
  motto: ["Train.", "Track.", "Progress."],
  email: "athronapp@gmail.com",
  whatsapp: "5514745677",
  whatsappUrl: "https://wa.me/525514745677",
  instagram: "@athron.mx",
  instagramUrl: "https://instagram.com/athron.mx",
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
        { name: "Métricas", desc: "KPIs clave para decisiones informadas." },
        { name: "Usuarios", desc: "Gestión completa de atletas y staff." },
        { name: "Membresías", desc: "Control de planes y pagos." },
        { name: "Control del box", desc: "Configuración centralizada." },
      ],
    },
    {
      id: "coach",
      label: "Coach",
      modules: [
        { name: "Clases", desc: "Programación y gestión de WODs." },
        { name: "Asistencia", desc: "Registro rápido por clase." },
        { name: "Seguimiento", desc: "Monitoreo del progreso de atletas." },
        { name: "Atletas", desc: "Perfiles y historial completo." },
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
  "Gestión de atletas",
  "Gestión de coaches",
  "Administradores",
  "Clases",
  "Reservas",
  "Membresías",
  "Asistencia",
  "Ranking",
  "Ranking público",
  "Progreso del atleta",
  "Dashboard básico",
  "Dashboard ejecutivo",
  "Estadísticas avanzadas",
  "Alertas",
  "Resumen semanal",
  "PWA instalable",
  "Multi-box seguro",
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
      "Dashboard Ejecutivo",
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
