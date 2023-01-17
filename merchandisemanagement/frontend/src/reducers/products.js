

export default (products = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...products, action.payload];
        case 'UPDATE':
            return products.map((product) => { return (product._id === action.payload._id ? action.payload : product) });
        case 'DELETE':
            return products.filter((post) => post._id !== action.payload);
        default:
            return products;
    }

}