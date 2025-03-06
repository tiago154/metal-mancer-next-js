'use client'

import { useState } from 'react'
import { generateBandNameByGenreId } from './actions'

export interface Genre {
    name: string
    id: string
}

interface MetalMancerClientProps {
    metalStyles: Genre[]
}

export default function MetalMancerClient({ metalStyles }: MetalMancerClientProps) {
    const [selectedStyle, setSelectedStyle] = useState({ name: '', id: '' })
    const [bandName, setBandName] = useState('')

    const generateBandName = async (genreId: string) => {
        if (!genreId) return

        const bandName = await generateBandNameByGenreId(genreId)
        setBandName(bandName)
    }

    return (
        <main className="bg-gray-900 text-white h-screen flex flex-col items-center justify-center p-6">
            <div className="text-center space-y-6">
                <h1 className="text-4xl font-bold uppercase">Escolha seu Estilo de Metal</h1>
                <p className="text-xl">Selecione um estilo de Metal para gerar o nome da sua banda.</p>

                <div className="flex flex-wrap justify-center space-x-4">
                    {metalStyles.map(({ name, id }) => (
                        <button
                            key={id}
                            onClick={() => setSelectedStyle({ name, id })}
                            className={`px-4 py-2 mt-4 bg-gray-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform ${selectedStyle.id === id ? 'bg-red-600 scale-105' : 'hover:scale-105'}`}
                        >
                            {name}
                        </button>
                    ))}
                </div>

                {selectedStyle.id && (
                    <div className="mt-6">
                        <p className="text-lg">Estilo Selecionado: {selectedStyle.name}</p>
                        <button
                            onClick={() => generateBandName(selectedStyle.id)}
                            className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Gerar Nome da Banda
                        </button>
                    </div>
                )}

                {bandName && (
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold">Nome da Banda:</h2>
                        <p className="text-xl">{bandName}</p>
                    </div>
                )}
            </div>
        </main>
    )
}
