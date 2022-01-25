import React, { useState } from "react";
import "./Search.css";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

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
      <MDBInput label="نام خود را وارد کنید" id="form1" type="text" value={searchValue} onChange={handleSearchInputChanges} type="text" />
      <MDBBtn color="success" onClick={callSearchFunction} type="submit">
        جستجو
      </MDBBtn>
    </form>
  );
};

export default Search;
