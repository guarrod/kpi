import React from 'react'

export function Button({ className = '', variant, size, asChild, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-magno-500 disabled:opacity-50 disabled:pointer-events-none';
  const sizes = {
    sm: 'h-8 px-3',
    md: 'h-9 px-4',
    lg: 'h-10 px-6',
  };
  const variants = {
    default: 'bg-magno-600 text-white hover:bg-magno-700',
    outline: 'border border-slate-300 bg-white hover:bg-slate-50',
    ghost: 'bg-transparent hover:bg-slate-100',
  };
  const cls = [base, sizes[size] || sizes.md, variants[variant] || variants.default, className].filter(Boolean).join(' ');
  return <button className={cls} {...props} />
}
