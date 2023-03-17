import "./App.css";
import Cards from "./Components/Cards/Cards";
import Nav from "./Components/Nav/Nav";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Components/About/About";
import Detail from "./Components/Detail/Detail";
import Form from "./Components/Form/Form";
import "./style.css"
import Favorites from "./Components/Favorite/Favorite";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "c96781287d77.2351ce168f8e2be388ae ";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  const {pathname} = useLocation()

  return (
    <div className="App">
{/*       { pathname !== "/" && <Nav onSearch={onSearch} />} */}
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/" element={<Form />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
