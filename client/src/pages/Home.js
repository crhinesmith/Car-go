
import React, {useState} from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import WatchList from "../pages/WatchList.js"
import Card from "../components/Card"


const Home = () => {
  // TODO: implement car cards to a state vairable
  const [carCard, setCarCard] = useState([]);

  
  return (
    <section className="container d-flex justify-content-center flex-column my-2 py-3">
      <Card />
    </section>
  );
};

export default Home;
