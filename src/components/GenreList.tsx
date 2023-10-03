import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGenre, { Genre } from '../hooks/useGenre'
import { getCroppedImageUrl } from '../services/image-url'


interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
                        <Button fontWeight={gen.id === selectedGenre?.id ? "bold" : "normal"} onClick={() => onSelectGenre(gen)} fontSize="lg" variant="link">{gen.name}</Button>
                    </HStack>
                </ListItem>)
            }
        </List>
    )
}

export default GenreList