import React from "react";

export default function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="p-2 rounded-2xl bg-gray-100">
        {Icon && <Icon className="h-5 w-5" />}
      </div>
      <div>
        <h3 className="text-xl font-semibold leading-tight">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}

