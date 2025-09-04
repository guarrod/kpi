import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { LineChart } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function StepTargets({
  selected,
  kpiCatalogWithUrl,
  updateSelected,
  setInfo,
  resolveKpiUrl,
}) {
  return (
    <Card className="shadow-sm rounded-2xl">
      <CardHeader>
        <SectionTitle
          icon={LineChart}
          title="4) Baseline y meta"
          subtitle="Define punto de partida y objetivo por KPI seleccionado"
        />
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.keys(selected).length === 0 && (
          <p className="text-sm text-gray-500">
            Primero selecciona KPIs en la pantalla anterior.
          </p>
        )}
        {Object.keys(selected).map((id) => {
          const k = kpiCatalogWithUrl.find((x) => x.id === id);
          return (
            <div key={id} className="border rounded-2xl p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{k.cat}</Badge>
                  <span className="font-semibold">{k.title}</span>
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
                <span className="text-xs text-gray-500">{k.how}</span>
              </div>
              <div className="grid md:grid-cols-3 gap-3 mt-2">
                <div>
                  <Label>Baseline</Label>
                  <Input
                    placeholder="Ej. 82% / 2m 30s"
                    value={selected[id].baseline}
                    onChange={(e) => updateSelected(id, "baseline", e.target.value)}
                  />
                </div>
                <div>
                  <Label>Meta</Label>
                  <Input
                    placeholder="Ej. 92% / 1m 45s"
                    value={selected[id].target}
                    onChange={(e) => updateSelected(id, "target", e.target.value)}
                  />
                </div>
                <div>
                  <Label>Liberación</Label>
                  <Input
                    placeholder="Momento estimado para liberar (opcional)"
                    value={selected[id].timeframe || ""}
                    onChange={(e) => updateSelected(id, "timeframe", e.target.value)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

