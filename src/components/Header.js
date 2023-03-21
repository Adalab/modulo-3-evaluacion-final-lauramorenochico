
const Header = ({setSearch, setSelect, search}) => {

    const handleFilter=(ev)=>{
        ev.preventDefault(ev);
        setSearch(ev.target.value)
    };

     const handleSelect = (ev) => {
        ev.preventDefault(ev);
        const valueSelect = ev.currentTarget.value;
        setSelect(valueSelect)
    };

  return (
    <header className="header">
      <h1 className="header_title">Harry Potter</h1>
      <div className="header_div">
        <label className="label" htmlFor="character"> Busca por personaje
            <input 
            type="text"
            id="character"
            name="character"
            placeholder="Ej. Hermione Granger"
            value={search}
            onInput={handleFilter}/>
        </label >

        <label className="label" htmlFor="house"> Selecciona la Casa
            <select id="house" name="select" onChange={handleSelect}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            </select>
        </label>
      </div>
    </header>
  );
};

export default Header;
