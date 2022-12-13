import React from "react";

const FavoriteCards = (props) => {
    return <div>
        <h1>
            {props.title}
        </h1>
        <div>
            <img src={props.imageUrl} alt="cars" />
        </div>
            <p>
                {props.description}
            </p>
    </div>
}

export default FavoriteCards;