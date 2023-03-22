import { useEffect, useState } from 'react';
import { matchPath, Route, Routes, useLocation } from 'react-router-dom';
import getDataApi from '../services/api';
import '../styles/App.scss';
import '../styles/layouts/header.scss'
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail'; 
import logo from '../images/logo.png'




function App() {
  const [characterList, setCharacterList] = useState([]);
  const [searchName, setSearchName] = useState(''); //variable de nombre 
  const [selectHouse, setSelectHouse] = useState('Gryffindor');

  //traigo la Api
 useEffect(() => {
    getDataApi(selectHouse).then((cleanData) => {
      setCharacterList(cleanData);
    });
  }, [selectHouse]);


//funciones handle
  const handleSearchName = (value) => {
    setSearchName(value);
  };

  const handleSelectHouse = (value) => {
    setSelectHouse(value);
  };

const handleResetData = () => {
    setSearchName('');
    setSelectHouse("Gryffindor");
  };
//filtrado por párametros de entrada
  const characterFiltered = characterList.filter((eachCharacter) => {
    return eachCharacter.name.toLowerCase().includes(searchName.toLowerCase());
  })
  .filter((eachCharacter) => {
    return eachCharacter.house === selectHouse
  });

  //Ordenar por nombre
  characterFiltered.sort((a, b) => a.name.localeCompare(b.name));
  
  const {pathname} = useLocation();

  const dataUrl = matchPath('/character/:id', pathname);

  const characterId = dataUrl !== null ? dataUrl.params.id : null

  const characterFind = characterFiltered.find((eachCharacter) => eachCharacter.id === characterId)

  return(
       <div className='background'>
        <header className='header'>
        <img src={logo} className='header'/>
        </header>

        <main className="main">
        <Routes>
          <Route path='/' 
            element={<>
              <Filters 
              handleSelectHouse={handleSelectHouse}        selectHouse ={selectHouse}          
              handleSearchName={handleSearchName}
              searchName={searchName} 
              handleResetData={handleResetData}/>

              <CharacterList 
              characterList={characterFiltered} 
              searchName={searchName}/>
              </>
            }/>
          <Route path='/character/:characterId' 
           element={<CharacterDetail characterFind={characterFind}/>}/> 
        </Routes>
      </main>
      </div>
    )
}

export default App;

