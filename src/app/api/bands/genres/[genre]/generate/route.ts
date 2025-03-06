// /app/api/bands/genres/generate/route.ts
import { metalGenres } from '@/app/api/bands/genres/metal-genres'
import { NextRequest } from 'next/server'

type GenreKey = typeof metalGenres[number]['id']

const genreWords: Record<GenreKey, { adjectives: string[]; nouns: string[] }> = {
    'alternative-metal': {
        adjectives: ['alternative', 'psychotic', 'grungy', 'chaotic', 'neon', 'electric', 'rebellious', 'dark', 'fuzzy', 'raw', 'bizarre', 'subversive'],
        nouns: ['machine', 'revolution', 'dream', 'storm', 'force', 'pulse', 'truth', 'vibe', 'echo', 'mind', 'wreckage', 'sound']
    },
    'black-metal': {
        adjectives: ['dark', 'forbidden', 'satanic', 'mystical', 'eternal', 'frostbitten', 'unholy', 'shadowy', 'ancient', 'nocturnal', 'void'],
        nouns: ['night', 'void', 'fire', 'despair', 'soul', 'doom', 'blood', 'grave', 'witch', 'echo', 'curse', 'mystery']
    },
    'death-metal': {
        adjectives: ['violent', 'fleshless', 'rotting', 'decayed', 'carnal', 'infernal', 'demonic', 'gore-filled', 'savage', 'bloody', 'desolate'],
        nouns: ['blood', 'warrior', 'decay', 'scourge', 'reaper', 'torment', 'skeleton', 'destruction', 'plague', 'blight', 'death', 'raven']
    },
    'doom-metal': {
        adjectives: ['doomed', 'heavy', 'crushing', 'apocalyptic', 'blackened', 'bleak', 'grim', 'darkened', 'cataclysmic', 'sullen', 'enduring'],
        nouns: ['boulder', 'fall', 'death', 'wave', 'abyss', 'echo', 'grave', 'hell', 'fury', 'storm', 'darkness', 'chasm']
    },
    'folk-metal': {
        adjectives: ['mystic', 'ancient', 'wild', 'earthy', 'lunar', 'sacred', 'wooded', 'green', 'shamanic', 'tribal', 'pagan'],
        nouns: ['forest', 'shield', 'warrior', 'oath', 'blade', 'song', 'rune', 'circle', 'tale', 'song', 'winds', 'saga']
    },
    'groove-metal': {
        adjectives: ['groovy', 'powerful', 'heavy', 'raw', 'sick', 'soulful', 'pulsating', 'rhythmic', 'funky', 'saturated'],
        nouns: ['train', 'hammer', 'machine', 'thunder', 'shock', 'barrage', 'beats', 'pulse', 'groove', 'revolution', 'rush']
    },
    'heavy-metal': {
        adjectives: ['metallic', 'powerful', 'heavy', 'solid', 'forged', 'immortal', 'rocking', 'unstoppable', 'unbreakable', 'colossal'],
        nouns: ['iron', 'fist', 'storm', 'hammer', 'thunder', 'rage', 'machine', 'force', 'shield', 'rock', 'chaos']
    },
    'industrial-metal': {
        adjectives: ['industrial', 'mechanical', 'noisy', 'grinding', 'harsh', 'electronic', 'savage', 'futuristic', 'gritty', 'clanging'],
        nouns: ['factory', 'machine', 'grinder', 'steel', 'shock', 'void', 'wires', 'metal', 'pulse', 'gear', 'engine', 'concrete']
    },
    'metalcore': {
        adjectives: ['core', 'broken', 'heavy', 'intense', 'violent', 'sharp', 'raw', 'chaotic', 'powerful', 'distorted', 'crushing'],
        nouns: ['rage', 'edge', 'war', 'fire', 'blood', 'skull', 'fear', 'battle', 'crash', 'chaos', 'anarchy']
    },
    'nu-metal': {
        adjectives: ['modern', 'raw', 'dirty', 'chaotic', 'heavy', 'alternative', 'gritty', 'hardcore', 'blended', 'revolutionary'],
        nouns: ['machine', 'grind', 'fear', 'shock', 'war', 'rage', 'mind', 'edge', 'anger', 'truth', 'soul']
    },
    'power-metal': {
        adjectives: ['epic', 'legendary', 'mythical', 'mighty', 'heroic', 'valiant', 'celestial', 'radiant', 'shining', 'divine', 'immortal'],
        nouns: ['sword', 'dragon', 'quest', 'light', 'battle', 'victory', 'forge', 'myth', 'hero', 'phoenix', 'realm']
    },
    'progressive-metal': {
        adjectives: ['progressive', 'complex', 'intricate', 'avant-garde', 'dreamy', 'spacey', 'experimental', 'melodic', 'fusion', 'transcendental'],
        nouns: ['realm', 'universe', 'vision', 'dream', 'wave', 'dimension', 'mind', 'journey', 'path', 'reality', 'space']
    },
    'symphonic-metal': {
        adjectives: ['symphonic', 'grand', 'orchestral', 'majestic', 'divine', 'epic', 'celestial', 'melodic', 'harmonic', 'classical'],
        nouns: ['symphony', 'choir', 'harmonies', 'melody', 'orchestra', 'saga', 'choir', 'orchestra', 'angel', 'epic', 'serenade']
    },
    'thrash-metal': {
        adjectives: ['thrashing', 'fast', 'violent', 'sharp', 'aggressive', 'intense', 'frenzied', 'rage-fueled', 'frantic', 'unstoppable'],
        nouns: ['death', 'rage', 'chaos', 'flames', 'blade', 'destruction', 'revenge', 'fire', 'storm', 'fury', 'machine']
    }
}


const getRandomItem = (array: string[]) => {
    const randomItem = array[Math.floor(Math.random() * array.length)]
    return randomItem.replace(/^[a-z]/, (match) => match.toUpperCase())
}

export async function POST(_: NextRequest, { params }: { params: Promise<{ genre: string }> }) {
    const genre = (await params).genre

    if (!genre || !genreWords[genre]) {
        return new Response(JSON.stringify({ error: 'Invalid or missing genre' }), { status: 400 })
    }

    const { adjectives, nouns } = genreWords[genre]

    const randomAdjective = getRandomItem(adjectives)
    const randomNoun = getRandomItem(nouns)

    const bandName = `${randomAdjective} ${randomNoun}`

    return new Response(JSON.stringify({ bandName }), { status: 200 })
}
