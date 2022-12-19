import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { Search } from "../components/Search";
import { useQuery } from "@apollo/client";
import { QUERY_CARS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_CARS);
  const load = data?.cars ?? [];

  // check and set the car data to variable
  const [myCars, updateCar] = useState(data?.cars ?? []);

  const [formState, updateForm] = useState({ searchInput: "" });
  let filteredCars = myCars;

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      // get the values from the form
      const searchState = formState.searchInput.trim().toLowerCase().split(" ");

      // filter cards that match search
      load.map((car) => {
        if (
          car.make.toLowerCase() === searchState[0] ||
          car.make.toLowerCase() === searchState[1]
        ) {
          filteredCars = [];
          filteredCars.push(car);
        } else if (
          car.make.toLowerCase() === "" ||
          car.make.toLowerCase() === ""
        ) {
          filteredCars = myCars;
        }
      });
      console.log("you searched for:", filteredCars);
      // pass array of matches to the cards

      updateCar(filteredCars);
    } catch (error) {
      console.error(error);
    }
  };

  function handleTextChange(event) {
    const { name, value } = event.target;
    updateForm({
      ...formState,
      [name]: value,
    });
  }

  const changeCars = () => {
    if (!loading && load) {
      return updateCar(() => load);
    } else {
      return updateCar(filteredCars);
    }
  };

  return (
    <section className="container d-flex justify-content-center flex-column my-2 py-3">
      <div className="search d-flex justify-content-center mb-4">
        <form
          id="searchForm"
          className="searchForm d-flex"
          onSubmit={handleSearch}
        >
          <input
            className="searchBar"
            id="searchInput"
            name="searchInput"
            placeholder="Search Cars"
            onChange={handleTextChange}
          />
          <button className="searchButton" type="submit">
            Search
          </button>
        </form>
      </div>

      {filteredCars[0] ? <Card cars={myCars} /> : <Card cars={load} />}
    </section>
  );
};

export default Home;
