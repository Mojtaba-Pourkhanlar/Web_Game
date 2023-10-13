import React from 'react'
import useScreenShots from '../hooks/useScreenShots'
import { SimpleGrid } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

interface Props {
    gameId: number
}

const GameScreenShots = ({ gameId }: Props) => {
    const { data, error, isLoading } = useScreenShots(gameId)

    if (isLoading) return null;
    if (error) return null;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            {
                data?.results.map((file) =>
                    <Image key={file.id} src={file.image}  />)
            }
        </SimpleGrid>
    )
}

export default GameScreenShots