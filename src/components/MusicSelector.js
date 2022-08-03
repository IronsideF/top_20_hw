import React from 'react'

const MusicSelector = ({genres, onGenreSelect}) => {

    const genresToSelect = genres.map((object, i) => <option key={i} value={i}>{object.name}</option>)

    const handleSelect = (event) => {
        const selectedGenre = genres[event.target.value]
        onGenreSelect(selectedGenre)
    }

    return(
        <select onChange={handleSelect} className='genre-selector'>
            {genresToSelect}
        </select>
    )
}

export default MusicSelector;