

function FilterHouse({ handleSelectHouse, selectHouse}) {
  const handleChange = (ev) => {
    const valueSelect = ev.target.value;
    handleSelectHouse(valueSelect);
  };

  return (
    <>
      <label htmlFor="house">
        Selecciona la casa:
      </label>
      <select
        className='select__houses'
        name="house"
        id="house"
        onChange={handleChange}
        value={selectHouse}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin </option>
        <option value="Ravenclaw">Ravenclaw </option>
        <option value="Hufflepuff">Hufflepuff</option>
      </select>
    </>
  );
}
export default FilterHouse;