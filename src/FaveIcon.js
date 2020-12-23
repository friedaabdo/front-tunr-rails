import React from "react";

const FaveIcon = (props) => {
  //   const songs = props.songs;
//   console.log("faveicon songs", props.song);
  const [faved, setFaved] = React.useState(<i className="far fa-heart"></i>);

  const handleClick = () => {
    if (props.song.fave === false) {
      props.isFave(props.song);
      setFaved(<i className="fas fa-heart"></i>);
      console.log("suppoosedly faved", faved, props.song);
    } else {
      props.isNotFave(props.song);
      setFaved(<i className="far fa-heart"></i>);
      console.log("supposedly unfaved", faved);
    }
  };

  return <h3 onClick={handleClick} >{faved}</h3>;
};

export default FaveIcon;
