


function FilterName({ handleSearchName, searchName, error }) {
  const handleFilter = (ev) => {
    const value = ev.target.value;
    handleSearchName(value);
  };

  return (
    <>
      <label htmlFor="character">Busca por personaje:</label>
          <input
            className="form__input-text"
            autoComplete="off"
            type="search"
            name="character"
            placeholder="Ej. Hermione Granger"
            value={searchName}
            onChange={handleFilter}
        />
    </> 
  );
}
export default FilterName;
