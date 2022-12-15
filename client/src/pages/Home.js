import React, { useState } from "react";
import Cart from "../components/Cart";
import WatchList from "../pages/WatchList.js";
import Card from "../components/Card";
import { useQuery } from "@apollo/client";
import { QUERY_CARS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_CARS);
  // check and set the car data to variable

  const carData = data?.cars;

  return (
    <section className="container d-flex justify-content-center flex-column my-2 py-3">
      {loading ? <p>loading</p> : <Card cars={carData} />}
    </section>
  );
};

export default Home;
