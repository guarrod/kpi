import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Target } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function StepService({
  service,
  setService,
  bizGoal,
  setBizGoal,
  userGoal,
  setUserGoal,
  notes,
  setNotes,
}) {
  return (
    <Card className="shadow-sm rounded-2xl">
      <CardHeader>
        <SectionTitle
          icon={Target}
          title="1) Alineación de objetivos"
          subtitle="Define el marco antes de idear: negocio + usuario + servicio"
        />
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </CardContent>
    </Card>
  );
}

