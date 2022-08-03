import React, { useEffect, useState } from 'react'
import MusicList from '../components/MusicList'
import MusicSelector from '../components/MusicSelector'

const MusicContainer = () => {

    const [music, setMusic] = useState([])
    const [genre, setGenre] = useState({name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"})

    const genreOptions = [{name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
{name:"Rock", url:"https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
{name:"Dance", url:"https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
{name: "Country", url:"https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"}]


    useEffect(() => {
        fetch(genre.url).then((response) => {return response.json()}).then((data) => {setMusic(data.feed.entry)})
    }, [genre])

    const onGenreSelect = (object) => {
        setGenre(object)
    }

    return(
        <>
        <MusicList music={music}/>
        <MusicSelector genres={genreOptions} onGenreSelect={onGenreSelect}/>
        </>
    )
}

export default MusicContainer;