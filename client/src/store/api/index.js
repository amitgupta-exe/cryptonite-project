import axios from 'axios';

const url = 'http://localhost:9001/orders';

export const fetchOrders = () => axios.get(url);
export const createOrder = (newOrder) => axios.post(url, newOrder);