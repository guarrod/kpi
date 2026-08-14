import React from 'react'
import KPIWizard from '@/features/kpi-wizard'
import RunsHistory from '@/features/runs-history/RunsHistory'
import { PlusCircle, ClipboardList } from 'lucide-react'

export default function App() {
  const [view, setView] = React.useState('wizard')

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="border-b bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-end">
          <nav className="flex gap-1 p-1 bg-gray-100 rounded-xl">
            <button
              onClick={() => setView('wizard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                view === 'wizard'
                  ? 'bg-white text-magno-500 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Nuevo
            </button>
            <button
              onClick={() => setView('history')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                view === 'history'
                  ? 'bg-white text-magno-500 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <ClipboardList className="w-3.5 h-3.5" />
              Historial
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 flex-1 w-full">
        {view === 'wizard' ? <KPIWizard /> : <RunsHistory />}
      </main>

      <footer className="text-center text-xs text-gray-600 pt-2 p-3 bg-[#e7e7e7]">
        Hecho con ❤️ atte Carlitos
      </footer>
    </div>
  )
}
