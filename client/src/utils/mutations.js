import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $email: String!
    $password: String!
    $role: Int!
  ) {
    addUser(
      userName: $userName
      email: $email
      password: $password
      role: $role
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      _id
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!, $total: Float!) {
    addOrder(products: $products, total: $total) {
      _id
      purchaseDate
      products {
        _id
        name
        price
        description
        image {
          _id
          description
          img
        }
      }
      total
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation addCategory($Name: String) {
    addCategory(Name: $Name) {
      _id
      Name
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation updateCategory($id: ID!, $Name: String) {
    updateCategory(id: $id, Name: $Name) {
      _id
      name
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation removeCategory($Name: String!) {
    removeCategory(Name: $Name) {
      _id
      Name
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $description: String!
    $price: Float!
    $image: String!
    $categories: [ID]!
  ) {
    addProduct(
      name: $name
      description: $description
      price: $price
      image: $image
      categories: $categories
    ) {
      _id
      name
      description
      price
      image {
        _id
        description
        img
      }
      categories {
        _id
        Name
      }
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $_id: ID!
    $name: String!
    $description: String!
    $price: Float!
    $image: String!
    $categories: [ID]!
    $featured: Boolean
    $seasonal: Boolean
  ) {
    updateProduct(
      _id: $_id
      name: $name
      description: $description
      price: $price
      image: $image
      categories: $categories
      featured: $featured
      seasonal: $seasonal
    ) {
      _id
      name
      description
      price
      image {
        _id
        description
        img
      }
      categories {
        _id
        Name
      }
      featured 
      seasonal
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation removeProduct($_id: ID!) {
    removeProduct(_id: $_id) {
      _id
    }
  }
`;

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