import React, { useState } from "react";
import Cart from "../components/Cart";
import WatchList from "../pages/WatchList.js";
import Card from "../components/Card";
import { useQuery } from "@apollo/client";
import { QUERY_CARS } from "../utils/queries";
import { Search } from "../components/Search";

const Home = () => {
  const { loading, data } = useQuery(QUERY_CARS);
  // check and set the car data to variable
  // if (!data) (err) => console.error(err);

  // let carData;
  // if (data) {
  //   carData = data;
  // }
  const carData = data?.cars;
  console.log("carData ", carData);
  // set the data to the car card state
  // const [carCard, setCarCard] = useState([]);
  // setCarCard([carData]);

  // console.log("car card ", carCard);
  return (
    <section className="container d-flex justify-content-center flex-column my-2 py-3">
      <Search />
      {loading ? <p>loading</p> : <Card cars={carData} />}
    </section>
  );
};

export default Home;
