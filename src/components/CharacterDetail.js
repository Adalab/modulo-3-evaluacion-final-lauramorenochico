import { Link } from "react-router-dom";
import '../styles/layouts/characterDetail.scss';

function CharacterDetail({ characterFind }) {
  return (
    <>
    
    <div className="character">
      <section className="character__section1">
        <img
          className="character__section1--img"
          src={characterFind.image}
          alt= {`Imagen de ${characterFind.name}`}
            title= {`Imagen de ${characterFind.name}`}
            />
      
        <div>
        <h3 className="title">Name</h3>
        <p className="text">{characterFind.name}</p>
        <h3 className="title">Status:</h3>
          <p className="text">{characterFind.alive ? 'Viv@ 💓 ' : 'Muert@ 💀'}</p>
      
          <h3 className="title">Specie:</h3>
          <p className="text">{characterFind.species} 👤</p>
     

        
          <h3 className="title">Gender:</h3>
          <p className="text">{characterFind.gender}</p>
     

       
          <h3 className="title">Alternate name:</h3>
          <p className="text">{characterFind.alternate_names}</p>
  
          <h3 className="title">House:</h3>
          <p className="text"> {characterFind.house}</p>
     </div>
      </section>  
     </div>

     <section className="character__btn">
      <Link className="character__btn--link" to="/">
        Volver
      </Link>
      </section>   
    </>
  );
}
export default CharacterDetail;
