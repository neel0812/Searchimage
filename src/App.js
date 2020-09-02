import React,{useState} from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [photo,setPhoto]=useState("");
  const [clientId,setClientId]=useState("Ua0CjwRrGebzB9XNVoWTvtTqsCo2Z9qQU-nHlRXqGk4");
  const [result,setResult]=useState([])
  function handleChange(event){
    setPhoto(event.target.value);
  }

  function handleSubmit(event){
    console.log(photo);
    const url ="https://api.unsplash.com/photos?page=1&client_id="+clientId+"&query="+photo;
    axios.get(url).then(response=>{
      console.log(response);
      setResult(response.data)
    });
  }
  return (
    <div className="App">
                <h1>Images Search</h1>
                <input type="text" name="photo" onChange={handleChange} placeholder="Search for photo..."/>
                <button type="submit" onClick={handleSubmit}>Search</button>
                <div>
                {
                  result.map(photo=>(
                  <img src={photo.urls.small}/>
                  ))
                }
                </div>
    </div>
  );
}

export default App;
