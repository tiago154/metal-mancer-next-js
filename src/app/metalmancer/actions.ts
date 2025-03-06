'use server'

export async function generateBandNameByGenreId(genreId: string) {
    const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.NEXT_PUBLIC_BASE_URL || ''
    const url = `${baseUrl}/api/bands/genres/${genreId}/generate`

    console.log('Request URL:', url) // Debug: Verifique a URL final da requisição

    try {
        const response = await fetch(url, { method: 'POST' })
        if (!response.ok) {
            const errorText = await response.text()
            console.error('Error Response:', errorText) // Debug: Exibir erro caso a resposta falhe
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const { bandName } = await response.json()
        console.log('Generated Band Name:', bandName) // Debug: Exibir o nome da banda gerado
        return bandName
    } catch (error) {
        console.error('Fetch Error:', error) // Debug: Exibir qualquer erro ocorrido
        return null // Retorne um valor padrão ou nulo caso haja erro
    }
}
