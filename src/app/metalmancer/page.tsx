import MetalMancerClient from './MetalMancerClient'
import { metalGenres } from '@/app/api/bands/genres/metal-genres'

export default function MetalMancer() {
    return <MetalMancerClient metalStyles={metalGenres} />
}