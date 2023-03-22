import { Link } from "react-router-dom";
import "../styles/layouts/characterCard.scss";

function CharacterCard({ eachCharacter }) {
  return (
    //<li className="li_Card">
      <Link className="link" to={"/character/" + eachCharacter.id}>
        <li className="li">
        <img
          className="img"
          src={eachCharacter.image}
          alt="Foto de personaje de Harry Potter"
          title="Foto de personaje de Harry Potter"
        ></img>
        <h4 className="name">{eachCharacter.name}</h4>
        <p className="species">{eachCharacter.species}</p>
        
      </li>
      </Link>
    //</li>
  );
}
export default CharacterCard;