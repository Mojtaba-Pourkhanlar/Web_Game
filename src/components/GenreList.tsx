import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'
import { getCroppedImageUrl } from '../services/image-url'

const GenreList = () => {
    const { data, loading, error } = useGenre()

    if (loading) return <Spinner />
    if (error) return null

    return (
        <List>
            {
                data.map((gen) => <ListItem key={gen.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageUrl(gen.image_background)}
                        />
                        <Text fontSize="lg">{gen.name}</Text>
                    </HStack>
                </ListItem>)
            }
        </List>
    )
}

export default GenreList