//Import React
import React from "react";

//Create Form Component
const Form = (props) => {
  //state for formData
  const [formData, setFormData] = React.useState(props.song);

  //handleSubmit function to lift data to App
  const handleSubmit = (event) => {
    console.log("this is formData:", formData);
    props.handleSubmit(formData); //Submit to App's desired function
    props.history.push("/"); //Push back up to display section
  };

  //HandleChange function to set formData to input from form
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label id="title" for="title">
        Title
      </label>
      <br />
      <input
        type="text"
        id="form-title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <br />
      <label id="artist" for="artist">
        Artist
      </label>
      <br />
      <input
        type="text"
        id="form-artist"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
      />
      <br />
      <label id="time" for="time">
        Time
      </label>
      <br />
      <input
        type="text"
        id="form-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      <br />
      <input id="createButton" type="submit" value={props.label} />
    </form>
  );
};

export default Form;