import React, { useState, useEffect } from 'react';
import FavoritesCards from '../components/FavoritesCards.jsx';
import Car from "../assets/car.jpg"
import Car2 from "../assets/car2.jpg"

// import { deleteCar } from '../'
// import { deleteCar } from '../utils/'
// import { removeCarId } from '../';
// import Auth from '../utils/auth';

const WatchList = () => {
    
    // const userDataLength = Object.keys(userData).length;
    const dummyData = [
        {
          id: 1,
          title: "Benz",
          imageUrl : Car2,
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur porro vitae voluptas! Atque esse voluptatum voluptatem repellat quo laudantium quidem aspernatur",
          price : "$100k"
        },
        {
          id: 2,
          title: "Toyota",
          imageUrl : Car,
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur porro vitae voluptas! Atque esse voluptatum voluptatem repellat quo laudantium quidem aspernatur",
          price : "$100k"
          
        },
        {
          id: 3,
          title: "Kia",
          imageUrl : Car,
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur porro vitae voluptas! Atque esse voluptatum voluptatem repellat quo laudantium quidem aspernatur",
          price : "$100k"
        },
        {
          id: 4,
          title: "Ford",
          imageUrl : Car,
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur porro vitae voluptas! Atque esse voluptatum voluptatem repellat quo laudantium quidem aspernatur",
          price : "$100k"
        }
      ];
  

return (
    <div style={{display: "flex", flexWrap : "wrap"}}>{
      // userDataLength > 0 ?
      dummyData.map((props)=> (
        <FavoritesCards key={props.id} {...props}  />
      )) 
      // : <h1>You have no favorites yet</h1>
    }
    </div>
)



}


export default WatchList;



