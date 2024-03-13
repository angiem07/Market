import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      name: $name
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
mutation getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const ADD_PRODUCT_MUTATION = gql`
  mutation AddProduct($name: String!, $image: String, $price: Float!, $quantity: Int!, $category: ID!) {
    addProduct(name: $name, image: $image, price: $price, quantity: $quantity, category: $category) {
      _id
      name
      price
      quantity
      category {
        _id
        name
      }
    }
  }
`;

