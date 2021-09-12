import { useQuery, useMutation } from "@apollo/react-hooks";

import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../queries";

export const useGetProduct = () => useQuery(GET_PRODUCTS);

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
