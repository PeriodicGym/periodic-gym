import { BarChart3, Bot, Calendar, Dumbbell, FileText, Home, Smartphone, Target, TrendingUp, Trophy, User, Video } from "lucide-react";

export const weightProgressData = [
  { date: "Jan", supino: 70, agachamento: 80, levantamento: 90 },
  { date: "Fev", supino: 72, agachamento: 85, levantamento: 95 },
  { date: "Mar", supino: 75, agachamento: 87, levantamento: 100 },
  { date: "Abr", supino: 78, agachamento: 90, levantamento: 105 },
  { date: "Mai", supino: 80, agachamento: 92, levantamento: 110 },
  { date: "Jun", supino: 82, agachamento: 95, levantamento: 115 },
  { date: "Jul", supino: 84, agachamento: 97, levantamento: 118 },
  { date: "Ago", supino: 85, agachamento: 100, levantamento: 120 },
  { date: "Set", supino: 87, agachamento: 102, levantamento: 123 },
  { date: "Out", supino: 88, agachamento: 105, levantamento: 125 },
  { date: "Nov", supino: 90, agachamento: 107, levantamento: 128 },
  { date: "Dez", supino: 92, agachamento: 110, levantamento: 130 },
]

export const seriesData = [
  { month: "Jan", peito: 32, costas: 30, perna: 40 },
  { month: "Fev", peito: 34, costas: 32, perna: 42 },
  { month: "Mar", peito: 35, costas: 34, perna: 44 },
  { month: "Abr", peito: 36, costas: 35, perna: 45 },
  { month: "Mai", peito: 38, costas: 36, perna: 48 },
  { month: "Jun", peito: 40, costas: 38, perna: 50 },
  { month: "Jul", peito: 41, costas: 39, perna: 52 },
  { month: "Ago", peito: 42, costas: 40, perna: 54 },
  { month: "Set", peito: 44, costas: 41, perna: 55 },
  { month: "Out", peito: 45, costas: 42, perna: 56 },
  { month: "Nov", peito: 46, costas: 44, perna: 58 },
  { month: "Dez", peito: 48, costas: 45, perna: 60 },
];

export const exerciseStats = [
  {
    name: "Supino Reto",
    current: "82kg",
    previous: "80kg",
    change: "+2kg",
    trend: "up",
    oneRM: "95kg",
  },
  {
    name: "Agachamento",
    current: "95kg",
    previous: "92kg",
    change: "+3kg",
    trend: "up",
    oneRM: "110kg",
  },
  {
    name: "Levantamento Terra",
    current: "115kg",
    previous: "110kg",
    change: "+5kg",
    trend: "up",
    oneRM: "135kg",
  },
  {
    name: "Desenvolvimento",
    current: "50kg",
    previous: "52kg",
    change: "-2kg",
    trend: "down",
    oneRM: "58kg",
  },
]

export const features = [
  {
    icon: Calendar,
    title: "Calendário Inteligente",
    description:
      "Organize seus treinos com visualização mensal e lembretes automáticos",
  },
  {
    icon: BarChart3,
    title: "Análise de Progresso",
    description: "Gráficos detalhados da sua evolução e estimativa de 1RM",
  },
  {
    icon: Bot,
    title: "Assistente IA",
    description: "Sugestões personalizadas baseadas no seu desempenho",
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Acesse de qualquer dispositivo, a qualquer hora",
  },
  {
    icon: Trophy,
    title: "Gamificação",
    description: "Conquistas, badges e streaks para manter a motivação",
  },
  {
    icon: Target,
    title: "Metas Personalizadas",
    description: "Defina objetivos e acompanhe seu progresso em tempo real",
  },
];

export const mockExercises =  [
  {
    id: 1,
    name: "Supino Reto",
    muscle: "Peito",
    sets: 4,
    reps: "8-10",
    lastWeight: 80,
    completed: false,
    sets_data: [
      { weight: 0, reps: 0, completed: false },
      { weight: 0, reps: 0, completed: false },
      { weight: 0, reps: 0, completed: false },
      { weight: 0, reps: 0, completed: false },
    ],
  },
  {
    id: 2,
    name: "Supino Inclinado",
    muscle: "Peito Superior",
    sets: 3,
    reps: "10-12",
    lastWeight: 70,
    completed: false,
    sets_data: [
      { weight: 0, reps: 0, completed: false },
      { weight: 0, reps: 0, completed: false },
      { weight: 0, reps: 0, completed: false },
    ],
  },
  {
    id: 3,
    name: "Desenvolvimento Militar",
    muscle: "Ombro",
    sets: 4,
    reps: "8-10",
    lastWeight: 50,
    completed: false,
    sets_data: [
      { weight: 0, reps: 0, completed: false },
      { weight: 0, reps: 0, completed: false },
      { weight: 0, reps: 0, completed: false },
      { weight: 0, reps: 0, completed: false },
    ],
  },
]

export const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "/mês",
    description: "Perfeito para começar",
    features: [
      "Assistente IA limitado",
      "Histórico básico",
      "Suporte por email",
    ],
    popular: false,
  },
];

export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

export  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
