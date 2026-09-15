import React from "react";
import { isNewKpi } from "../kpi-catalog";

// Tag "Nuevo" para KPIs recién agregados al catálogo. Desaparece solo
// (isNewKpi deja de devolver true) NEW_BADGE_DAYS días después de addedAt.
export default function NewBadge({ addedAt, className = "" }) {
  if (!isNewKpi(addedAt)) return null;
  return (
    <span
      className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wide text-white bg-orange-500 rounded-full px-2 py-0.5 ${className}`}
    >
      Nuevo
    </span>
  );
}
