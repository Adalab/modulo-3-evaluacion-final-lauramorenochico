import main from '../styles/main.scss';

const Main =({data, search, select})=> {
    const renderList =()=>{
    return (data)
    .filter((eachCharacter) =>eachCharacter.name.toLowerCase().includes(search.toLowerCase()))
    .filter ((eachCharacter) => 
    eachCharacter.house.toLowerCase().includes(select.toLowerCase())
        )
    .map ((eachCharacter, id)=> (
    <li className="eachCharacter" key={id}>
        <img className="eachCharacter__image" src= {eachCharacter.image ? eachCharacter.image
              : `https://via.placeholder.com/180x240/cccccc/000000?text=Harry+Potter+Character`
          } alt="retrato personaje"/>
        <p className="eachCharacter_text">{eachCharacter.name}</p>
        <p className="eachCharacter_species">{eachCharacter.species}</p>
        <p className="eachCharacter_patronus">{eachCharacter.patronus}</p>
    </li>
    ));
  }
    return (
<main>
<ul className="eachCharacter_list">{renderList()}</ul>
</main>
);
}

export default Main; 
//data se trae como props para que funcione.*/

     
    