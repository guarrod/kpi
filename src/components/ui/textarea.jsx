import React from 'react'

export function Textarea({ className = '', ...props }) {
  return <textarea className={`w-full min-h-[96px] px-3 py-2 rounded-md border border-slate-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-magno-500 ${className}`} {...props} />
}
