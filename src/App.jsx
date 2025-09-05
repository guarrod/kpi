import React from 'react'
// Importa el KPIWizard desde la nueva ruta de feature
import KPIWizard from '@/features/kpi-wizard'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
  
      </header>
      <main className="max-w-6xl mx-auto px-4 py-6 flex-1 w-full">
        <KPIWizard />
        
      </main>
      <footer className="text-center text-xs text-gray-600 pt-2 p-3 bg-[#e7e7e7]">
        Hecho con ❤️ atte Carlitos
      </footer>
    </div>
  )
}
