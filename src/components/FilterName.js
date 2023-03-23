import '../styles/layouts/filterName.scss';


function FilterName({ handleSearchName, searchName }) {
  const handleFilter = (ev) => {
    const value = ev.target.value;
    handleSearchName(value);
  };

  return (
    <>
      <label htmlFor="character" className="characterName">Busca por personaje:
          <input
            className="characterName__text"
            autoComplete="off"
            type="search"
            name="character"
            placeholder="Ej. Hermione Granger"
            value={searchName}
            onChange={handleFilter}
        />
      </label>
    </> 
  );
}
export default FilterName;
