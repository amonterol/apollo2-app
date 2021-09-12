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
