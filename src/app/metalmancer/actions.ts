'use server'

export async function generateBandNameByGenreId(genreId: string) {
    const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.NEXT_PUBLIC_BASE_URL || ''
    const url = `${baseUrl}/api/bands/genres/${genreId}/generate`

    console.log('Request URL:', url)

    try {
        const response = await fetch(url, { method: 'POST' })
        if (!response.ok) {
            const errorText = await response.text()
            console.error('Error Response:', errorText)
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const { bandName } = await response.json()
        console.log('Generated Band Name:', bandName)
        return bandName
    } catch (error) {
        console.error('Fetch Error:', error)
        return null
    }
}
