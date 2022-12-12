
import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import WatchList from "../pages/WatchList.js"


const Home = () => {
  // TODO: implement car cards to a state vairable
  const [carCard, setCarCard] = useState([]);

  const Button = styled.button`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `;
  return (
    <section className="container d-flex justify-content-center flex-column my-2 py-3">
      <Card />
    </section>
  );
};

export default Home;
