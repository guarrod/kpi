import React from "react";
import { LAYER_LABELS, LAYER_STYLES } from "../kpi-catalog";

// Badge de capa (negocio/producto/experiencia/habilitador). El texto
// siempre está presente — nunca depende solo del color (spec §5.2).
export default function LayerBadge({ capa, className = "" }) {
  if (!capa) return null;
  const style = LAYER_STYLES[capa] || "bg-gray-50 text-gray-600 border-gray-200";
  const label = LAYER_LABELS[capa] || capa;
  return (
    <span
      className={`inline-flex items-center text-xs font-medium border rounded-full px-2 py-0.5 ${style} ${className}`}
    >
      {label}
    </span>
  );
}
