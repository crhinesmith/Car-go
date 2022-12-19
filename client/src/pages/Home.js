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
    const { name, value } = event.target;

    try {
      updateForm({
        ...formState,
        [name]: value,
      });
      // get the values from the form
      const searchState = formState.searchInput.trim().toLowerCase().split(" ");
      // updateCar(searchState);

      // filter cards that match search
      filteredCars = [];
      console.log(searchState);

      load.map((car) => {
        // console.log(car);
        if (
          car.make.toLowerCase().includes(searchState[0]) ||
          car.make.toLowerCase().includes(searchState[1])
        ) {
          filteredCars.push(car);
          console.log(" XX", filteredCars);
          // updateCar(car);
        } else if (searchState[0] === "" || searchState[1] === "") {
          filteredCars = load;
        }
      });

      // pass array of matches to the cards
      updateCar(filteredCars);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="container d-flex justify-content-center flex-column my-2 py-3">
      <div className="search d-flex justify-content-center mb-4">
        <form id="searchForm" className="searchForm d-flex">
          <input
            className="searchBar text-center"
            id="searchInput"
            name="searchInput"
            placeholder="Search Cars"
            onChange={handleSearch}
          />
        </form>
      </div>

      {filteredCars.length ? <Card cars={myCars} /> : <Card cars={load} />}
    </section>
  );
};

export default Home;
