import React from 'react'
import ListItem from './ListItem';

const MusicList = ({music}) => {

    const musicListed = music.map((track, i) => <ListItem key={i} name={track["im:name"].label} chart={i+1} artist={track["im:artist"].label} img={track["im:image"].find((element) => element.attributes.height==='170').label} preview={track.link.find((element) => element.attributes.title==='Preview').attributes.href}/>)
    
    return(
        <ul className='music-list'>
            {musicListed}
        </ul>
    );
}

export default MusicList;