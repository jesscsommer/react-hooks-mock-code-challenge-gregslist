import React, { useContext } from "react";
import { ListingContext } from "../context/listingContext";

function Search() {
  const { dispatch } = useContext(ListingContext)

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  const handleChange = (e) => {
    dispatch({ type: 'search', payload: e.target.value})
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // value={""}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
