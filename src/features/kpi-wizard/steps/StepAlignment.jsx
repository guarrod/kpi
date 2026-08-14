import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Target, Plus, Trash2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function StepAlignment({
  service,
  setService,
  bizGoal,
  setBizGoal,
  userGoal,
  setUserGoal,
  notes,
  setNotes,
  tasks,
  addTask,
  removeTask,
  updateTask,
}) {
  return (
    <Card className="shadow-sm rounded-2xl">
      <CardHeader>
        <SectionTitle
          icon={Target}
          title="1) Alineación y tareas clave"
          subtitle="Define el marco antes de idear: negocio + usuario + servicio, y los journeys donde hay fricción"
        />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label>Servicio / producto</Label>
            <div className="flex gap-2 mt-1">
              <Input
                placeholder="Ej. Pago a terceros"
                value={service}
                onChange={(e) => setService(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Label>Objetivo de negocio</Label>
            <Input
              placeholder="Ej. Reducir costos de atención"
              value={bizGoal}
              onChange={(e) => setBizGoal(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Objetivo de usuario</Label>
            <Input
              placeholder="Ej. Completar pagos masivos sin errores"
              value={userGoal}
              onChange={(e) => setUserGoal(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Notas / contexto</Label>
            <Textarea
              placeholder="Riesgos, dependencias, hipótesis…"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="text-sm font-semibold text-slate-700">Tareas / flujo clave</h4>
          <p className="text-sm text-gray-500 mt-1">
            Enumera 2–3 micro journeys críticos y dónde hay fricción
          </p>
          <div className="space-y-3 mt-3">
            {tasks.map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <Input
                  placeholder={`Tarea ${i + 1} (ej. Cargar archivo de nómina)`}
                  value={t}
                  onChange={(e) => updateTask(i, e.target.value)}
                />
                {tasks.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeTask(i)}
                    className="shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button onClick={addTask} variant="secondary" className="gap-2">
              <Plus className="h-4 w-4" /> Añadir tarea
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
