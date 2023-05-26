import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import "../styles/layouts/Filters.scss";
import flag from "../images/flag1.png";
import flagb from "../images/flag3.png";

function Filters({
  handleSearchName,
  searchName,
  handleSelectHouse,
  selectHouse,
  handleResetData,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="section">
      <img src={flag} className="section__img1" />
      <form className="section__form" onSubmit={handleSubmit}>
        <FilterName
          handleSearchName={handleSearchName}
          searchName={searchName}
        />
        <FilterHouse
          handleSelectHouse={handleSelectHouse}
          selectHouse={selectHouse}
        />
      </form>
      <input
        className="section__btn"
        type="button"
        value="¡Obliviate!"
        onClick={handleResetData}
      />
      <img src={flagb} className="section__img2" />
    </section>
  );
}
export default Filters;
