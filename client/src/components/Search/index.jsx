import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_CARS } from "../../utils/queries";
import Home from "../../pages/Home";
import Card from "../Card";

export function Search({ props }) {
  const [formState, updateForm] = useState({ searchInput: "" });

  const { loading, data } = useQuery(QUERY_CARS);
  // check and set the car data to variable

  const carData = data?.cars;

  function handleSearch(event) {
    event.preventDefault();
    try {
      // get the values from the form
      const searchState = formState.searchInput.trim().toLowerCase().split(" ");

      // filter cards that match search
      const filteredCars = [];
      carData.filter((car) => {
        if (
          car.make.toLowerCase() == searchState[0] ||
          car.make.toLowerCase() == searchState[1]
        ) {
          filteredCars.push(car);
        }
      });
      console.log("you searched for:", filteredCars[0].make);
      // pass array of matches to the cards
      return filteredCars;
    } catch (error) {
      console.error(error);
    }
  }

  function handleTextChange(event) {
    const { name, value } = event.target;
    updateForm({
      ...formState,
      [name]: value,
    });
  }
  return (
    <div className="search">
      {/* <input placeholder="Enter name" />
      <button>Log value</button> */}
    </div>
  );
}
