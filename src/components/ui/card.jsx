import React from 'react'

export function Card({ className = '', ...props }) {
  return <div className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`} {...props} />
}

export function CardHeader({ className = '', ...props }) {
  return <div className={`p-4 border-b border-slate-200 ${className}`} {...props} />
}

export function CardContent({ className = '', ...props }) {
  return <div className={`p-4 ${className}`} {...props} />
}
