import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Copy, RefreshCw, CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function StepSummary({
  service,
  bizGoal,
  userGoal,
  notes,
  tasks,
  selected,
  kpiCatalogWithUrl,
  setInfo,
  resolveKpiUrl,
  copyMarkdown,
  resetAll,
}) {
  return (
    <Card className="shadow-sm rounded-2xl">
      <CardHeader>
        <SectionTitle
          icon={CheckCircle2}
          title="5) Resumen y confirmación"
          subtitle="Todo listo para compartir y repetir en otro servicio"
        />
      </CardHeader>
      <CardContent>
        <div className="grid md:[grid-template-columns:3fr_4fr] gap-6">
          <div>
            <h4 className="font-semibold mb-2">Contexto</h4>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Servicio / producto:</span> {service || (
                  <i className="text-gray-400">—</i>
                )}
              </p>
              <p>
                <span className="font-medium">Objetivo de negocio:</span> <br /> {bizGoal || (
                  <i className="text-gray-400">—</i>
                )}
              </p>
              <p>
                <span className="font-medium">Objetivo de usuario:</span> <br /> {userGoal || (
                  <i className="text-gray-400">—</i>
                )}
              </p>
              {notes && <p className="text-gray-500">{notes}</p>}
            </div>
            <Separator className="my-4" />
            <h4 className="font-semibold mb-2">Tareas clave</h4>
            <ul className="list-disc ml-5 text-sm space-y-1">
              {tasks.filter(Boolean).map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">KPIs seleccionados</h4>
            <div className="space-y-3">
              {Object.keys(selected).length === 0 && (
                <p className="text-sm text-gray-500">No hay KPIs seleccionados.</p>
              )}
              {Object.keys(selected).map((id) => {
                const k = kpiCatalogWithUrl.find((x) => x.id === id);
                const meta = selected[id];
                return (
                  <div key={id} className="border rounded-2xl p-3">
                    <div className="items-center justify-between gap-2">
                      <div className="mb-2">
                        <Badge variant="outline">{k.cat}</Badge>
                      </div>
                      <div className="gap-2">
                        <div className="font-medium flex items-center gap-2">
                          {k.title}
                          {k.url && (
                            <button
                              type="button"
                              title="Más info"
                              onClick={() =>
                                setInfo({
                                  open: true,
                                  url: resolveKpiUrl(k.url),
                                  title: k.title,
                                  id: k.id,
                                })
                              }
                              className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs text-gray-600 hover:bg-gray-100"
                            >
                              ?
                            </button>
                          )}
                        </div>
                        <div className="text-xs text-gray-500">{k.desc}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs mt-2">
                      <div>
                        <span className="text-gray-500">Baseline:</span> {meta.baseline || <i>—</i>}
                      </div>
                      <div>
                        <span className="text-gray-500">Meta:</span> {meta.target || <i>—</i>}
                      </div>
                      <div>
                        <span className="text-gray-500">Liberación:</span> {meta.timeframe || <i>—</i>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-6">
          <Button onClick={copyMarkdown} className="gap-2">
            <Copy className="h-4 w-4" /> Copiar resumen (Markdown)
          </Button>
          <Button variant="secondary" onClick={resetAll} className="gap-2">
            <RefreshCw className="h-4 w-4" /> Nuevo servicio
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

