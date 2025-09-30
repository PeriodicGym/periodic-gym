"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { TrendingUp, TrendingDown, Calendar, Target, BarChart3, Star } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts"
import { weightProgressData, seriesData, exerciseStats } from "../../../siteconfig"

export default function EvolutionPage() {
  const [period, setPeriod] = useState("6months")

  const monthSlices: { [key: string]: number } = {
    "1month": 1,
    "3months": 3,
    "6months": 6,
    "1year": 12,
  }

  const filteredWeightData = useMemo(() => {
    const sliceCount = monthSlices[period] ?? weightProgressData.length
    return weightProgressData.slice(-sliceCount)
  }, [period])

  const filteredSeriesData = useMemo(() => {
    const sliceCount = monthSlices[period] ?? seriesData.length
    return seriesData.slice(-sliceCount)
  }, [period])

  const monthlyHighlight = useMemo(() => {
    if (weightProgressData.length < 2) {
      return {
        message: "Continue treinando para ver seu progresso!",
        icon: <Target className="h-4 w-4 text-muted-foreground" />,
      }
    }

    const lastMonth = weightProgressData[weightProgressData.length - 1]
    const previousMonth = weightProgressData[weightProgressData.length - 2]

    const gains = {
      Supino: lastMonth.supino - previousMonth.supino,
      Agachamento: lastMonth.agachamento - previousMonth.agachamento,
      Levantamento: lastMonth.levantamento - previousMonth.levantamento,
    }

    const bestLift = Object.entries(gains).reduce(
      (best, current) => (current[1] > best[1] ? current : best),
      ["", 0]
    )

    if (bestLift[1] > 0) {
      return {
        message: `Elevou seu ${bestLift[0]} em ${bestLift[1]}kg este mês!`,
        icon: <TrendingUp className="h-4 w-4 text-green-500" />,
      }
    }

    return {
      message: "Mantenha a consistência para progredir!",
      icon: <Star className="h-4 w-4 text-muted-foreground" />,
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-auto min-h-14 flex-col gap-3 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="sm:mr-2" />
            <div>
              <h1 className="text-lg font-semibold">Evolução</h1>
              <p className="text-sm text-muted-foreground">Acompanhe seu progresso e performance</p>
            </div>
          </div>

          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-full sm:w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">1 mês</SelectItem>
              <SelectItem value="3months">3 meses</SelectItem>
              <SelectItem value="6months">6 meses</SelectItem>
              <SelectItem value="1year">1 ano</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6 space-y-6">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Destaque do Mês</CardTitle>
              {monthlyHighlight.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold leading-tight">{monthlyHighlight.message}</div>
              <p className="text-xs text-muted-foreground">Baseado no seu último mês de treino</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Exercícios Melhorados</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8/10</div>
              <p className="text-xs text-muted-foreground">Progresso consistente</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Frequência Semanal</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2x</div>
              <p className="text-xs text-muted-foreground">Média das últimas 4 semanas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Meta do Mês</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">17/20 treinos realizados</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Evolução de Carga por Exercício
              </CardTitle>
              <CardDescription>Progresso dos principais exercícios</CardDescription>
            </CardHeader>
            <CardContent className="px-2 sm:px-4 pt-4">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={filteredWeightData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}kg`} />
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: '14px' }} />
                  <Line type="monotone" dataKey="supino" stroke="#3b82f6" strokeWidth={2} name="Supino" dot={false} />
                  <Line type="monotone" dataKey="agachamento" stroke="#22c55e" strokeWidth={2} name="Agachamento" dot={false} />
                  <Line type="monotone" dataKey="levantamento" stroke="#f97316" strokeWidth={2} name="Levantamento" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volume Mensal por Músculo</CardTitle>
              <CardDescription>Total de séries mensais por grupo muscular</CardDescription>
            </CardHeader>
            <CardContent className="px-2 sm:px-4 pt-4">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={filteredSeriesData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: '14px' }} />
                  <Bar dataKey="peito" fill="#3b82f6" name="Peito" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="costas" fill="#22c55e" name="Costas" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="perna" fill="#f97316" name="Perna" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Performance por Exercício</CardTitle>
            <CardDescription>Comparativo e estimativa de 1RM</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {exerciseStats.map((exercise, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg gap-3">
                  <div className="flex-1">
                    <h3 className="font-medium">{exercise.name}</h3>
                    <p className="text-sm text-muted-foreground">Carga atual: {exercise.current}</p>
                  </div>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Mudança</p>
                      <div className={`flex items-center gap-1 text-sm font-medium ${exercise.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                        {exercise.trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                        <span>{exercise.change}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">1RM Est.</p>
                      <p className="text-sm font-medium">{exercise.oneRM}</p>
                    </div>
                    <Badge variant={exercise.trend === "up" ? "default" : "secondary"}>
                      {exercise.trend === "up" ? "Progredindo" : "Estável"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="flex-1">Exportar Relatório</Button>
          <Button variant="outline">Definir Nova Meta</Button>
        </div>
      </main>
    </div>
  )
}