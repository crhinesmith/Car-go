import { gql } from "@apollo/client";

// export const LOGIN = gql`
//   mutation login($email: String!, $password: String!, $admin: Boolean!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         admin
//         email
//         firstName
//         lastName
//         password
//         watching {
//           _id
//           image
//           make
//           mileage
//           model
//           year
//         }
//       }
//     }
//   }
// `;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const NEW_USER = gql`
  mutation NewUser($input: NewUserInput!) {
    newUser(input: $input) {
      token
      user {
        email
        firstName
        lastName
        admin
      }
    }
  }
`;

export const NEW_CAR = gql`
  mutation NewCar($input: NewCarInput!) {
    newCar(input: $input) {
      _id
      image
      make
      mileage
      model
      year
    }
  }
`;

export const ADD_CAR_TO_WATCHLIST = gql`
mutation AddCarToWatchlist($carId: ID!) {
  addCarToWatchlist(carId: $carId) {
    _id
  }
`;

export const REMOVE_CAR_FROM_WATCHLIST = gql`
  mutation RemoveCarFromWatchlist($carId: ID!) {
    removeCarFromWatchlist(carId: $carId) {
      _id
      admin
      email
      firstName
      lastName
      password
      watching {
        _id
        image
        make
        mileage
        model
        year
      }
    }
  }
`;

export const CAR_SOLD = gql`
  mutation CarSold($carId: ID!) {
    carSold(carId: $carId) {
      _id
      image
      make
      mileage
      model
      year
    }
  }
`;
