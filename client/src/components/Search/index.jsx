import React from "react";

export function Search() {
  function handleSearch() {
    try {
      // Do something that could throw
      console.log("search clicked");
      // get the values from the form
      // query those values of car
      // render those values on the screen
    } catch (error) {
      this.setState({ error });
    }
  }

  return (
    <div className="search d-flex justify-content-center mb-4">
      <form className="d-flex" onSubmit={handleSearch}>
        <input
          className="searchBar"
          id="searchInput"
          placeholder="Search Cars"
        />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
