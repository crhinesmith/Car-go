import React, { useState, useEffect } from 'react';
import {useQuery} from "@apollo/client"
import FavoritesCards from '../components/FavoritesCards.jsx';
import { QUERY_USER } from '../utils/queries.js';


// import { deleteCar } from '../'
// import { deleteCar } from '../utils/'
// import { removeCarId } from '../';
// import Auth from '../utils/auth';

const WatchList = () => {
    
    const {loading, data} = useQuery(QUERY_USER)
    const watchlist = data?.watching || {}

    console.log("watchlist", watchlist)


  

return (
    // <div style={{display: "flex", flexWrap : "wrap"}}>{
    //   // userDataLength > 0 ?
    //   dummyData.map((props)=> (
    //     <FavoritesCards key={props.id} {...props}  />
    //   )) 
    //   // : <h1>You have no favorites yet</h1>
    // }
    // </div>
    "nothing"
)



}


export default WatchList;



