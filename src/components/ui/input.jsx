import React from 'react'

export function Input({ className = '', ...props }) {
  return <input className={`w-full h-9 px-3 rounded-md border border-slate-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-magno-500 ${className}`} {...props} />
}
