import { useEffect, useState } from "react";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import getDataApi from "../services/api";
import "../styles/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import logo from "../images/logo.png";
import Hoglog from "../images/Hoglog.png";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [searchName, setSearchName] = useState(""); //variable de nombre
  const [selectHouse, setSelectHouse] = useState("Gryffindor");

  // Traer datos de la API
  useEffect(() => {
    getDataApi(selectHouse).then((cleanData) => {
      setCharacterList(cleanData);
    });
  }, [selectHouse]);

  // Funciones de búsqueda, reset y filtrado
  const handleSearchName = (value) => {
    setSearchName(value);
  };

  const handleSelectHouse = (value) => {
    setSelectHouse(value);
  };

  const handleResetData = () => {
    setSearchName("");
    setSelectHouse("Gryffindor");
  };

  // Filtrar por nombre y casa
  const characterFiltered = characterList
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLowerCase()
        .includes(searchName.toLowerCase());
    })
    .filter((eachCharacter) => {
      return eachCharacter.house === selectHouse;
    });

  // Ordenar alfabéticamente
  characterFiltered.sort((a, b) => a.name.localeCompare(b.name));
  const { pathname } = useLocation();
  const dataUrl = matchPath("/character/:id", pathname);
  const characterId = dataUrl !== null ? dataUrl.params.id : null;
  const characterFind = characterFiltered.find(
    (eachCharacter) => eachCharacter.id === characterId
  );

  return (
    <>
      <header className="header">
        <img alt="Harry Potter" title="Harry Potter" src={Hoglog} className="header__crest" />
        <img alt="Harry Potter" title="Harry Potter" src={logo} className="header__img" />
        <img alt="Harry Potter" title="Harry Potter" src={Hoglog} className="header__crest" />
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleSelectHouse={handleSelectHouse}
                  selectHouse={selectHouse}
                  setSelectHouse={selectHouse}
                  handleSearchName={handleSearchName}
                  searchName={searchName}
                  handleResetData={handleResetData}
                />

                <CharacterList
                  characterList={characterFiltered}
                  searchName={searchName}
                />
              </>
            }
          />
          <Route
            path="/character/:characterId"
            element={<CharacterDetail characterFind={characterFind} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
