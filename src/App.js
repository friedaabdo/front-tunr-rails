import React, { useState } from "react";
import "./App.css";
import Favorites from "./Favorites";
import { Route, Link, Switch } from "react-router-dom";
import Playlist from "./Playlist";
import Form from "./Form";

function App() {
  // URL for backend data
  const url = "https://tunr-rails2.herokuapp.com";
  // State to hold song list
  const [songs, setSongs] = useState([]);

  //Empty song for Form
  const emptySong = {
    title: "",
    artist: "",
    time: "",
  };

  //Fetch to get songs from backend
  const getSongs = () => {
    fetch(url + "/songs/")
      .then((res) => res.json())
      .then((data) => setSongs(data));
    // console.log("this is songs", songs);
  };



  //Get songs on page load
  React.useEffect(() => {
    getSongs();
  }, []);

  //get faved songs through filter
  let faveSongs = []
  songs ? (faveSongs = songs.filter((song) => song.fave === true)) : console.log('something went wrong')

  //handleCreate Function for creating songs in playlist
  const handleCreate = (newSong) => {
    console.log(newSong);
    fetch(url + "/songs/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    });
  };

  //deleteSong Function for deleting a song from playlist
  const removeSong = (song) => {
    fetch(url + "/songs/" + song.id, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getSongs();
    });
  };

  //update func to change fave btwn true and false
  const isFave = (song) => {
    song.fave = true
    fetch(url + "/songs/" + song.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       song
      })
    }).then(() => {
      getSongs();
    });
  }
    const isNotFave = (song) => {
      song.fave = false
      fetch(url + "/songs/" + song.id, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          song
        })
      }).then(() => {
        getSongs();
      });
  }



  //Return App structure
  return (
    <div className="App">
      <header>
        <h1 id="head-title">Tunr.</h1>
        <h2 id="head-subtitle">For all your playlist needs</h2>
        <hr id="red-divider" />
      </header>
      <div id="playlist-div">
        <h1 id="playlist-head">Playlist 1</h1>
        <Route
          exact
          path="/"
          render={(rp) => (
            <Playlist {...rp} songs={songs} isFave={isFave} isNotFave={isNotFave} removeSong={removeSong} />
          )}
        />
      </div>
      <Route exact path="/"
        render=
        {(rp) => (
          <Favorites
        faveSongs={faveSongs} isFave={isFave} isNotFave={isNotFave}
          />
        )} />
     
      <Route
        exact
        path="/"
        render={(rp) => (
          <Form
            {...rp}
            label="create"
            song={emptySong}
            handleSubmit={handleCreate}
          />
        )}
      />
    </div>
  );
}

export default App