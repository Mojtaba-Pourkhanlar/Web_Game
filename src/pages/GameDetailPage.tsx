import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import { Spinner } from '@chakra-ui/spinner'
import { Heading, Text } from '@chakra-ui/layout'

const GameDetailPage = () => {
    const { slug } = useParams()
    const { data, isLoading, error } = useGame(slug!)

    if (isLoading) return <Spinner />
    if (error || !data) return null


    return (
        <div>
            <Heading>{data?.name}</Heading>
            <Text>{data?.description_raw}</Text>
        </div>
    )
}

export default GameDetailPage