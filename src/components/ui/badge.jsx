import React from 'react'

export function Badge({ className = '', ...props }) {
  return <span className={`inline-flex items-center px-2 py-0.5 text-xs rounded border bg-[#e7e7e7] text-slate-700 ${className}`} {...props} />
}
