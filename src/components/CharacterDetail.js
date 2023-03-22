import { Link } from "react-router-dom";


function CharacterDetail({ characterFind }) {
  return (
    <div className="character">
      <Link className="character--button" to="/">
        Volver
      </Link>
      <article className="">
        <img
          className=""
          src={characterFind.image}
          alt="Imagen del personaje"
        />
        <ul className="">
          <li className="">{characterFind.name}</li>
          <li className="">
            Estatus:
            <span className="">
              {characterFind.alive}
            </span>
          </li>
          <li className="">
            Especie:
            <span className="">
              {characterFind.species}
            </span>
          </li>

          <li className="">
            Genero:
            <span className="">
              {characterFind.gender}
            </span>
          </li>
          <li className="">
            Casa:
            <span className="">
              {characterFind.house}
            </span>
          </li>
        </ul>
      </article>
    </div>
  );
}
export default CharacterDetail;
