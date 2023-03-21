/* SECCIÓN DE IMPORT */
import '../styles/App.scss';
import Header from './Header';
import Main from './Main';
import dataApi from '../services/api';
import { useState, useEffect } from "react";

/* SECCIÓN DEL COMPONENTE */
function App() {

  /* VARIABLES ESTADO (DATOS) */
   const [data, setData] = useState ([])
  const [search, setSearch]= useState('')
  const [select, setSelect] = useState ('Gryffindor')

 //useEffect para la api
useEffect(() => {
    dataApi().then((response) => {
      setData(response);
    });
  }, []);

  /* HTML */
  return (
  <div className="App"> 
   <Header setSearch={setSearch} setSelect={setSelect} search={search}/>
    <Main data={data} search={search} select={select}/>
  </div>
  );
}

export default App;

