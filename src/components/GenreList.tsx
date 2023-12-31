import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'
import { Genre } from "../entities/Genre";
import { getCroppedImageUrl } from '../services/image-url'

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
    const { data, isLoading, error } = useGenre()
    if (isLoading) return <Spinner />
    if (error) return null
    return (
        <>
            <Heading fontSize="2xl">Genrres</Heading>
            <List>
                {
                    data?.results.map((gen) => <ListItem key={gen.id} paddingY="5px">
                        <HStack>
                            <Image
                                objectFit="cover"
                                boxSize="32px"
                                borderRadius={8}
                                src={getCroppedImageUrl(gen.image_background)}
                            />
                            <Button whiteSpace="normal" textAlign="left" fontWeight={gen.id === selectedGenreId ? "bold" : "normal"} onClick={() => onSelectGenre(gen)} fontSize="lg" variant="link">{gen.name}</Button>
                        </HStack>
                    </ListItem>)
                }
            </List>
        </>
    )
}

export default GenreList