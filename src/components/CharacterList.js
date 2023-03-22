import CharacterCard from './CharacterCard';


function CharacterList({ characterList, searchName }) {
  //const renderList =()=>{
    let dataHtml = characterList.map((eachCharacter) => {
    return <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />;
  });
  
  if (!dataHtml.length) {
    let mesaggeError = "No hay ningún personaje que coincida con el nombre: ";
    mesaggeError += searchName;

    return (
      <section>
        <span className="text--error">{mesaggeError}</span>
      </section>
    );
  } else {
    return (
      <section className="list">
        <ul className="eachCharacter">{dataHtml}</ul>
      </section>
    );
  }
}
export default CharacterList;
