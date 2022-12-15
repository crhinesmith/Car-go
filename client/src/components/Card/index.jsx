import React from "react";
import styled from "@emotion/styled";

const Card = (props) => {
  // console.log("1. props from home: ", props);
  // handle the cars data from home page
  const cars = props.cars;

  return (
    <div className="container d-flex justify-content-center flex-column">
      {/* loop the array and print cards info */}

      {/* loop cars array data to show cards */}
      {cars.map((car) => (
        <div className="cardBox" key={car._id}>
          <div className="cardImg"></div>
          <p className="makeLabel">Make: {car.make} </p>
          <p className="modelLabel">Model: {car.model}</p>
          <button className="cardButton">
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
          <button className="cardButton">
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
        </div>
      ))}
    </div>
  );
};

export default Card;
