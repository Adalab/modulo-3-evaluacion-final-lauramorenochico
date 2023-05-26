import "../styles/layouts/filterHouse.scss";

function FilterHouse({ handleSelectHouse, selectHouse, setSelectHouse }) {
  const handleChange = (ev) => {
    const valueSelect = ev.target.value;
    handleSelectHouse(valueSelect);
  };

  return (
    <>
      <label className="houseName" htmlFor="houseName">
        Selecciona la casa:
        <select
          className="houseName__text"
          name="houseName"
          id="houseName"
          onChange={handleChange}
          value={selectHouse}
        >
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin </option>
          <option value="Ravenclaw">Ravenclaw </option>
          <option value="Hufflepuff">Hufflepuff</option>
        </select>
      </label>
    </>
  );
}
export default FilterHouse;
