import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Gauge, Plus, Trash2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function StepMVP({ tasks, addTask, removeTask, updateTask }) {
  return (
    <Card className="shadow-sm rounded-2xl">
      <CardHeader>
        <SectionTitle
          icon={Gauge}
          title="2) Tareas/flujo clave"
          subtitle="Enumera 2–3 micro journeys críticos y dónde hay fricción"
        />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
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
      </CardContent>
    </Card>
  );
}

