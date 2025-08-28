import React from 'react'
// Importa el componente directamente desde el archivo raíz
import KPIWizard from '../mini_app_kpi_mentoria_5_pantallas.jsx'

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
