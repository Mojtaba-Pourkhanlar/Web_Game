import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import { Spinner } from '@chakra-ui/spinner'
import { Heading, SimpleGrid, Text } from '@chakra-ui/layout'
import ExpandableText from '../components/ExpandableText'
import DefinitionItem from '../components/DefinitionItem'
import CriticScore from '../components/CriticScore'
import GameAttributes from '../components/GameAttributes'
import GameTrailer from '../components/GameTrailer'
import GameScreenShots from '../components/GameScreenShots'

const GameDetailPage = () => {
    const { slug } = useParams()
    const { data: game, isLoading, error } = useGame(slug!)

    if (isLoading) return <Spinner />
    if (error || !game) return null

    return (
        <div>
            <Heading>{game?.name}</Heading>
            <ExpandableText>{game?.description_raw}</ExpandableText>
            <GameAttributes game={game} />
            <GameTrailer gameId={game.id} />
            <GameScreenShots gameId={game.id} />
        </div>
    )
}

export default GameDetailPage