import {createOrder} from '../api/index.js';

export const createorder = (order) => async (dispatch) => {

  try {
    const { data } = await createOrder(order);
    console.log(data);

    dispatch({ type: "CREATE", payload: data });

  } catch (error) {
    console.log(error.message);
  }

};