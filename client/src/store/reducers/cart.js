
const defaultState = {
    cart: [],
    cartTotal: 0,
}

export default (state = defaultState, action) => {

    switch (action.type) {

        case "ADD_TO_CART":

            if (action.payload.inCartQuantity === 0) {
                action.payload.inCartQuantity++;
                return { ...state, cart: [...state.cart, action.payload], cartTotal: state.cartTotal + action.payload.price };
            } else {
                action.payload.inCartQuantity++;
                return { ...state, cartTotal: state.cartTotal + action.payload.price };
            }


        case "DELETE_FROM_CART":
            state.cartTotal -= action.payload.price;

            if (action.payload.inCartQuantity === 1) {
                action.payload.inCartQuantity--;

                return { ...state, cart: state.cart.filter((item) => item._id !== action.payload._id) };
            } else {
                action.payload.inCartQuantity--;
            }

        default:
            return { ...state, cart: state.cart };
    }
}