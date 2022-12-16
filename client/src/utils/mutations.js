import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!, $admin: Boolean!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const NEW_ORDER = gql`
  mutation newOrder($products: [ID]!) {
    newOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const NEW_USER = gql`
  mutation newUser(
    $input: AddUserInput!
  ) {
    newUser(
      input: $input
    ) {
      token
      user {
        _id
      }
    }
  }
`;
