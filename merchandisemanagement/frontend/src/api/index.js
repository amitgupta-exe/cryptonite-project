import axios from 'axios';

const url = 'http://localhost:9001/products';

export const fetchProducts = () => axios.get(url);
export const createProduct = (newPost) => axios.post(url, newPost);
export const updateProduct = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deleteProduct = (id) => axios.delete(`${url}/${id}`);
