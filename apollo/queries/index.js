import { gql } from "apollo-boost";

export const GET_PRODUCT = gql`
  query Product($id: ID) {
    product(id: $id) {
      _id
      name
      description
      status
      price
      photo
    }
  }
`;

export const GET_PRODUCTS = gql`
  query Products {
    products {
      _id
      name
      description
      status
      price
      photo
    }
  }
`;
/*
export const CREATE_PRODUCT = gql`
  mutation CreateProduct {
    createProduct(
      input: {
        name: "new product"
        description: "new product descripton"
        status: "new available"
        price: 1002
        photo: "http://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg"
      }
    ) {
      _id
      name
      description
      status
      price
      photo
    }
  }
`;
*/

export const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $name: String!
    $description: String!
    $status: String!
    $price: String!
    $cantidad: String!
    $category: String!
    $subcategory: String!
    $photo: String!
  ) {
    createProduct(
      input: {
        name: $name
        description: $description
        status: $status
        price: $price
        cantidad: $cantidad
        category: $category
        subcategory: $subcategory
        photo: $photo
      }
    ) {
      _id
      name
      description
      status
      price
      cantidad
      category
      subcategory
      photo
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: ID) {
    updateProduct(
      id: $id
      input: {
        name: "Update Yeti Hondo"
        description: "Update soo nice"
        status: "Updated AVAILABLE"
        price: 3423
        photo: "http://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg"
      }
    ) {
      _id
      name
      description
      status
      price
      photo
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID) {
    deleteProduct(id: $id)
  }
`;

// AUTH QUERIES START ----------------------------

export const SIGN_UP = gql`
  mutation SignUp(
    $name: String!
    $username: String!
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    signUp(
      input: {
        name: $name
        username: $username
        email: $email
        password: $password
        passwordConfirmation: $passwordConfirmation
      }
    )
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      _id
      username
      role
    }
  }
`;

export const SIGN_OUT = gql`
  mutation SignOut {
    signOut
  }
`;

export const GET_USER = gql`
  query User {
    user {
      _id
      username
      role
    }
  }
`;

// AUTH QUERIES END ----------------------------
