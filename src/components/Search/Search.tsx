import { ReactComponent as SearchIcon } from "assets/search.svg";
import { useAppState } from "../../context/AppContext";
import "./styles.scss";

function Search() {
  const { search, changeSearch } = useAppState();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    changeSearch(event.target.value);
  }

  return (
    <div className="search-container">
      {/* <label htmlFor="search">
        <SearchIcon />
        Pesquisar
      </label> */}
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Pesquisar"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
