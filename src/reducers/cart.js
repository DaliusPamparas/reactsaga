const initialCart = {
    products: [],
  };
  

  export default (state = initialCart, action) => {
    switch (action.type) {
      case 'addToCart':
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      /* case 'REMOVE_FROM_CART':
        return {
          ...state,
          products: state.products.filter(o => o.id != action.payload),
        };
        break; */
      default:
        return state;
    }
  };