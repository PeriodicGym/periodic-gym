'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Progress } from "@radix-ui/react-progress";
import { CheckCircle, Clock, Minus, Pause, Play, Plus, RotateCcw, Save } from "lucide-react";
import { useState } from "react";
import { mockExercises } from "../../../../siteconfig";

export default function CurrentWorkoutPage(){
   const [exercises, setExercises] = useState(mockExercises)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [timer, setTimer] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [notes, setNotes] = useState("")

  const completedExercises = exercises.filter((ex) => ex.completed).length
  const progress = (completedExercises / exercises.length) * 100

  const updateSet = (exerciseId: number, setIndex: number, field: "weight" | "reps", value: number) => {
    setExercises((prev) =>
      prev.map((ex) =>
        ex.id === exerciseId
          ? {
              ...ex,
              sets_data: ex.sets_data.map((set, idx) => (idx === setIndex ? { ...set, [field]: value } : set)),
            }
          : ex,
      ),
    )
  }

  const completeSet = (exerciseId: number, setIndex: number) => {
    setExercises((prev) =>
      prev.map((ex) =>
        ex.id === exerciseId
          ? {
              ...ex,
              sets_data: ex.sets_data.map((set, idx) =>
                idx === setIndex ? { ...set, completed: !set.completed } : set,
              ),
            }
          : ex,
      ),
    )
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <SidebarTrigger className="mr-4" />
          <div className="flex flex-1 items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold">Treino Atual</h1>
              <p className="text-sm text-muted-foreground">Peito, Ombro e Tríceps</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">
                <Clock className="h-3 w-3 mr-1" />
                {formatTime(timer)}
              </Badge>
              <Button variant="outline" size="sm" onClick={() => setIsTimerRunning(!isTimerRunning)}>
                {isTimerRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 p-6 space-y-6">
        {/* Progresso */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progresso do treino</span>
                <span>
                  {completedExercises}/{exercises.length} exercícios
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Lista de Exercícios */}
        <div className="space-y-4">
          {exercises.map((exercise, exerciseIndex) => (
            <Card key={exercise.id} className={`${exercise.completed ? "opacity-75" : ""}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {exercise.completed && <CheckCircle className="h-5 w-5 text-green-500" />}
                      {exercise.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {exercise.muscle} • {exercise.sets} séries de {exercise.reps} reps
                    </p>
                    <p className="text-xs text-muted-foreground">Última carga: {exercise.lastWeight}kg</p>
                  </div>
                  <Badge variant={exercise.completed ? "default" : "secondary"}>
                    {exercise.completed ? "Concluído" : "Pendente"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {exercise.sets_data.map((set, setIndex) => (
                  <div key={setIndex} className="flex items-center gap-3 p-3 border rounded-lg">
                    <span className="text-sm font-medium w-8">{setIndex + 1}ª</span>

                    <div className="flex items-center gap-2">
                      <Label className="text-xs">Peso (kg)</Label>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0 bg-transparent"
                          onClick={() => updateSet(exercise.id, setIndex, "weight", Math.max(0, set.weight - 2.5))}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Input
                          type="number"
                          value={set.weight || ""}
                          onChange={(e) => updateSet(exercise.id, setIndex, "weight", Number(e.target.value))}
                          className="w-16 h-8 text-center"
                          placeholder="0"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0 bg-transparent"
                          onClick={() => updateSet(exercise.id, setIndex, "weight", set.weight + 2.5)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Label className="text-xs">Reps</Label>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0 bg-transparent"
                          onClick={() => updateSet(exercise.id, setIndex, "reps", Math.max(0, set.reps - 1))}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Input
                          type="number"
                          value={set.reps || ""}
                          onChange={(e) => updateSet(exercise.id, setIndex, "reps", Number(e.target.value))}
                          className="w-16 h-8 text-center"
                          placeholder="0"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0 bg-transparent"
                          onClick={() => updateSet(exercise.id, setIndex, "reps", set.reps + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <Button
                      variant={set.completed ? "default" : "outline"}
                      size="sm"
                      onClick={() => completeSet(exercise.id, setIndex)}
                      className="ml-auto"
                    >
                      {set.completed ? <CheckCircle className="h-4 w-4" /> : "Concluir"}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notas do Treino */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Observações do Treino</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Como foi o treino hoje? Alguma observação sobre os exercícios..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>

        {/* Ações */}
        <div className="flex gap-3">
          <Button className="flex-1">
            <Save className="h-4 w-4 mr-2" />
            Salvar Treino
          </Button>
          <Button variant="outline">
            <RotateCcw className="h-4 w-4 mr-2" />
            Resetar
          </Button>
        </div>
      </div>
    </div>
  )
}
