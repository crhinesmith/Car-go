import React from "react";
import { Search } from "../Search";

const Card = (props) => {
  const cars = props?.cars;
  // handle the cars data from home page
  console.log("incoming propos ", props);
  // add buy logic
  function handleBuyCar(event) {
    event.preventDefault();
    // get user and car to say thank you User and show car
    // add incoming car to success page props
    // return the success page
  }

  // add wactch logic
  function handleWatchCar(event) {
    event.preventDefault();
    console.log("watch car");
    // find the user
    // add the car to the users watchlist
  }

  return (
    <div className="container d-flex flex-column justify-content-center">
      <div className="row justify-content-center">
        {/* loop cars array data to show cards */}
        {cars.map((car) => (
          <div className="cardBox" key={car._id}>
            <img
              className="cardImg"
              alt="pic of car"
              src={`${car?.image}`}
            ></img>
            <p className="makeLabel">Make: {car.make} </p>
            <p className="modelLabel">Model: {car.model}</p>
            <p className="yearLabel">Year: {car.year}</p>
            <p className="mileageLabel">Mileage: {car.mileage}</p>

            <form onSubmit={handleBuyCar} className="my-2">
              <button className="cardButton" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-bag-plus-fill m-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
                  />
                </svg>
                Buy
              </button>
            </form>
            <form onSubmit={handleWatchCar} className="my-2">
              <button className="cardButton" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-eye m-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
                Watch
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
