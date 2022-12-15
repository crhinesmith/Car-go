import React from "react";

export function Search() {
  function handleCarSearch() {
    try {
      // Do something that could throw
      console.log("search clicked");
    } catch (error) {
      this.setState({ error });
    }
  }

  return (
    <div className="search">
      <form className="d-flex p-2">
        <input
          className="searchBar"
          id="searchInput"
          placeholder="Enter name"
        />
        <button className="searchButton" onClick={handleCarSearch}>
          Log value
        </button>
      </form>
    </div>
  );
}
