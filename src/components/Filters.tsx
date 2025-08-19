import React, { useContext } from "react";

const Filters: React.FC<{
  filters: {
    text: string;
    sort: string;
  };
  setFilters: (filters: { text: string; sort: string }) => void;
}> = ({ filters, setFilters }) => {
  const updateFilters = (): void => {
    const textInput: HTMLInputElement | null = document.getElementById(
      "filterTextInput"
    ) as HTMLInputElement | null;
    const sortInput = document.getElementById(
      "sortFilter"
    ) as HTMLSelectElement | null;
    const text = textInput ? textInput.value.trim() : "";
    const sort = sortInput?.value ?? "recent";
    setFilters({ text, sort });
  };

  return (
    <form className="row filters__searchDiv" onChange={updateFilters}>
      <div className="col-sm-12 col-md-8">
        <input
          type="search"
          id="filterTextInput"
          className="form-control filter_textBox"
          placeholder="search"
        ></input>
      </div>
      <div className="col-sm-12 col-md-4">
        <select id="sortFilter" className="form-control filters__text">
          <option>Sort By</option>
          <option value="recent">Latest</option>
          <option value="highest">Highest</option>
          <option value="name">Name</option>
        </select>
      </div>
    </form>
  );
};

export default Filters;
