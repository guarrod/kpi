import React from 'react'

export function Progress({ className = '', value = 0, ...props }) {
  return (
    <div className={`w-full h-2 bg-slate-200 rounded ${className}`} {...props}>
      <div style={{ width: `${value}%` }} className="h-full bg-magenta-600 rounded" />
    </div>
  )
}
