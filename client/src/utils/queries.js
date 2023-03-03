import { gql } from '@apollo/client';

export const QUERY_PRODUCT = gql`
    query getProduct($_id: ID!) {
        product (_id: $_id) {
            _id
            name
            description
            price
            image {
                name
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

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!, $total: Float! ) {
    checkout(products: $products, total: $total) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
     query products {
        products {
            _id
            name
            description
            price
            image {   
                name
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

export const QUERY_CATEGORIES = gql`
    query categories {
        categories {
            _id
            Name
        }
    }
`;
export const QUERY_USER = gql`
    query user {
        user {
            _id
            userName
            email
            password
            role
            orders {
                _id
                purchaseDate
                products {
                    _id
                    name
                    description
                    price
                   image {
                       _id
                       name
                       description
                       img 
                   }
                }
                total
            }
        }
    }
`;