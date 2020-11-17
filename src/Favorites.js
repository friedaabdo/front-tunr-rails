import React from 'react'
import FaveIcon from './FaveIcon'

const Favorites = (props) => {
console.log('favoties props', props)

const songs = props.faveSongs
console.log('this is fave songs',songs)
    return(
        <div>
         <h3>Favorite Song List</h3>
         <>
      {songs ? (
        <div id="song-list">
          {songs.map((song) => (
            <article key={song.id}>
              <section className="song-title">{song.title}</section>
              <section>{song.artist}</section>
              <section>{song.time}</section>

              <i
                className="fas fa-trash-alt delete"
                onClick={() => {
                  props.removeSong(song);
                  // props.history.push('/');
                }}
              ></i>

              <FaveIcon isFave={props.isFave} isNotFave={props.isNotFave} song={song}/>
            </article>
          ))}
        </div>
      ) : (
        <h1>Add Some Songs!</h1>
      )}
    </>
          
        </div>
    )
}

export default Favorites