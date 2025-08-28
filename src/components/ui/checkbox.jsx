import React from 'react'

export function Checkbox({ className = '', checked, onCheckedChange, ...props }) {
  return (
    <input
      type="checkbox"
      className={`h-4 w-4 rounded mt-1 border-slate-300 text-magno-600 focus:ring-magno-500 ${className}`}
      checked={checked}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
      {...props}
    />
  )
}
