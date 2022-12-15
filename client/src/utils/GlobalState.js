import React, { createContext, useContext } from "react";
import { useCarReducer } from './reducers'

const CarContext = createContext();
const { Provider } = CarContext;

const CarProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useCarReducer({
    users: [],
    user: [],
    cars: [],
    selectedCar: [],
    order: []
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCarContext = () => {
  return useContext(CarContext);
};

export { CarProvider, useCarContext };
