import React from 'react'

export function Separator({ className = '', ...props }) {
  return <hr className={`my-4 border-slate-200 ${className}`} {...props} />
}
