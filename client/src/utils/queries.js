import { gql } from "@apollo/client";

export const QUERY_ALL_USERS = gql`
query Query {
  users {
    _id
    admin
    email
    firstName
    lastName
    password
    watching {
      _id
    }
  }
}
`;

export const QUERY_USER = gql`
query User($id: ID!) {
  user(_id: $id) {
    _id
    admin
    firstName
    email
    lastName
    password
    watching {
      _id
    }
  }
}
`;

export const QUERY_ORDER = gql`
query Order($id: ID!) {
  order(_id: $id) {
    _id
    car {
      _id
    }
  }
}
`;

export const QUERY_CARS = gql`
  {
    cars {
      _id
      image
      make
      mileage
      model
      year
    }
  }
`;
export const QUERY_CAR = gql`
query Car($id: ID!) {
  car(_id: $id) {
    _id
    image
    make
    mileage
    model
    year
  }
}
`;

export const QUERY_CAR_BY_MAKE = gql`
query Car($make: String!) {
  carMake(make: $make) {
    _id
    image
    make
    mileage
    model
    year
  }
}
`;



export const QUERY_CAR_BY_MODEL = gql`
query Car($model: String!) {
  carModel(model: $model) {
    _id
    image
    make
    mileage
    model
    year
  }
}
`;


export const QUERY_CAR_BY_MILEAGE = gql`
query CarsByMileage($minimumMileage: Int!, $maximumMileage: Int!) {
  carsByMileage(minimumMileage: $minimumMileage, maximumMileage: $maximumMileage) {
    _id
    image
    make
    mileage
    model
    year
  }
}

`;

export const QUERY_CHECKOUT = gql`
query CarsByMileage($car: [ID]!) {
  checkout(car: $car) {
    session
  }
}
`;