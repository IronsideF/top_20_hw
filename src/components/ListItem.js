import React from 'react'

const ListItem = ({name, chart, artist, img, preview}) => {


    const song = new Audio(preview)

    const playSound = () => {
        song.play();
    }

    return (
        <div className='track-details'>
        <li className='song-title'>Name: {name}</li>
        <ul className='details-list'>
            <li>Chart Position: {chart}</li>
            <li>Artist: {artist}</li>
        </ul>
        <button onClick={playSound}><img className='album-cover' src={img} alt="Album Cover" /></button>
        <audio key={preview} controls className='audio-player'>
        <source src={preview}/>
        </audio>
        
        </div>
    )
}

export default ListItem;