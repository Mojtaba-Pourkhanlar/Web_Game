import React from 'react'
import useGenre from '../hooks/useGenre'

const GenreList = () => {
    const { genre } = useGenre()
    return (
        <ul>
            {
                genre.map((gen) => <li key={gen.id}>{gen.name}</li>)
            }
        </ul>
    )
}

export default GenreList