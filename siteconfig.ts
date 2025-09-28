import { BarChart3, Bot, Calendar, Smartphone, Target, Trophy } from "lucide-react";

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
