import CharacterCard from "./CharacterCard";
import "../styles/layouts/CharacterList.scss";

function CharacterList({ characterList, searchName }) {
  //const renderList =()=>{
  let renderList = characterList.map((eachCharacter) => {
    return (
      <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />
    );
  });

  if (!renderList.length) {
    let mesaggeError = "There is no character matching the name  ";
    mesaggeError += searchName;

    return (
      <section>
        <span className="text__error">{mesaggeError}</span>
      </section>
    );
  } else {
    return (
      <section id="list">
        <ul className="list__eachCharacter">{renderList}</ul>
      </section>
    );
  }
}
export default CharacterList;
