import React from "react";

// Nota fija para KPIs de capa "habilitador" (spec §5.4).
export default function HabilitadorNote({ capa, className = "" }) {
  if (capa !== "habilitador") return null;
  return (
    <p className={`text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded px-2 py-1.5 ${className}`}>
      Este KPI no se gestiona desde el equipo de producto. Se vigila y se escala.
    </p>
  );
}
