import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import Car from '../../assets/car.jpg'
import Car2 from '../../assets/car2.jpg'

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);
    
    // const userDataLength = Object.keys(userData).length;
    const cars = [
        {
          _id: 1,
          name: "Benz",
          image: Car2,
          quantity: 5,
          price: "$100k"
        },
        {
          _id: 2,
          name: "Toyota",
          image: Car,
          quantity: 10,
          price: "$100k"
          
        },
        {
          _id: 3,
          name: "Kia",
          image : Car,
          quantity: 20,
          price : "$100k"
        },
        {
          id: 4,
          name: "Ford",
          image : Car,
          quantity: 15,
          price : "$100k"
        }
      ];

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {/* {state.products.length ? ( */}
        <div className="flex-row">
          {/* {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}

            />
          ))} */}
          {
            cars.map((product)=> (
              <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
            )) 
          }
        </div>

      ) : (
        <h3>You haven't added any cars yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
