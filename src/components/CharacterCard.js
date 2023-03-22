import { Link } from "react-router-dom";
import "../styles/layouts/CharacterCard.scss";

function CharacterCard({ eachCharacter }) {
  return (
    <li>
      <Link to={"/character/" + eachCharacter.id}>
        <img
          className="eachCharacter__img"
          src={eachCharacter.image}
          alt="Foto de personaje de Harry Potter"
          title="Foto de personaje de Harry Potter"
        ></img>
        <h4 className="card__title">{eachCharacter.name}</h4>
        <p className="card__description">{eachCharacter.alive}</p>
        <p className="card__description">{eachCharacter.species}</p>
        <p className="card__description">{eachCharacter.gender}</p>
        <p className="card__description">{eachCharacter.house}</p>
      </Link>
    </li>
  );
}
export default CharacterCard;