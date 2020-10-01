import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const initState = { photo: "", result: [] };

  const [state, setstate] = useState(initState);

  const clientId = "Ua0CjwRrGebzB9XNVoWTvtTqsCo2Z9qQU-nHlRXqGk4";

  function handleChange(event) {
    setstate({ ...state, photo: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const url =
      "https://api.unsplash.com/search/photos?page=1&client_id=" +
      clientId +
      "&query=" +
      state.photo +
      "/";

    console.log({ url });

    axios.get(url).then((response) => {
      setstate({ ...state, result: response.data.results });
    });
  }

  return (
    <div className="App">
      {console.log("rendering")}
      {console.log({ state })}
      <h1>Images Search</h1>
      <input
        type="text"
        name="photo"
        onChange={handleChange}
        placeholder="Search for photo..."
      />

      <button type="submit" onClick={handleSubmit}>
        Search
      </button>

      {state.result.map((photo) => {
        return <img src={photo.urls.small} key={photo.id} />;
      })}
    </div>
  );
}

export default App;
