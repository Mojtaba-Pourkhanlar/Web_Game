import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import { Spinner } from '@chakra-ui/spinner'
import { Heading, Text } from '@chakra-ui/layout'
import ExpandableText from '../components/ExpandableText'

const GameDetailPage = () => {
    const { slug } = useParams()
    const { data, isLoading, error } = useGame(slug!)

    if (isLoading) return <Spinner />
    if (error || !data) return null


    return (
        <div>
            <Heading>{data?.name}</Heading>
            <ExpandableText>{data?.description_raw}</ExpandableText>
        </div>
    )
}

export default GameDetailPage