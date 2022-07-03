import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoCitiesData } from "../../../data/geoDbAPI";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (termSearch) => {
    setSearch(termSearch);
    onSearchChange(termSearch);
  };

  const loadOptions = () => {
    // GeoCitiesData(search);
  };

  console.log(search);
  return (
    <>
      <AsyncPaginate placeholder=" Search for city " debounceTimeout={600} value={search} onChange={handleOnChange} loadOptions={loadOptions} />
    </>
  );
};

export default Search;
