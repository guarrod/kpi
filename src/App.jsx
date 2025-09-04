import React from 'react'
// Importa el KPIWizard desde la nueva ruta de feature
import KPIWizard from '@/features/kpi-wizard'

export default function App() {
  return (
    <div className="min-h-full">
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <h1 className="text-xl font-semibold">KPIs</h1>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-6">
        <KPIWizard />
      </main>
    </div>
  )
}
