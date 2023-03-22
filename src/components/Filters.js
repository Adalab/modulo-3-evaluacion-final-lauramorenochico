import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import '../styles/layouts/filter.scss';

function Filters({handleSearchName, searchName, handleSelectHouse, selectHouse, handleResetData}) {
   const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="section">
      <form className="section__form" onSubmit={handleSubmit}>
        <FilterName handleSearchName={handleSearchName} searchName={searchName} />
        <FilterHouse handleSelectHouse={handleSelectHouse} selectHouse={selectHouse}/>
      </form>
      <input
          className="section__btn"
          type="button"
          value="¡Obliviate!"
          onClick={handleResetData}
        />
    </section>
  );
}
export default Filters;