import useGenre from '../hooks/useGenre'

const GenreList = () => {
    const { data } = useGenre()
    return (
        <ul>
            {
                data.map((gen) => <li key={gen.id}>{gen.name}</li>)
            }
        </ul>
    )
}

export default GenreList