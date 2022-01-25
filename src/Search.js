import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    setSearchValue("");
  };

  return (
    <form className="search">
      <input value={searchValue} onChange={handleSearchInputChanges} type="text" />
      <input onClick={callSearchFunction} type="submit" value="جستجو" />
    </form>
  );
};

export default Search;
