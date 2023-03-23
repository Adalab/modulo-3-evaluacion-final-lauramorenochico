import '../styles/layouts/filterHouse.scss';

function FilterHouse({ handleSelectHouse, selectHouse, setSelectHouse}) {
  const handleChange = (ev) => {
    const valueSelect = ev.target.value;
    handleSelectHouse(valueSelect);
  };

  return (
    <>
      <label className="house" htmlFor="house">
        Selecciona la casa:
      </label>
      <select
        className='house__text'
        name="house"
        id="house"
        onChange={handleChange}
        value={selectHouse}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin </option>
        <option value="Ravenclaw">Ravenclaw </option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="">All Houses</option>
      </select>
    </>
  );
}
export default FilterHouse;