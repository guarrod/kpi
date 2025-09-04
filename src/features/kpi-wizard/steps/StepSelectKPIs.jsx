import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ListChecks, Search } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function StepSelectKPIs({
  search,
  setSearch,
  categories,
  filterCats,
  toggleCat,
  filteredKPIs,
  selected,
  toggleKPI,
  setInfo,
  resolveKpiUrl,
}) {
  return (
    <Card className="shadow-sm rounded-2xl">
      <CardHeader>
        <SectionTitle
          icon={ListChecks}
          title="3) Selección de KPIs"
          subtitle="Marca los KPIs relevantes (relevancia, medibilidad y accionabilidad)"
        />
      </CardHeader>
      <CardContent>
        <div className="gap-3 mb-4">
          <div className="flex items-center gap-2 flex-1 mb-4">
            <Search className="h-4 w-4 text-gray-500" />
            <Input
              placeholder="Buscar KPI por nombre o descripción…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCat(cat)}
                className={`px-2 py-1 rounded-full text-xs border ${
                  filterCats.includes(cat)
                    ? "bg-magno-600 text-white border-magno-600"
                    : "bg-white text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredKPIs.map((k) => (
            <label
              key={k.id}
              className={`border rounded-2xl p-4 cursor-pointer transition-shadow ${
                selected[k.id] ? "border-magno-600 shadow-md" : "hover:shadow-sm"
              }`}
            >
              <div className="flex items-start gap-3">
                <Checkbox
                  checked={!!selected[k.id]}
                  onCheckedChange={() => toggleKPI(k.id)}
                />
                <div>
                  <div className="gap-2 mb-1">
                    <div className="font-medium flex items-center gap-2">
                      {k.title}
                      {k.url && (
                        <button
                          type="button"
                          title="Más info"
                          onClick={(e) => {
                            e.stopPropagation();
                            setInfo({
                              open: true,
                              url: resolveKpiUrl(k.url),
                              title: k.title,
                              id: k.id,
                            });
                          }}
                          className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs text-gray-600 hover:bg-gray-100"
                        >
                          ?
                        </button>
                      )}
                    </div>
                    <div>
                      <Badge variant="outline">{k.cat}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{k.desc}</p>
                  <p className="text-xs text-gray-400 mt-1">Cómo se mide: {k.how}</p>
                </div>
              </div>
            </label>
          ))}
        </div>

        {Object.keys(selected).length === 0 && (
          <p className="text-sm text-gray-500 mt-4">
            Tip: empieza marcando 2–3 KPIs máximo para mantener el foco.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

