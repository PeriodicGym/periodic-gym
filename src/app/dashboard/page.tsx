"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Award, Calendar, CheckCircle, Clock, Dumbbell, Flame, Target, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <SidebarTrigger className="mr-4" />
          <div className="flex flex-1 items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Bem-vindo de volta, João!</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="gap-1">
                <Flame className="h-3 w-3" />7 dias consecutivos
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 space-y-6 p-6">
        {/* Treino do Dia */}
        <Card className="border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5" />
                  Treino de Hoje
                </CardTitle>
                <CardDescription>Peito, Ombro e Tríceps</CardDescription>
              </div>
              <Badge variant="outline">
                <Clock className="h-3 w-3 mr-1" />
                45-60 min
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Progresso</span>
              <span className="text-sm font-medium">0/8 exercícios</span>
            </div>
            {/* <Progress value={0} className="h-2" /> */}
            <div className="flex gap-2">
              <Button asChild className="flex-1">
                <Link href="/workout/current">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Iniciar Treino
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/workout/current/preview">Ver Detalhes</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Treinos esta semana</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4/5</div>
              <p className="text-xs text-muted-foreground">+1 desde a semana passada</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sequência atual</CardTitle>
              <Flame className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 dias</div>
              <p className="text-xs text-muted-foreground">Melhor: 12 dias</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Carga total</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4t</div>
              <p className="text-xs text-muted-foreground">+12% este mês</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Meta mensal</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18/20</div>
              <p className="text-xs text-muted-foreground">90% concluída</p>
            </CardContent>
          </Card>
        </div>

        {/* Ações Rápidas */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="cursor-pointer transition-colors hover:bg-muted/50">
            <Link href="/calendar">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Calendar className="h-5 w-5" />
                  Calendário
                </CardTitle>
                <CardDescription>Visualize seus treinos planejados</CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="cursor-pointer transition-colors hover:bg-muted/50">
            <Link href="/history">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Clock className="h-5 w-5" />
                  Histórico
                </CardTitle>
                <CardDescription>Revise seus treinos anteriores</CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="cursor-pointer transition-colors hover:bg-muted/50">
            <Link href="/evolution">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <TrendingUp className="h-5 w-5" />
                  Evolução
                </CardTitle>
                <CardDescription>Acompanhe seu progresso</CardDescription>
              </CardHeader>
            </Link>
          </Card>
        </div>

        {/* Conquistas Recentes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Conquistas Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                  <Flame className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Sequência de 7 dias!</p>
                  <p className="text-xs text-muted-foreground">Conquistado hoje</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Novo PR no Supino</p>
                  <p className="text-xs text-muted-foreground">85kg - há 2 dias</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
