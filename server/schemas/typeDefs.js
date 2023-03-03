const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Category {
    _id: ID
    Name: String
}

type Image {
    _id: ID
    name: String
    description: String
    img: String
}

type Product {
    _id: ID
    name: String
    description: String
    price: Float
    categories: [Category]
    image: [Image]
    featured: Boolean
    seasonal: Boolean
}

type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
    total: Float
}

type User {
    _id: ID
    userName: String
    email: String
    password: String
    role: Int
    orders: [Order]
}

type Checkout {
    session: ID
}

input ImageInput {
    name: String
    description: String
    img: String
}

type Checkout {
    _id: ID
    purchaseDate: String
    products: [Product]

}

type Auth {
    token: ID
    user: User
  }

type Query {
    user: User
    categories: [Category]! 
    products: [Product]!
    product(_id: ID!): Product
    order: [Order]!
    checkout(products: [ID]!, total: Float!): Checkout
}

type Mutation {
    addUser (
        userName: String!
        email: String!
        password: String!
        role: Int!
        ): Auth
    deleteUser(id: ID!): User
    updateUser(id: ID!, name: String, email: String, password: String): User
    addOrder (products: [ID]!, total: Float!): Order
    addCategory(Name: String!): Category
    addProduct(
        name: String!
        description: String!
        price: Float! 
        categories: [String]!
        image: ImageInput!
        ): Product 
    deleteProduct(productId: ID!): Product
    updateProduct(
        productId: ID!,
        name: String,
        description: String,
        price: Float,
        categories: [String],
        image: ImageInput
        ): Product
    removeCategory(categoryId: ID!): Category
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;