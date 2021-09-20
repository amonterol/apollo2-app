import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";

import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SIGN_IN,
  SIGN_OUT,
  GET_USER,
} from "../queries";

export const useGetProducts = () => useQuery(GET_PRODUCTS);

export const useUpdateProduct = () => useMutation(UPDATE_PRODUCT);

export const useDeletePrduct = () =>
  useMutation(DELETE_PRODUCT, {
    update(cache, { data: { deleteProduct } }) {
      const { products } = cache.readQuery({ query: GET_PRODUCTS });
      const newProducts = products.filter((p) => p._id !== deleteProduct);
      cache.writeQuery({
        query: GET_PRODUCTS,
        data: { products: newProducts },
      });
    },
  });

export const useCreateProduct = () =>
  useMutation(CREATE_PRODUCT, {
    update(cache, { data: { createProduct } }) {
      const { products } = cache.readQuery({ query: GET_PRODUCTS });
      cache.writeQuery({
        query: GET_PRODUCTS,
        data: { products: [...products, createProduct] },
      });
    },
  });

// Auth actions start -----------------------

export const useSignIn = () =>
  useMutation(SIGN_IN, {
    update(cache, { data: { signIn: signedInUser } }) {
      cache.writeQuery({
        query: GET_USER,
        data: { user: signedInUser },
      });
    },
  });

export const useSignOut = () => useMutation(SIGN_OUT);

export const useLazyGetUser = () => useLazyQuery(GET_USER);

export const useGetUser = () => useQuery(GET_USER);

// Auth actions end -----------------------
