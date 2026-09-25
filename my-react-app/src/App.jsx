import { useState } from 'react'

const pokemonTypes = [
  { name: 'Fire', symbol: '火', styles: 'border-orange-200 bg-orange-50 text-orange-800 hover:bg-orange-100' },
  { name: 'Water', symbol: '水', styles: 'border-sky-200 bg-sky-50 text-sky-800 hover:bg-sky-100' },
  { name: 'Grass', symbol: '草', styles: 'border-green-200 bg-green-50 text-green-800 hover:bg-green-100' },
  { name: 'Ground', symbol: '土', styles: 'border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100' },
]

function App() {
  const [selectedType, setSelectedType] = useState('')

  function getMatchup(type) {
  // API CALL WILL GO HERE, AND WE WILL RETURN THE RESPONSE
  return `Fake API response: You are fighting a ${type}-type Pokémon.`;
}

function handleTypeClick(type) {
  const response = getMatchup(type);
  setSelectedType(response);
}

  return (
    <main className="flex min-h-svh items-center justify-center px-5 py-12">
      <section aria-labelledby="page-title" className="w-full max-w-xl rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-10">
        <header className="mb-9">
          <div className="mb-6 flex items-center gap-3">
            <span aria-hidden="true" className="relative block size-9 overflow-hidden rounded-full border-2 border-slate-800 bg-white">
              <span className="absolute inset-x-0 top-0 h-1/2 border-b-2 border-slate-800 bg-red-500" />
              <span className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-slate-800 bg-white" />
            </span>
            <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Trainer toolkit</p>
          </div>
          <h1 id="page-title" className="text-3xl leading-tight font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pokémon <span className="text-red-600">Battle Assistant</span>
          </h1>
          <p className="mt-4 leading-relaxed text-slate-600">What type of Pokémon are you fighting?</p>
        </header>

        <div role="group" aria-label="Opponent Pokémon type" className="grid grid-cols-2 gap-3">
          {pokemonTypes.map(({ name, symbol, styles }) => (
            <button
              key={name}
              type="button"
              onClick={() => handleTypeClick(type.name)}
              className={`flex min-h-20 cursor-pointer items-center gap-3 rounded-xl border px-4 py-5 text-left font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-800 ${styles}`}
            >
              <span aria-hidden="true" className="text-xl">{symbol}</span>
              {name}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="mt-4 text-slate-600">{selectedType}</p>
      </section>
    </main>
  )
}

export default App
