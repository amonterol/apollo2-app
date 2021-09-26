import { gql } from "apollo-boost";

export const GET_PRODUCT = gql`
  query Product($id: ID) {
    product(id: $id) {
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

const productResponse = `
      _id
      name
      description
      status
      price
      cantidad
      category
      subcategory
      photo
`;

export const GET_PRODUCTS = gql`
  query Products($pageNumber: Int, $pageSize: Int) {
    products(pageNumber: $pageNumber, pageSize: $pageSize) {
      products {
        ${productResponse}
      }
      count
    }
    
  }
`;

export const GET_GESTION_PRODUCTOS = gql`
  query GestionProductos {
    gestionProductos {
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
export const GET_HIGHLIGHT_MUJERES = gql`
  query HighlightMujeres($limit: Int) {
    highlightMujeres(limit: $limit) {
      products {
        _id
        name
        photo
      }
    }
  }
`;
export const GET_HIGHLIGHT_HOMBRES = gql`
  query HighlightHombres($limit: Int) {
    highlightHombres(limit: $limit) {
      products {
        _id
        name
        photo
      }
    }
  }
`;

// Products mutation
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
  mutation UpdateProduct(
    $id: ID
    $name: String!
    $description: String!
    $status: String!
    $price: String!
    $cantidad: String!
    $category: String!
    $subcategory: String!
    $photo: String!
  ) {
    updateProduct(
      id: $id
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
