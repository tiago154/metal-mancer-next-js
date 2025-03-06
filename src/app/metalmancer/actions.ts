'use server'

export async function generateBandNameByGenreId(genreId: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/bands/genres/${genreId}/generate`, {
        method: 'POST'
    })

    const { bandName } = await response.json()

    return bandName
}