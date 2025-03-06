import { NextResponse } from 'next/server'
import { metalGenres } from './metal-genres'

export async function GET() {
    return NextResponse.json(metalGenres)
}
