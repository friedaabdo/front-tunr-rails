//import React

import React from "react";
import FaveIcon from "./FaveIcon";

//Create Playlist Component
const Playlist = (props) => {
//   console.log("this is playlist props,", props);
  let songs = props.songs;
//   console.log("this is songs in playlist", songs);

  return (
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
  );
};

export default Playlist;
